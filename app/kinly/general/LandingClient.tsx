"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../components";
import {
  buildClientEventId,
  detectUiLocale,
  ensureSessionId,
  hasPageViewBeenSent,
  logOutreachEvent,
  markPageViewSent,
  normalizeCountryCode,
  OutreachStore,
  readUtmParams,
} from "../../../lib/outreachTracking";
import { resolveLandingCopy } from "./copy";
import { resolveStoreBadges } from "../../../lib/storeBadges";
import { resolveLandingScreenAsset } from "../shared/landingScreenAssets";
import styles from "./LandingClientGeneral.module.css";

type InterestMarker = {
  country_code?: string;
  ui_locale?: string;
  captured_at?: string;
};

type LandingClientProps = {
  detectedCountryCode?: string | null;
};

type FeatureCard = {
  title: string;
  benefit: string;
  image: string;
};

const SUPPORTED_REGIONS = ["NZ", "SG"];
const APP_STORE_URL =
  (process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378") as string;
const PLAY_STORE_URL =
  (process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
    "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly") as string;
const PAGE_KEY = "kinly_general";
const SUPPORTING_IMAGES = {
  friction: "/images/landing/friction-shared-home.webp",
  calm: "/images/landing/calm-shared-home.webp",
} as const;

type StoreCtasProps = {
  suppress: boolean;
  onClick: (store: OutreachStore) => void;
  labels: { app: string; play: string };
  badges: { apple: string; play: string };
};

function StoreCtas({ suppress, onClick, labels, badges }: StoreCtasProps) {
  if (suppress) return null;
  return (
    <div className={styles.storeCtas}>
      <KinlyStack direction="horizontal" gap="s" wrap>
        <a
          className={styles.storeBadgeLink}
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.app}
          onClick={() => onClick("ios_app_store")}
        >
          <img src={badges.apple} alt={labels.app} className={styles.storeBadge} />
        </a>
        <a
          className={styles.storeBadgeLink}
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.play}
          onClick={() => onClick("google_play")}
        >
          <img src={badges.play} alt={labels.play} className={styles.storeBadge} />
        </a>
      </KinlyStack>
    </div>
  );
}

function readInterestMarker(): InterestMarker | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("kinly_interest_status");
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as InterestMarker;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      country_code: parsed.country_code ? String(parsed.country_code).toUpperCase() : undefined,
      ui_locale: parsed.ui_locale ? String(parsed.ui_locale) : undefined,
      captured_at: parsed.captured_at ? String(parsed.captured_at) : undefined,
    };
  } catch {
    return null;
  }
}

