"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyInput,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../components";
import { detectUiLocale, normalizeLocaleTag } from "../../lib/outreachTracking";
import type { PianoVideoShowcase } from "../../lib/pianoLanding";
import { submitPianoLead } from "../../lib/pianoLead";
import styles from "./PianoLanding.module.css";

type PianoLandingClientProps = {
  videos: PianoVideoShowcase[];
};

type SubmitState = "idle" | "submitting" | "success" | "error";

type PhilosophyCard = {
  id: string;
  title: string;
  body: string;
};

const COOLDOWN_MS = 30_000;
const NEW_ZEALAND_COUNTRY_CODE = "NZ";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const philosophyCards: PhilosophyCard[] = [
  {
    id: "fun",
    title: "Fun comes first",
    body: "When a child likes the sound they are making, the piano stops feeling like homework and practice at home becomes much easier to invite.",
  },
  {
    id: "creativity",
    title: "Creativity belongs in lessons",
    body: "Improvising and reshaping songs teaches listening, rhythm, confidence, and ownership at the same time.",
  },
  {
    id: "classical",
    title: "Classical can come later",
    body: "Formal pieces and exams still matter for some students, but they land better after the child already feels that music belongs to them.",
  },
];

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function rangeProgress(value: number, start: number, end: number) {
  if (end <= start) return value >= end ? 1 : 0;
  return clamp01((value - start) / (end - start));
}

function plateauOpacity(
  value: number,
  fadeInStart: number,
  fadeInEnd: number,
  fadeOutStart: number,
  fadeOutEnd: number,
) {
  return rangeProgress(value, fadeInStart, fadeInEnd) * (1 - rangeProgress(value, fadeOutStart, fadeOutEnd));
}

