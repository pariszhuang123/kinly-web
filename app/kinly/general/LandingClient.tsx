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
import { resolveLandingCopy } from "./copy";
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

type StoreCtasProps = {
  suppress: boolean;
  onClick: (store: OutreachStore) => void;
  labels: { app: string; play: string };
};

function StoreCtas({ suppress, onClick, labels }: StoreCtasProps) {
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
          <img src="/apple-store.svg" alt={labels.app} className={styles.storeBadge} />
        </a>
        <a
          className={styles.storeBadgeLink}
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.play}
          onClick={() => onClick("google_play")}
        >
          <img src="/google-play.svg" alt={labels.play} className={styles.storeBadge} />
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
  const lang = useMemo(() => (uiLocale ? uiLocale.split("-")[0]?.toLowerCase() ?? null : null), [uiLocale]);
  const copy = useMemo(() => resolveLandingCopy(lang), [lang]);
  const isRtl = lang === "ar" || lang === "he" || lang === "fa" || lang === "ur";

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
              <KinlyHeading level={1}>{copy.recognition.heading}</KinlyHeading>
              <KinlyText variant="bodyLarge" tone="muted">
                {copy.recognition.subhead}
              </KinlyText>
              <KinlyText variant="bodyMedium">{copy.recognition.body}</KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.hero}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyStack direction="horizontal" gap="s" align="center">
                <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                <KinlyHeading level={2}>{copy.hero.headline}</KinlyHeading>
              </KinlyStack>
              <KinlyText variant="bodyLarge" tone="muted">
                {copy.hero.subhead}
              </KinlyText>
              <KinlyText variant="bodyMedium">{copy.hero.body}</KinlyText>
              {!suppressStoreCtas ? (
                <div className={styles.heroCtas}>
                  <div className={styles.heroCtaHeading}>
                    <KinlyHeading level={3}>{copy.hero.ctaHeading}</KinlyHeading>
                  </div>
                  <StoreCtas suppress={suppressStoreCtas} onClick={handleCtaClick} labels={copy.storeLabels} />
                  <KinlyText variant="bodySmall" tone="muted">
                    {copy.hero.privacyNote}
                  </KinlyText>
                </div>
              ) : null}
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>{copy.howHeading}</KinlyHeading>
              <KinlyText variant="bodySmall" tone="muted">
                {copy.howSubhead}
              </KinlyText>
              <div className={styles.screenGrid}>
                {copy.screens.map((screen) => (
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
              <KinlyHeading level={2}>{copy.chipsHeading}</KinlyHeading>
              <div className={styles.chips}>
                {copy.chips.map((chip) => (
                  <KinlyCard key={chip} variant="surface">
                    <KinlyText variant="bodyMedium">{chip}</KinlyText>
                  </KinlyCard>
                ))}
              </div>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.roleHeading}</KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                {copy.rolePoints.map((point) => (
                  <KinlyText key={point} variant="bodyMedium">
                    {point}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.formingHeading}</KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                {copy.formingPoints.map((point) => (
                  <KinlyText key={point} variant="bodyMedium">
                    {point}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.audienceHeading}</KinlyHeading>
              <KinlyStack direction="vertical" gap="xs">
                {copy.audience.map((entry) => (
                  <KinlyText key={entry} variant="bodyMedium">
                    {entry}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.notHeading}</KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                {copy.notList.map((item) => (
                  <KinlyText key={item} variant="bodyMedium">
                    {item}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{copy.weeklyHeading}</KinlyHeading>

              <KinlyText variant="bodyMedium">{copy.weeklyIntro}</KinlyText>

              <KinlyStack direction="vertical" gap="xs">
                {copy.weeklyPoints.map((point) => (
                  <KinlyText key={point} variant="bodyMedium">
                    {point}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          {suppressStoreCtas && (
            <section className={styles.section}>
              <KinlyCard variant="surface">
                <KinlyStack direction="vertical" gap="s">
                  <KinlyHeading level={2}>{copy.availabilityHeading}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{copy.availabilityBody}</KinlyText>
                  <KinlyButton
                    variant="outlined"
                    type="button"
                    onClick={() => {
                      handleCtaClick("web");
                      router.push("/kinly/get");
                    }}
                  >
                    {copy.availabilityCta}
                  </KinlyButton>
                </KinlyStack>
              </KinlyCard>
            </section>
          )}

        {!suppressStoreCtas && (
          <section className={styles.storeSection}>
            <KinlyCard variant="surfaceContainerHigh">
              <KinlyStack direction="vertical" gap="m">
                <KinlyHeading level={2}>{copy.storeSectionHeading}</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                  {copy.storeSectionSubhead}
                </KinlyText>
                <StoreCtas suppress={suppressStoreCtas} onClick={handleCtaClick} labels={copy.storeLabels} />
              </KinlyStack>
            </KinlyCard>
          </section>
        )}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}





