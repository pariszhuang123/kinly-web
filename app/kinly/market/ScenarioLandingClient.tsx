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
import { resolveStoreBadges } from "../../../lib/storeBadges";
import { resolveLandingScreenAsset } from "../shared/landingScreenAssets";
import styles from "../general/LandingClientGeneral.module.css";

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

export type ScenarioFeatureScreen = {
  title: string;
  benefit: string;
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
  whatHeading?: string;
  whatBody?: string;
  featureScreens?: ScenarioFeatureScreen[];
  screens: ScenarioScreen[];
  chips: string[];
  rolePoints: string[];
  formingPoints: string[];
  audience: string[];
  notList: string[];
  toolsIntro?: string;
  weekly: {
    intro: string;
    points: string[];
    heading?: string;
  };
  sectionHeadings?: {
    howItWorks?: string;
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
const SUPPORTING_IMAGES = {
  friction: "/images/landing/friction-shared-home.webp",
  calm: "/images/landing/calm-shared-home.webp",
} as const;
const DEFAULT_WHAT_HEADING = "What Kinly is";
const DEFAULT_WHAT_BODY =
  "Kinly is a shared living app for people who live together. It keeps expectations visible and calm without turning home life into a task system.";
const DEFAULT_TOOLS_INTRO =
  "Once expectations are aligned, Kinly offers simple tools to reduce everyday friction without turning shared living into a task system.";
const DEFAULT_FEATURE_SCREEN_IMAGES = ["flows", "groceries", "bills", "checkins"] as const;

type StoreCtasProps = {
  suppress: boolean;
  onClick: (store: OutreachStore) => void;
  badges: { apple: string; play: string };
  labels: { apple: string; play: string };
};

function StoreCtas({ suppress, onClick, badges, labels }: StoreCtasProps) {
  if (suppress) return null;
  return (
    <div className={styles.storeCtas}>
      <KinlyStack direction="horizontal" gap="s" wrap>
        <a
          className={styles.storeBadgeLink}
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.apple}
          onClick={() => onClick("ios_app_store")}
        >
          <img src={badges.apple} alt={labels.apple} className={styles.storeBadge} />
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

export default function ScenarioLandingClient({
  detectedCountryCode = null,
  config,
  localeOverride = null,
}: ScenarioLandingProps) {
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

  const isRtl = lang === "ar" || lang === "he" || lang === "fa" || lang === "ur";
  const storeBadges = useMemo(() => resolveStoreBadges(lang), [lang]);
  const storeLabels = useMemo(
    () => ({
      apple: lang === "ar" ? "ØªØ­Ù…ÙŠÙ„ Ù…Ù† App Store" : lang === "es" ? "Descargar en App Store" : APP_STORE_LABEL,
      play: lang === "ar" ? "Ø§Ø­ØµÙ„ Ø¹Ù„ÙŠÙ‡ Ù…Ù† Google Play" : lang === "es" ? "Obtener en Google Play" : PLAY_STORE_LABEL,
    }),
    [lang],
  );

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

  const heroScreens = resolvedConfig.screens.slice(0, 3);
  const featureScreens = useMemo<ScenarioFeatureScreen[]>(() => {
    if (resolvedConfig.featureScreens && resolvedConfig.featureScreens.length >= 4) {
      return resolvedConfig.featureScreens.slice(0, 4);
    }

    const titles = ["Shared tasks", "Shared groceries", "Shared bills", "Calm check-ins"];
    const benefits = [
      "Add context, guide links, and photos so repeat tasks are clear without reminders.",
      "Capture item, quantity, notes, and photos so shopping is clear for everyone.",
      "Split costs fairly with clear amounts, dates, and purchase context.",
      "Needs are noticed early and without blame.",
    ];

    return DEFAULT_FEATURE_SCREEN_IMAGES.map((key, index) => ({
      title: titles[index],
      benefit: benefits[index] ?? benefits[0],
      image: resolveLandingScreenAsset(lang, key),
    }));
  }, [lang, resolvedConfig.featureScreens]);

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

  useEffect(() => {
    const rail = featureRailRef.current;
    if (!rail) return;

    let frame = 0;

    const updateActiveIndex = () => {
      if (!featureScreens.length || rail.clientWidth <= 0) {
        setActiveFeatureIndex(0);
        return;
      }

      const nearestIndex = Math.round(rail.scrollLeft / rail.clientWidth);
      const clampedIndex = Math.min(featureScreens.length - 1, Math.max(0, nearestIndex));

      setActiveFeatureIndex((prev) => (prev === clampedIndex ? prev : clampedIndex));
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
  }, [featureScreens.length]);

  function scrollToFeature(index: number) {
    const rail = featureRailRef.current;
    if (!rail) return;

    const clampedIndex = Math.min(featureScreens.length - 1, Math.max(0, index));

    rail.scrollTo({
      left: clampedIndex * rail.clientWidth,
      behavior: "smooth",
    });
  }

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
    <main className={styles.page} dir={isRtl ? "rtl" : "ltr"}>
      <div className={styles.backdrop} aria-hidden="true" />

      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section className={styles.recognition}>
            <KinlyStack direction="vertical" gap="xs">
              <KinlyHeading level={1}>{resolvedConfig.recognition.heading}</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                {resolvedConfig.recognition.subtitle}
              </KinlyText>
              <KinlyText variant="bodyMedium">{resolvedConfig.recognition.body}</KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={styles.heroContent}>
                <KinlyStack direction="vertical" gap="l">
                  <KinlyStack direction="horizontal" gap="s" align="center">
                    <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                    <KinlyHeading level={2}>{resolvedConfig.hero.headline}</KinlyHeading>
                  </KinlyStack>
                  <KinlyText variant="bodyMedium" tone="muted">
                    {resolvedConfig.hero.subhead}
                  </KinlyText>
                  <KinlyText variant="bodyMedium">{resolvedConfig.hero.body}</KinlyText>
                  <KinlyText variant="bodyMedium" tone="muted">
                    {resolvedConfig.hero.privacyNote ?? "Private by default. No ads. No surveillance."}
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

          <section className={`${styles.section} ${styles.sectionPanel} ${styles.sectionHighlight}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.soundsLikeYou ?? "Does this sound like your place?"}
              </KinlyHeading>
              <div className={styles.listGrid}>
                {resolvedConfig.chips.map((chip) => (
                  <KinlyCard key={chip} variant="surfaceContainer">
                    <KinlyText variant="bodyMedium">{chip}</KinlyText>
                  </KinlyCard>
                ))}
              </div>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{resolvedConfig.whatHeading ?? DEFAULT_WHAT_HEADING}</KinlyHeading>
              <div className={styles.storyImage} aria-hidden="true">
                <img src={SUPPORTING_IMAGES.friction} alt="" loading="lazy" />
              </div>
              <KinlyText variant="bodyMedium">{resolvedConfig.whatBody ?? DEFAULT_WHAT_BODY}</KinlyText>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.howItWorks ?? "How Kinly helps in practice"}
              </KinlyHeading>
              <KinlyText variant="bodyMedium">{resolvedConfig.toolsIntro ?? DEFAULT_TOOLS_INTRO}</KinlyText>
              <div className={styles.featureRailWrap}>
                <div className={styles.featureRail} data-testid="feature-rail" ref={featureRailRef}>
                  {featureScreens.map((feature, index) => (
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
                {featureScreens.length > 1 ? (
                  <div className={styles.featureDots} aria-label="Feature navigation">
                    {featureScreens.map((feature, index) => {
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

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.roleHeading ?? "Kinly role: reflection first"}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {resolvedConfig.rolePoints.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.formingHeading ?? "If your home is still forming"}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {resolvedConfig.formingPoints.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.audienceHeading ?? "Who this is for"}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {resolvedConfig.audience.map((entry) => (
                  <li key={entry} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{entry}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.sectionHeadings?.notListHeading ?? "Kinly is not..."}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {resolvedConfig.notList.map((item) => (
                  <li key={item} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{item}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {resolvedConfig.weekly.heading ?? "Weekly reflection, human-paced"}
              </KinlyHeading>
              <div className={styles.storyImage} aria-hidden="true">
                <img src={SUPPORTING_IMAGES.calm} alt="" loading="lazy" />
              </div>
              <KinlyText variant="bodyMedium">{resolvedConfig.weekly.intro}</KinlyText>
              <ul className={styles.bulletList}>
                {resolvedConfig.weekly.points.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          {suppressStoreCtas && resolvedConfig.availability ? (
            <section className={styles.section}>
              <KinlyCard variant="surface">
                <KinlyStack direction="vertical" gap="s">
                  <KinlyHeading level={2}>{resolvedConfig.availability.heading ?? "Availability"}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{resolvedConfig.availability.body}</KinlyText>
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
                  <KinlyText variant="bodyMedium" tone="muted">
                    {resolvedConfig.sectionHeadings?.readySubtitle ??
                      "Kinly lives in the app - start on iOS or Android."}
                  </KinlyText>
                  <StoreCtas
                    suppress={suppressStoreCtas}
                    onClick={handleCtaClick}
                    badges={storeBadges}
                    labels={storeLabels}
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