export default function PianoLandingClient({ videos }: PianoLandingClientProps) {
  const [email, setEmail] = useState("");
  const [uiLocale] = useState(() => detectUiLocale() ?? "en");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [notificationStatus, setNotificationStatus] = useState<string | null>(null);
  const [wasDeduped, setWasDeduped] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
  const [nowTs, setNowTs] = useState<number>(() => Date.now());
  const [sceneProgress, setSceneProgress] = useState(0);
  const [revealedSections, setRevealedSections] = useState<Record<string, boolean>>({});
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activePhilosophyIndex, setActivePhilosophyIndex] = useState(0);
  const sceneTrackRef = useRef<HTMLDivElement | null>(null);
  const videoRailRef = useRef<HTMLDivElement | null>(null);
  const philosophyRailRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!cooldownUntil) return;
    const id = window.setInterval(() => setNowTs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [cooldownUntil]);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setRevealedSections((current) => (current.stage ? current : { ...current, stage: true }));
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = sceneTrackRef.current;
    if (!node) return;

    let rafId = 0;

    const updateProgress = () => {
      const viewportHeight = window.innerHeight || 1;
      const pageTop = window.scrollY || window.pageYOffset || 0;
      const revealStart = Math.max(0, node.offsetTop + viewportHeight * 0.04);
      const revealDistance = Math.max(node.offsetHeight - viewportHeight, viewportHeight * 2);
      const nextProgress = clamp01((pageTop - revealStart) / revealDistance);
      setSceneProgress((current) => (Math.abs(current - nextProgress) < 0.01 ? current : nextProgress));
      rafId = 0;
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const rails = [
      { node: videoRailRef.current, setIndex: setActiveVideoIndex },
      { node: philosophyRailRef.current, setIndex: setActivePhilosophyIndex },
    ];

    const cleanups = rails.flatMap(({ node, setIndex }) => {
      if (!node) return [];

      const handleScroll = () => {
        const nextIndex = Math.round(node.scrollLeft / Math.max(node.clientWidth, 1));
        setIndex(nextIndex);
      };

      handleScroll();
      node.addEventListener("scroll", handleScroll, { passive: true });
      return [() => node.removeEventListener("scroll", handleScroll)];
    });

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  }, []);

  const resolvedLocale = normalizeLocaleTag(uiLocale) ?? "en";
  const emailValid = emailRegex.test(email.trim());
  const cooldownRemaining = cooldownUntil ? Math.max(0, Math.ceil((cooldownUntil - nowTs) / 1000)) : 0;
  const cooldownActive = cooldownRemaining > 0;
  const canSubmit = emailValid && status !== "submitting" && !cooldownActive;

  const curtainProgress = rangeProgress(sceneProgress, 0.04, 0.34);
  const curtainOpen = curtainProgress > 0.08;

  const showcaseOpacity = 1 - rangeProgress(sceneProgress, 0.5, 0.6);
  const showcaseActive = sceneProgress < 0.58;
  const showcaseCopyOpacity = plateauOpacity(sceneProgress, 0.16, 0.24, 0.48, 0.58);

  const philosophyOpacity = plateauOpacity(sceneProgress, 0.56, 0.66, 0.82, 0.9);
  const philosophyActive = sceneProgress > 0.4 && sceneProgress < 0.92;

  const contactOpacity = rangeProgress(sceneProgress, 0.86, 0.94);
  const contactActive = sceneProgress > 0.72;

  function resetSubmissionState() {
    setStatus("idle");
    setNotificationStatus(null);
    setWasDeduped(false);
    setErrorMessage(null);
  }

  function scrollRailToIndex(rail: HTMLDivElement | null, index: number) {
    if (!rail) return;
    rail.scrollTo({
      left: rail.clientWidth * index,
      behavior: "smooth",
    });
  }

  function mapError(code?: string | null) {
    if (!code) return "The enquiry service is not responding in this local build yet.";
    if (code.startsWith("LEADS_RATE_LIMIT")) {
      return "Too many tries right now. Please wait 30 seconds and try again.";
    }
    if (code === "LEADS_EMAIL_INVALID" || code === "LEADS_EMAIL_TOO_SHORT" || code === "LEADS_EMAIL_TOO_LONG") {
      return "Enter a valid email address.";
    }
    if (code === "LEADS_UI_LOCALE_INVALID") {
      return "Locale detection failed. Please refresh and try again.";
    }
    if (code === "SUPABASE_CONFIG_MISSING" || code === "LEADS_NETWORK_ERROR" || code === "LEADS_UNKNOWN_ERROR") {
      return "This local build is not connected to the enquiry service yet.";
    }
    return "Something went wrong. Please try again.";
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setNotificationStatus(null);
    setWasDeduped(false);
    setErrorMessage(null);

    const result = await submitPianoLead({
      email: email.trim(),
      country_code: NEW_ZEALAND_COUNTRY_CODE,
      ui_locale: resolvedLocale,
    });

    if (!result.ok) {
      if (result.error?.startsWith("LEADS_RATE_LIMIT")) {
        setCooldownUntil(Date.now() + COOLDOWN_MS);
      }
      setStatus("error");
      setErrorMessage(mapError(result.error));
      return;
    }

    setNotificationStatus(result.notification_status ?? null);
    setWasDeduped(Boolean(result.deduped));
    setStatus("success");
  }

  return (
    <main className={styles.page}>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section
            ref={stageRef}
            data-section="stage"
            className={`${styles.section} ${revealedSections.stage ? styles.revealed : ""}`}
          >
            <div className={styles.atmosphere} aria-hidden="true">
              <div className={styles.pianoGlow} />
              <div className={styles.soundOrbit} />
            </div>

            <div className={styles.curtainStage}>
              <div ref={sceneTrackRef} className={styles.sceneTrack}>
                <div className={styles.stickyStage}>
                  <div
                    className={`${styles.curtainFrame} ${curtainOpen ? styles.curtainOpen : ""}`}
                    style={{ "--curtain-progress": curtainProgress } as React.CSSProperties}
                  >
                    <div className={styles.curtainHero}>
                      <div className={styles.heroCopy}>
                        <KinlyStack direction="vertical" gap="m">
                          <KinlyText variant="labelSmall" tone="muted" as="span">
                            New Zealand piano lessons for children
                          </KinlyText>
                          <KinlyHeading level={1}>Want to have fun learning music?</KinlyHeading>
                          <KinlyText variant="bodyLarge">
                            I teach piano by making music feel alive first, so children want to come back to the piano
                            at home.
                          </KinlyText>
                          <div className={styles.heroActions}>
                            <KinlyButton
                              onClick={() =>
                                videoRailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
                              }
                            >
                              See the transformations
                            </KinlyButton>
                          </div>
                        </KinlyStack>
                      </div>
                    </div>

                    <div className={styles.curtainLeft} aria-hidden="true" />
                    <div className={styles.curtainRight} aria-hidden="true" />
                    <div className={styles.spotlight} aria-hidden="true" />

                    <div
                      className={`${styles.narrativeScene} ${styles.showcaseScene}`}
                      data-active={showcaseActive ? "true" : "false"}
                      style={
                        {
                          "--scene-opacity": showcaseOpacity,
                          "--scene-copy-opacity": showcaseCopyOpacity,
                        } as React.CSSProperties
                      }
                    >
                      <div className={styles.stageViewport}>
                        <div ref={videoRailRef} className={styles.videoRail} aria-label="Piano transformation videos">
                          {videos.map((video, index) => (
                            <article
                              key={video.id}
                              className={styles.videoPanel}
                              style={{ animationDelay: `${index * 120}ms` }}
                            >
                              <div className={styles.videoFrame}>
                                <iframe
                                  src={video.embedUrl}
                                  title={video.title}
                                  loading={index === activeVideoIndex ? "eager" : "lazy"}
                                  style={
                                    video.thumbnailUrl
                                      ? {
                                          backgroundImage: `url(${video.thumbnailUrl})`,
                                          backgroundPosition: "center",
                                          backgroundSize: "cover",
                                          backgroundRepeat: "no-repeat",
                                        }
                                      : undefined
                                  }
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  allowFullScreen
                                />
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>

                      <div className={styles.sceneBody}>
                        <div className={styles.videoCaption}>
                          <KinlyHeading level={3}>{videos[activeVideoIndex]?.strap ?? videos[0]?.strap}</KinlyHeading>
                          <KinlyText variant="bodyMedium">
                            {videos[activeVideoIndex]?.description ?? videos[0]?.description}
                          </KinlyText>
                          {videos[activeVideoIndex]?.watchUrl ? (
                            <div className={styles.videoActions}>
                              <KinlyButton
                                href={videos[activeVideoIndex]?.watchUrl ?? "#"}
                                target="_blank"
                                rel="noreferrer"
                                variant="ghost"
                                size="sm"
                              >
                                Open on YouTube
                              </KinlyButton>
                            </div>
                          ) : null}
                        </div>

                        <div className={styles.dotNav} aria-label="Video slide navigation">
                          {videos.map((video, index) => (
                            <KinlyButton
                              key={video.id}
                              type="button"
                              size="sm"
                              variant={activeVideoIndex === index ? "filled" : "ghost"}
                              aria-label={`Show video ${index + 1}: ${video.strap}`}
                              aria-pressed={activeVideoIndex === index}
                              onClick={() => scrollRailToIndex(videoRailRef.current, index)}
                            >
                              <span className={styles.dotGlyph} aria-hidden="true" />
                            </KinlyButton>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${styles.narrativeScene} ${styles.philosophyScene}`}
                      data-active={philosophyActive ? "true" : "false"}
                      style={
                        {
                          "--scene-opacity": philosophyOpacity,
                          "--scene-copy-opacity": philosophyOpacity,
                        } as React.CSSProperties
                      }
                    >
                      <div className={styles.sceneBody}>
                        <div className={styles.sectionLead}>
                          <KinlyText variant="labelSmall" tone="muted" as="span">
                            Why this approach
                          </KinlyText>
                          <KinlyHeading level={2}>The goal is more playing at home, not just lessons.</KinlyHeading>
                          <KinlyText variant="bodyMedium">
                            Three simple ideas sit underneath the teaching style.
                          </KinlyText>
                        </div>

                        <div ref={philosophyRailRef} className={styles.philosophyRail} aria-label="Teaching philosophy">
                          {philosophyCards.map((card) => (
                            <KinlyCard key={card.id} variant="surfaceContainerHigh">
                              <div className={styles.philosophyPanel}>
                                <KinlyHeading level={3}>{card.title}</KinlyHeading>
                                <KinlyText variant="bodyMedium">{card.body}</KinlyText>
                              </div>
                            </KinlyCard>
                          ))}
                        </div>

                        <div className={styles.dotNav} aria-label="Philosophy slide navigation">
                          {philosophyCards.map((card, index) => (
                            <KinlyButton
                              key={card.id}
                              type="button"
                              size="sm"
                              variant={activePhilosophyIndex === index ? "filled" : "ghost"}
                              aria-label={`Show philosophy point ${index + 1}: ${card.title}`}
                              aria-pressed={activePhilosophyIndex === index}
                              onClick={() => scrollRailToIndex(philosophyRailRef.current, index)}
                            >
                              <span className={styles.dotGlyph} aria-hidden="true" />
                            </KinlyButton>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${styles.narrativeScene} ${styles.contactScene}`}
                      data-active={contactActive ? "true" : "false"}
                      style={
                        {
                          "--scene-opacity": contactOpacity,
                          "--scene-copy-opacity": contactOpacity,
                        } as React.CSSProperties
                      }
                    >
                      <KinlyCard variant="surfaceContainerHigh">
                        <form className={styles.formCard} onSubmit={handleSubmit}>
                          <KinlyStack direction="vertical" gap="m">
                            <div className={styles.sectionLead}>
                              <KinlyText variant="labelSmall" tone="muted" as="span">
                                Interested?
                              </KinlyText>
                              <KinlyHeading level={2}>Leave your email and I&apos;ll follow up.</KinlyHeading>
                              <KinlyText variant="bodyMedium">
                                I&apos;m only taking New Zealand students for now, so NZ is already set in the background.
                              </KinlyText>
                            </div>

                            <KinlyInput
                              label="Email"
                              type="email"
                              value={email}
                              onChange={(event) => {
                                setEmail(event.target.value);
                                if (status !== "idle" || errorMessage || notificationStatus || wasDeduped) {
                                  resetSubmissionState();
                                }
                              }}
                              autoComplete="email"
                              required
                              placeholder="you@example.com"
                              error={email ? (emailValid ? undefined : "Enter a valid email address.") : undefined}
                            />

                            {status === "error" && errorMessage ? (
                              <KinlyText variant="bodySmall" tone="danger">
                                {errorMessage}
                              </KinlyText>
                            ) : null}

                            {cooldownRemaining > 0 ? (
                              <KinlyText variant="bodySmall" tone="warning">
                                Too many tries right now. Please wait {cooldownRemaining} seconds and try again.
                              </KinlyText>
                            ) : null}

                            {status === "success" ? (
                              <KinlyCard variant="surface">
                                <div className={styles.successCard}>
                                  <KinlyHeading level={3}>Thanks. I&apos;ve got your email.</KinlyHeading>
                                  <KinlyText variant="bodyMedium">
                                    {notificationStatus === "sent"
                                      ? "I can see your enquiry has gone through, and I’ll follow up about lessons, what your child enjoys, and whether this approach feels like the right fit."
                                      : wasDeduped
                                        ? "You’re already on my list, so I won’t duplicate the enquiry. I’ll still follow up about lessons and whether this approach feels like the right fit."
                                        : "Your enquiry has been saved. If I’m not notified instantly in this environment, I’ll still follow up about lessons and whether this approach feels like the right fit."}
                                  </KinlyText>
                                </div>
                              </KinlyCard>
                            ) : null}

                            <div className={styles.contactActions}>
                              {emailValid || status === "submitting" ? (
                                <KinlyButton type="submit" disabled={!canSubmit} isLoading={status === "submitting"}>
                                  Ask about lessons
                                </KinlyButton>
                              ) : null}
                            </div>
                          </KinlyStack>
                        </form>
                      </KinlyCard>
                    </div>

                    <div className={styles.keysBand} aria-hidden="true">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <span key={`key-${index}`} className={styles.key} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
