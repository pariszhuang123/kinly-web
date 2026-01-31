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
import styles from "../general/LandingClient.module.css";

type InterestMarker = {
  country_code?: string;
  ui_locale?: string;
  captured_at?: string;
};

export type ScenarioScreen = {
  title: string;
  eyebrow: string;
  headline: string;
  copy: string;
  footer: string;
  image: string;
};

export type ScenarioConfig = {
  pageKey: string;
  recognition: {
    heading: string;
    subtitle: string;
    body: string;
  };
  hero: {
    headline: string;
    subhead: string;
    body: string;
    ctaHeading?: string;
    privacyNote?: string;
  };
  screens: ScenarioScreen[];
  chips: string[];
  rolePoints: string[];
  formingPoints: string[];
  audience: string[];
  notList: string[];
  weekly: {
    intro: string;
    points: string[];
    heading?: string;
  };
  sectionHeadings?: {
    howItWorks?: string;
    howItWorksSubtitle?: string;
    soundsLikeYou?: string;
    roleHeading?: string;
    formingHeading?: string;
    audienceHeading?: string;
    notListHeading?: string;
    readyHeading?: string;
    readySubtitle?: string;
  };
  availability?: {
    heading?: string;
    body: string;
    ctaLabel?: string;
  };
  /**
   * Optional locale overrides keyed by language tag (e.g. "en", "es").
   * Only text-bearing fields are overridden; pageKey remains constant for analytics.
   */
  translations?: Record<
    string,
    Partial<
      Omit<
        ScenarioConfig,
        "pageKey" | "translations" | "defaultLocale" | "availability" | "screens"
      > & {
        screens?: ScenarioScreen[];
        availability?: ScenarioConfig["availability"];
      }
    >
  >;
  defaultLocale?: string;
};

type ScenarioLandingProps = {
  detectedCountryCode?: string | null;
  config: ScenarioConfig;
  localeOverride?: string | null;
};

