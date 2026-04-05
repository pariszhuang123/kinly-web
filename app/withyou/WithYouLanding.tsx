"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../components";
import {
  buildClientEventId,
  detectUiLocale,
  ensureSessionId,
  hasPageViewBeenSent,
  logOutreachEvent,
  markPageViewSent,
  normalizeCountryCode,
  readUtmParams,
  type OutreachStore,
} from "../../lib/outreachTracking";
import {
  getWithYouPreviewAssetPath,
  getWithYouPreviewClips,
  resolveWithYouPreviewLanguage,
  WITHYOU_LANGUAGE_STORAGE_KEY,
  type WithYouClipId,
  type WithYouPreviewLanguage,
  type WithYouScenarioConfig,
} from "../../lib/withyou";
import styles from "./WithYouLanding.module.css";

type WithYouLandingProps = {
  config: WithYouScenarioConfig;
  detectedPlatform?: "ios" | "android" | "web";
  detectedCountryCode?: string | null;
};

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378";
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
  "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly";

function resolveInitialLanguage(searchParams: URLSearchParams | null): WithYouPreviewLanguage {
  const fromQuery = resolveWithYouPreviewLanguage(searchParams?.get("lang") ?? null);
  if (searchParams?.has("lang")) return fromQuery;

  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(WITHYOU_LANGUAGE_STORAGE_KEY);
    if (stored) return resolveWithYouPreviewLanguage(stored);

    const browser =
      (Array.isArray(window.navigator.languages) && window.navigator.languages[0]) ||
      window.navigator.language ||
      "en";

    return resolveWithYouPreviewLanguage(browser);
  }

  return "en";
}

export default function WithYouLanding({
  config,
  detectedPlatform = "web",
  detectedCountryCode = null,
}: WithYouLandingProps) {
  const searchParams = useSearchParams();
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);
  const [language, setLanguage] = useState<WithYouPreviewLanguage>("en");
  const clips = useMemo(() => getWithYouPreviewClips(config.scenarioFamily), [config.scenarioFamily]);
  const [activeClip, setActiveClip] = useState<WithYouClipId>(clips[0] ?? "primary");
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setLanguage(resolveInitialLanguage(searchParams));
  }, [searchParams]);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    setActiveClip(clips[0] ?? "primary");
  }, [clips]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(WITHYOU_LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const sessionId = useMemo(() => (hasHydrated ? ensureSessionId() : null), [hasHydrated]);
  const uiLocale = useMemo(() => (hasHydrated ? detectUiLocale() : null), [hasHydrated]);
  const normalizedCountry = useMemo(() => normalizeCountryCode(detectedCountryCode), [detectedCountryCode]);

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

  const previewSrc = getWithYouPreviewAssetPath(language, config.scenarioFamily, activeClip);

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
      <KinlyShell as="section">
        <div className={styles.shell}>
          <KinlyStack direction="vertical" gap="xl">
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.heroCard}>
                <div className={styles.heroGrid}>
                  <KinlyStack direction="vertical" gap="m">
                    <KinlyStack direction="vertical" gap="xs">
                      <KinlyHeading level={1}>{config.title[language]}</KinlyHeading>
                      <KinlyText variant="bodyMedium">{config.problemFraming[language]}</KinlyText>
                    </KinlyStack>

                    <div className={styles.languageRow}>
                      <KinlyButton
                        variant={language === "en" ? "filled" : "outlined"}
                        size="sm"
                        onClick={() => setLanguage("en")}
                      >
                        English
                      </KinlyButton>
                      <KinlyButton
                        variant={language === "zh" ? "filled" : "outlined"}
                        size="sm"
                        onClick={() => setLanguage("zh")}
                      >
                        中文
                      </KinlyButton>
                    </div>
                  </KinlyStack>

                  <KinlyCard variant="surface">
                    <div className={styles.sectionCard}>
                      <KinlyStack direction="vertical" gap="s">
                        <KinlyHeading level={2}>{config.previewHeading[language]}</KinlyHeading>
                        <KinlyText variant="bodyMedium" tone="muted">
                          {config.previewBody[language]}
                        </KinlyText>
                        <div className={styles.audioBox}>
                          {config.previewMode === "timed_sequence" ? (
                            <div className={styles.previewButtons}>
                              {clips.map((clip) => (
                                <KinlyButton
                                  key={clip}
                                  variant={activeClip === clip ? "filled" : "outlined"}
                                  size="sm"
                                  onClick={() => setActiveClip(clip)}
                                >
                                  {config.timedLabels?.[clip as "stage_1" | "stage_2" | "stage_3"]?.[language] ?? clip}
                                </KinlyButton>
                              ))}
                            </div>
                          ) : null}
                          <audio
                            controls
                            preload="none"
                            className={styles.audio}
                            data-testid="withyou-audio"
                            src={previewSrc}
                          />
                          <KinlyText variant="bodySmall" tone="muted">
                            {previewSrc}
                          </KinlyText>
                        </div>
                      </KinlyStack>
                    </div>
                  </KinlyCard>
                </div>
              </div>
            </KinlyCard>

            <KinlyCard variant="surface">
              <div className={styles.detailPanel}>
                <KinlyHeading level={3}>{config.leadHeading[language]}</KinlyHeading>
                <KinlyText variant="bodyMedium">{config.leadBody[language]}</KinlyText>
                <div className={styles.ctaRow}>
                  <KinlyButton
                    href={`/withyou/get?next=/withyou/${config.slug}`}
                    variant="outlined"
                    onClick={() => handleCtaClick("web")}
                  >
                    {config.leadCta[language]}
                  </KinlyButton>
                </div>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.ctaCard}>
                <KinlyStack direction="vertical" gap="m">
                  <KinlyHeading level={2}>{config.storeHeading[language]}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{config.storeBody[language]}</KinlyText>
                  <div className={styles.badgeRow}>
                    {detectedPlatform !== "android" ? (
                      <a
                        href={APP_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleCtaClick("ios_app_store")}
                      >
                        <Image
                          src="/apple-store.svg"
                          alt="Download on the App Store"
                          width={120}
                          height={40}
                          className={styles.storeBadge}
                        />
                      </a>
                    ) : null}
                    {detectedPlatform !== "ios" ? (
                      <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleCtaClick("google_play")}
                      >
                        <Image
                          src="/google-play.svg"
                          alt="Get it on Google Play"
                          width={135}
                          height={40}
                          className={styles.storeBadge}
                        />
                      </a>
                    ) : null}
                  </div>
                </KinlyStack>
              </div>
            </KinlyCard>
          </KinlyStack>
        </div>
      </KinlyShell>
    </main>
  );
}
