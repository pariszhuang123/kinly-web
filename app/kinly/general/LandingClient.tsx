"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  KinlyButton,
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
import styles from "./LandingClient.module.css";

type InterestMarker = {
  country_code?: string;
  ui_locale?: string;
  captured_at?: string;
};

type LandingClientProps = {
  detectedCountryCode?: string | null;
};

const SUPPORTED_REGIONS = ["NZ", "SG"];
const APP_STORE_URL =
  (process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378") as string;
const PLAY_STORE_URL =
  (process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
    "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly") as string;
const PAGE_KEY = "kinly_general";
const APP_STORE_LABEL = "Download on the App Store";
const PLAY_STORE_LABEL = "Get it on Google Play";

type StoreCtasProps = {
  suppress: boolean;
  onClick: (store: OutreachStore) => void;
};

function StoreCtas({ suppress, onClick }: StoreCtasProps) {
  if (suppress) return null;
  return (
    <div className={styles.storeCtas}>
      <KinlyStack direction="horizontal" gap="s" wrap>
        <a
          className={styles.storeBadgeLink}
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={APP_STORE_LABEL}
          onClick={() => onClick("ios_app_store")}
        >
          <img src="/apple-store.svg" alt={APP_STORE_LABEL} className={styles.storeBadge} />
        </a>
        <a
          className={styles.storeBadgeLink}
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={PLAY_STORE_LABEL}
          onClick={() => onClick("google_play")}
        >
          <img src="/google-play.svg" alt={PLAY_STORE_LABEL} className={styles.storeBadge} />
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

  const router = useRouter();
  const searchParams = useSearchParams();
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);

  useEffect(() => {
    // Mark hydration complete so client-only reads (localStorage, navigator) happen after first paint.
    setHasHydrated(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const sessionId = useMemo(() => (hasHydrated ? ensureSessionId() : null), [hasHydrated]);
  const uiLocale = useMemo(() => (hasHydrated ? detectUiLocale() : null), [hasHydrated]);

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

  const appScreens = useMemo(
    () => [
      {
        title: "Today",
        eyebrow: "Right now",
        headline: "What needs your attention",
        copy: "Things to do, things to notice, and gentle next steps",
        footer: "Today's tasks, unfinished items, and updates from your home.",
        image: "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
      },
      {
        title: "Manage",
        eyebrow: "Make changes",
        headline: "Change how things work",
        copy: "Edit, assign, comment on, or remove flows and shares",
        footer: "You're always in control - nothing is locked in.",
        image: "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
      },
      {
        title: "Home Hub",
        eyebrow: "Shared home",
        headline: "What matters in our home",
        copy: "Moments, norms, and shared references",
        footer: "Gratitude, house vibe, and important notes - shared by everyone.",
        image: "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
      },
    ],
    [],
  );

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
    <main className={styles.page}>
      {/* IMPORTANT:
          The previous always-mounted backdrop was intercepting clicks (e.g. store badges).
          If you want a visual backdrop, keep it but ensure CSS uses pointer-events: none.
          Otherwise, remove it entirely.
      */}
      <div className={styles.backdrop} aria-hidden="true" />

      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section className={styles.recognition}>
            <KinlyStack direction="vertical" gap="xs">
              <KinlyHeading level={1}>Shared living gets heavy.</KinlyHeading>
              <KinlyText variant="bodyLarge" tone="muted">
                Even when no one is doing anything wrong.
              </KinlyText>
              <KinlyText variant="bodyMedium">
                Kinly helps you notice what the home needs — before anyone feels blamed.
              </KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.hero}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyStack direction="horizontal" gap="s" align="center">
                <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                <KinlyHeading level={2}>A calmer way to live together.</KinlyHeading>
              </KinlyStack>
              <KinlyText variant="bodyLarge" tone="muted">
                A calm, shared place to notice how the home feels before anyone asks you to do anything.
              </KinlyText>
              <KinlyText variant="bodyMedium">
                You open Kinly to see what matters in the home right now — without pressure, chasing, or judgement.
              </KinlyText>
              {!suppressStoreCtas ? (
                <div className={styles.heroCtas}>
                  <div className={styles.heroCtaHeading}>
                    <KinlyHeading level={3}>Ready to start</KinlyHeading>
                  </div>
                  <StoreCtas suppress={suppressStoreCtas} onClick={handleCtaClick} />
                  <KinlyText variant="bodySmall" tone="muted">
                    Private by default. No ads. No surveillance.
                  </KinlyText>
                </div>
              ) : null}
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>How Kinly works</KinlyHeading>
              <KinlyText variant="bodySmall" tone="muted">
                Nothing is shared without intent.
              </KinlyText>
              <div className={styles.screenGrid}>
                {appScreens.map((screen) => (
                  <KinlyCard key={screen.title} variant="surfaceContainer">
                    <div className={styles.screen}>
                      <div className={styles.screenHeader}>
                        <KinlyText variant="labelSmall" tone="muted" as="div">
                          {screen.eyebrow}
                        </KinlyText>
                        <KinlyText variant="labelSmall" tone="muted" as="div">
                          {screen.title}
                        </KinlyText>
                      </div>
                      <div className={styles.screenImage}>
                        <img src={screen.image} alt={`${screen.title} screen`} loading="lazy" />
                      </div>
                      <KinlyStack direction="vertical" gap="s">
                        <KinlyHeading level={3}>{screen.headline}</KinlyHeading>
                        <KinlyText variant="bodyMedium">{screen.copy}</KinlyText>
                        <div className={styles.screenFooter}>
                          <KinlyText variant="labelSmall" tone="muted" as="div">
                            {screen.footer}
                          </KinlyText>
                        </div>
                      </KinlyStack>
                    </div>
                  </KinlyCard>
                ))}
              </div>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Does this sound like your place?</KinlyHeading>
              <div className={styles.chips}>
                <KinlyCard variant="surface">
                  <KinlyText variant="bodyMedium">
                    We care about each other, but chore charts make things tense.
                  </KinlyText>
                </KinlyCard>
                <KinlyCard variant="surface">
                  <KinlyText variant="bodyMedium">
                    We want to know how the house feels without assigning blame.
                  </KinlyText>
                </KinlyCard>
                <KinlyCard variant="surface">
                  <KinlyText variant="bodyMedium">
                    We avoid drama, but we still want to be seen.
                  </KinlyText>
                </KinlyCard>
                <KinlyCard variant="surface">
                  <KinlyText variant="bodyMedium">
                    If you want streaks, scores, or accountability pressure — Kinly isn’t that.
                  </KinlyText>
                </KinlyCard>
              </div>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Kinly role: reflection first</KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                <KinlyText variant="bodyMedium">Reflects how the home is feeling before asking for action.</KinlyText>
                <KinlyText variant="bodyMedium">Makes care visible without assigning responsibility.</KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>If your home is still forming</KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                <KinlyText variant="bodyMedium">Uncertainty is normal — not a failure.</KinlyText>
                <KinlyText variant="bodyMedium">
                  Kinly treats figuring it out as healthy, not something to fix.
                </KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Who this is for</KinlyHeading>
              <KinlyStack direction="vertical" gap="xs">
                <KinlyText variant="bodyMedium">Flatmates who did not choose each other but want calm.</KinlyText>
                <KinlyText variant="bodyMedium">Homes adjusting to change or new rhythms.</KinlyText>
                <KinlyText variant="bodyMedium">People who care but do not want pressure tactics.</KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Kinly is not...</KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                <KinlyText variant="bodyMedium">...a surveillance tool.</KinlyText>
                <KinlyText variant="bodyMedium">...a scorecard or leaderboard.</KinlyText>
                <KinlyText variant="bodyMedium">...a chore boss.</KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Weekly reflection, human-paced</KinlyHeading>

              <KinlyText variant="bodyMedium">
                Kinly moves on weekly rhythm. It notices the home mood without streaks, checklists, or pressure.
              </KinlyText>

              <KinlyStack direction="vertical" gap="xs">
                <KinlyText variant="bodyMedium">
                  You can check in weekly, not daily. No streaks, no pressure to keep up.
                </KinlyText>
                <KinlyText variant="bodyMedium">
                  Reflections are for understanding, not grading.
                </KinlyText>
                <KinlyText variant="bodyMedium">
                  Kinly never forces conversations — it helps you understand before you decide whether to talk.
                </KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          {suppressStoreCtas && (
            <section className={styles.section}>
              <KinlyCard variant="surface">
                <KinlyStack direction="vertical" gap="s">
                  <KinlyHeading level={2}>Availability</KinlyHeading>
                  <KinlyText variant="bodyMedium">
                    Kinly is currently available in New Zealand and Singapore. We’ll email you when Kinly opens in your
                    area — no spam.
                  </KinlyText>
                  <KinlyButton
                    variant="outlined"
                    type="button"
                    onClick={() => {
                      handleCtaClick("web");
                      router.push("/kinly/get");
                    }}
                  >
                    Express interest when Kinly is available in your area.
                  </KinlyButton>
                </KinlyStack>
              </KinlyCard>
            </section>
          )}

        {!suppressStoreCtas && (
          <section className={styles.storeSection}>
            <KinlyCard variant="surfaceContainerHigh">
              <KinlyStack direction="vertical" gap="m">
                <KinlyHeading level={2}>When you are ready</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                  Kinly lives in the app — start on iOS or Android.
                </KinlyText>
                <StoreCtas suppress={suppressStoreCtas} onClick={handleCtaClick} />
              </KinlyStack>
            </KinlyCard>
          </section>
        )}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}