const SUPPORTED_REGIONS = ["NZ", "SG"];
const APP_STORE_URL =
  (process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378") as string;
const PLAY_STORE_URL =
  (process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
    "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly") as string;
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

export default function ScenarioLandingClient({
  detectedCountryCode = null,
  config,
  localeOverride = null,
}: ScenarioLandingProps) {
  const [hasHydrated, setHasHydrated] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);

  useEffect(() => {
    setHasHydrated(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const sessionId = useMemo(() => (hasHydrated ? ensureSessionId() : null), [hasHydrated]);
  const uiLocale = useMemo(() => (hasHydrated ? detectUiLocale() : null), [hasHydrated]);
  const lang = useMemo(() => {
    const override = localeOverride ? localeOverride.split("-")[0]?.toLowerCase() : null;
    if (override) return override;
    return uiLocale ? uiLocale.split("-")[0].toLowerCase() : null;
  }, [localeOverride, uiLocale]);

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

  const resolvedConfig = useMemo(() => {
    const localeKey = lang && config.translations ? lang : null;
    const defaultKey = config.defaultLocale ?? "en";
    const override =
      (localeKey && config.translations?.[localeKey]) || config.translations?.[defaultKey] || null;

    if (!override) return config;

    return {
      ...config,
      ...override,
      // ensure pageKey stays fixed for analytics
      pageKey: config.pageKey,
    };
  }, [config, lang]);

  useEffect(() => {
    if (!sessionId) return;
    if (hasPageViewBeenSent(config.pageKey, sessionId)) return;

    markPageViewSent(config.pageKey, sessionId);

    void logOutreachEvent({
      event: "page_view",
      page_key: config.pageKey,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry,
      ui_locale: uiLocale,
    });
  }, [
    config.pageKey,
    normalizedCountry,
    sessionId,
    uiLocale,
    utmParams.utm_campaign,
    utmParams.utm_medium,
    utmParams.utm_source,
  ]);

  function handleCtaClick(store: OutreachStore) {
    if (!sessionId) return;

    void logOutreachEvent({
      event: "cta_click",
      page_key: config.pageKey,
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
      <div className={styles.backdrop} aria-hidden="true" />

      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section className={styles.recognition}>
            <KinlyStack direction="vertical" gap="xs">
              <KinlyHeading level={1}>{resolvedConfig.recognition.heading}</KinlyHeading>
              <KinlyText variant="bodyLarge" tone="muted">
                {resolvedConfig.recognition.subtitle}
              </KinlyText>
              <KinlyText variant="bodyMedium">{resolvedConfig.recognition.body}</KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.hero}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyStack direction="horizontal" gap="s" align="center">
                <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                <KinlyHeading level={2}>{resolvedConfig.hero.headline}</KinlyHeading>
              </KinlyStack>
              <KinlyText variant="bodyLarge" tone="muted">
                {resolvedConfig.hero.subhead}
              </KinlyText>
              <KinlyText variant="bodyMedium">{resolvedConfig.hero.body}</KinlyText>
              {!suppressStoreCtas ? (
                <div className={styles.heroCtas}>
                  <div className={styles.heroCtaHeading}>
                    <KinlyHeading level={3}>{resolvedConfig.hero.ctaHeading ?? "Ready to start"}</KinlyHeading>
                  </div>
                  <StoreCtas suppress={suppressStoreCtas} onClick={handleCtaClick} />
                  <KinlyText variant="bodySmall" tone="muted">
                    {resolvedConfig.hero.privacyNote ?? "Private by default. No ads. No surveillance."}
                  </KinlyText>
                </div>
              ) : null}
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.howItWorks ?? "How Kinly works"}
              </KinlyHeading>
              <KinlyText variant="bodySmall" tone="muted">
                {resolvedConfig.sectionHeadings?.howItWorksSubtitle ?? "Nothing is shared without intent."}
              </KinlyText>
              <div className={styles.screenGrid}>
                {resolvedConfig.screens.map((screen) => (
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
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.soundsLikeYou ?? "Does this sound like your place?"}
              </KinlyHeading>
              <div className={styles.chips}>
                {resolvedConfig.chips.map((chip) => (
                  <KinlyCard key={chip} variant="surface">
                    <KinlyText variant="bodyMedium">{chip}</KinlyText>
                  </KinlyCard>
                ))}
              </div>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.roleHeading ?? "Kinly role: reflection first"}
              </KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                {resolvedConfig.rolePoints.map((point) => (
                  <KinlyText key={point} variant="bodyMedium">
                    {point}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.formingHeading ?? "If your home is still forming"}
              </KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                {resolvedConfig.formingPoints.map((point) => (
                  <KinlyText key={point} variant="bodyMedium">
                    {point}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.audienceHeading ?? "Who this is for"}
              </KinlyHeading>
              <KinlyStack direction="vertical" gap="xs">
                {resolvedConfig.audience.map((entry) => (
                  <KinlyText key={entry} variant="bodyMedium">
                    {entry}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.notListHeading ?? "Kinly is not..."}
              </KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                {resolvedConfig.notList.map((item) => (
                  <KinlyText key={item} variant="bodyMedium">
                    {item}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.weekly.heading ?? "Weekly reflection, human-paced"}
              </KinlyHeading>

              <KinlyText variant="bodyMedium">{resolvedConfig.weekly.intro}</KinlyText>

              <KinlyStack direction="vertical" gap="xs">
                {resolvedConfig.weekly.points.map((point) => (
                  <KinlyText key={point} variant="bodyMedium">
                    {point}
                  </KinlyText>
                ))}
              </KinlyStack>
            </KinlyStack>
          </section>

          {suppressStoreCtas && resolvedConfig.availability ? (
            <section className={styles.section}>
              <KinlyCard variant="surface">
                <KinlyStack direction="vertical" gap="s">
                  <KinlyHeading level={2}>{resolvedConfig.availability.heading ?? "Availability"}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{resolvedConfig.availability.body}</KinlyText>
                  <KinlyButton
                    variant="outlined"
                    type="button"
                    onClick={() => {
                      handleCtaClick("web");
                      router.push("/kinly/get");
                    }}
                  >
                    {resolvedConfig.availability.ctaLabel ?? "Express interest when Kinly is available in your area."}
                  </KinlyButton>
                </KinlyStack>
              </KinlyCard>
            </section>
          ) : null}

          {!suppressStoreCtas && (
            <section className={styles.storeSection}>
              <KinlyCard variant="surfaceContainerHigh">
                <KinlyStack direction="vertical" gap="m">
                  <KinlyHeading level={2}>
                    {resolvedConfig.sectionHeadings?.readyHeading ?? "When you are ready"}
                  </KinlyHeading>
                  <KinlyText variant="bodySmall" tone="muted">
                    {resolvedConfig.sectionHeadings?.readySubtitle ??
                      "Kinly lives in the app - start on iOS or Android."}
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