export default function LandingClient({ detectedCountryCode = null }: LandingClientProps) {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureRailRef = useRef<HTMLDivElement | null>(null);

  const searchParams = useSearchParams();
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);

  useEffect(() => {
    setHasHydrated(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const sessionId = useMemo(() => (hasHydrated ? ensureSessionId() : null), [hasHydrated]);
  const uiLocale = useMemo(() => (hasHydrated ? detectUiLocale() : null), [hasHydrated]);
  const lang = useMemo(() => (uiLocale ? uiLocale.split("-")[0]?.toLowerCase() ?? null : null), [uiLocale]);
  const copy = useMemo(() => resolveLandingCopy(lang), [lang]);
  const isRtl = lang === "ar" || lang === "he" || lang === "fa" || lang === "ur";
  const storeBadges = useMemo(() => resolveStoreBadges(lang), [lang]);
  const heroScreens = copy.screens.slice(0, 3);
  const featureCards = useMemo<FeatureCard[]>(() => {
    if (copy.featureScreens.length >= 4) {
      return copy.featureScreens.slice(0, 4);
    }

    const locale = lang ?? "en";
    const titles = ["Shared flows", "Shared groceries", "Shared bills", "Calm check-ins"];
    const benefits = [
      "Add context, guide links, and photos so repeat tasks are clear without reminders.",
      "Capture item, quantity, notes, and photos so shopping is clear for everyone.",
      "Split costs fairly with clear amounts, dates, and purchase context.",
      "Needs are noticed early and without blame.",
    ];
    const keys = ["flows", "groceries", "bills", "checkins"] as const;

    return keys.map((key, index) => ({
      title: titles[index],
      benefit: benefits[index],
      image: resolveLandingScreenAsset(locale, key),
    }));
  }, [copy.featureScreens, lang]);

  const interestMarker = useMemo<InterestMarker | null>(
    () => (hasHydrated ? readInterestMarker() : null),
    [hasHydrated],
  );

  const interestCountry = interestMarker?.country_code ?? null;
  const regionCountry = useMemo(
    () => (interestCountry ? interestCountry : detectedCountryCode ? detectedCountryCode.toUpperCase() : null),
    [detectedCountryCode, interestCountry],
  );
  const normalizedCountry = useMemo(() => normalizeCountryCode(regionCountry), [regionCountry]);

  const suppressStoreCtas = useMemo(() => {
    if (!regionCountry) return false;
    return !SUPPORTED_REGIONS.includes(regionCountry);
  }, [regionCountry]);

  useEffect(() => {
    if (!sessionId) return;
    if (hasPageViewBeenSent(PAGE_KEY, sessionId)) return;

    markPageViewSent(PAGE_KEY, sessionId);

    void logOutreachEvent({
      event: "page_view",
      page_key: PAGE_KEY,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry,
      ui_locale: uiLocale,
    });
  }, [normalizedCountry, sessionId, uiLocale, utmParams.utm_campaign, utmParams.utm_medium, utmParams.utm_source]);

  useEffect(() => {
    const rail = featureRailRef.current;
    if (!rail) return;

    let frame = 0;

    const updateActiveIndex = () => {
      const cards = rail.querySelectorAll<HTMLElement>("[data-feature-card-index]");
      if (!cards.length) {
        setActiveFeatureIndex(0);
        return;
      }

      const viewportCenter = rail.scrollLeft + rail.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveFeatureIndex((prev) => (prev === nearestIndex ? prev : nearestIndex));
    };

    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveIndex);
    };

    updateActiveIndex();
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [featureCards.length]);

  function scrollToFeature(index: number) {
    const rail = featureRailRef.current;
    if (!rail) return;

    const target = rail.querySelector<HTMLElement>(`[data-feature-card-index="${index}"]`);
    if (!target) return;

    rail.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  }

  function handleCtaClick(store: OutreachStore) {
    if (!sessionId) return;

    void logOutreachEvent({
      event: "cta_click",
      page_key: PAGE_KEY,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry,
      ui_locale: uiLocale,
      store,
      client_event_id: buildClientEventId(),
    });
  }

  return (
    <main className={styles.page} dir={isRtl ? "rtl" : "ltr"}>
      <div className={styles.backdrop} aria-hidden="true" />

      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section className={styles.recognition}>
            <KinlyStack direction="vertical" gap="xs">
              <KinlyHeading level={1}>{copy.recognition.heading}</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                {copy.recognition.subhead}
              </KinlyText>
              <KinlyText variant="bodyMedium">{copy.recognition.body}</KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={styles.heroContent}>
                <KinlyStack direction="vertical" gap="m">
                  <KinlyStack direction="horizontal" gap="s" align="center">
                    <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                    <KinlyHeading level={2}>{copy.hero.headline}</KinlyHeading>
                  </KinlyStack>
                  <KinlyText variant="bodyMedium" tone="muted">
                    {copy.hero.subhead}
                  </KinlyText>
                  <KinlyText variant="bodyMedium">{copy.hero.body}</KinlyText>
                  <KinlyText variant="bodyMedium" tone="muted">
                    {copy.hero.privacyNote}
                  </KinlyText>
                </KinlyStack>
              </div>

              <div className={styles.heroVisual}>
                {heroScreens[0] ? (
                  <div className={styles.deviceFrame}>
                    <div className={styles.deviceScreen}>
                      <img src={heroScreens[0].image} alt={`${heroScreens[0].title} screen`} loading="lazy" />
                    </div>
                  </div>
                ) : null}

                {heroScreens.length > 1 ? (
                  <div className={styles.deviceThumbs}>
                    {heroScreens.slice(1).map((screen) => (
                      <div key={screen.title} className={styles.deviceThumb}>
                        <img src={screen.image} alt={`${screen.title} screen`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.whatHeading}</KinlyHeading>
              <div className={styles.storyImage} aria-hidden="true">
                <img src={SUPPORTING_IMAGES.friction} alt="" loading="lazy" />
              </div>
              <KinlyText variant="bodyMedium">{copy.whatBody}</KinlyText>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>{copy.howHeading}</KinlyHeading>
              <KinlyText variant="bodyMedium">{copy.toolsIntro}</KinlyText>
              <div className={styles.featureRailWrap}>
                <div className={styles.featureRail} data-testid="feature-rail" ref={featureRailRef}>
                  {featureCards.map((feature, index) => (
                    <div key={feature.title} className={styles.featureRailItem} data-feature-card-index={index}>
                      <KinlyCard variant="surfaceContainerHigh">
                        <div className={styles.featureCard} data-testid="feature-card">
                          <KinlyText variant="labelMedium" as="div">
                            {feature.title}
                          </KinlyText>
                          <div className={styles.featureImage} aria-hidden="true">
                            <img src={feature.image} alt="" loading="lazy" />
                          </div>
                          <KinlyText variant="bodyMedium">{feature.benefit}</KinlyText>
                        </div>
                      </KinlyCard>
                    </div>
                  ))}
                </div>
                {featureCards.length > 1 ? (
                  <div className={styles.featureDots} aria-label="Feature navigation">
                    {featureCards.map((feature, index) => {
                      const isActive = activeFeatureIndex === index;
                      return (
                        <span
                          key={`${feature.title}-dot`}
                          className={`${styles.featureDot} ${isActive ? styles.featureDotActive : ""}`.trim()}
                          onClick={() => scrollToFeature(index)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              scrollToFeature(index);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Show ${feature.title}`}
                          aria-current={isActive ? "true" : undefined}
                        />
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel} ${styles.sectionHighlight}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.chipsHeading}</KinlyHeading>
              <div className={styles.listGrid}>
                {copy.chips.map((chip) => (
                  <KinlyCard key={chip} variant="surfaceContainer">
                    <KinlyText variant="bodyMedium">{chip}</KinlyText>
                  </KinlyCard>
                ))}
              </div>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.roleHeading}</KinlyHeading>
              <ul className={styles.bulletList}>
                {copy.rolePoints.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.formingHeading}</KinlyHeading>
              <ul className={styles.bulletList}>
                {copy.formingPoints.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.audienceHeading}</KinlyHeading>
              <ul className={styles.bulletList}>
                {copy.audience.map((entry) => (
                  <li key={entry} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{entry}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.notHeading}</KinlyHeading>
              <ul className={styles.bulletList}>
                {copy.notList.map((item) => (
                  <li key={item} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{item}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.weeklyHeading}</KinlyHeading>
              <div className={styles.storyImage} aria-hidden="true">
                <img src={SUPPORTING_IMAGES.calm} alt="" loading="lazy" />
              </div>
              <KinlyText variant="bodyMedium">{copy.weeklyIntro}</KinlyText>
              <ul className={styles.bulletList}>
                {copy.weeklyPoints.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          {suppressStoreCtas && (
            <section className={styles.section}>
              <KinlyCard variant="surface">
                <KinlyStack direction="vertical" gap="s">
                  <KinlyHeading level={2}>{copy.availabilityHeading}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{copy.availabilityBody}</KinlyText>
                </KinlyStack>
              </KinlyCard>
            </section>
          )}

          {!suppressStoreCtas && (
            <section className={styles.storeSection}>
              <KinlyCard variant="surfaceContainerHigh">
                <KinlyStack direction="vertical" gap="m">
                  <KinlyHeading level={2}>{copy.storeSectionHeading}</KinlyHeading>
                  <KinlyText variant="bodyMedium" tone="muted">
                    {copy.storeSectionSubhead}
                  </KinlyText>
                  <StoreCtas
                    suppress={suppressStoreCtas}
                    onClick={handleCtaClick}
                    labels={copy.storeLabels}
                    badges={storeBadges}
                  />
                </KinlyStack>
              </KinlyCard>
            </section>
          )}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
