"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { KinlyCard, KinlyHeading, KinlyStack, KinlyText } from "../../../components";
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
import { isSupportedRegion } from "../../../lib/regionSupport";
import styles from "../general/LandingClientGeneral.module.css";

export type { ScenarioScreen, ScenarioFeatureScreen, ScenarioConfig } from "./scenarioLanding.types";
import type { ScenarioConfig } from "./scenarioLanding.types";

type InterestMarker = {
  country_code?: string;
  ui_locale?: string;
  captured_at?: string;
};

type ScenarioLandingProps = {
  detectedCountryCode?: string | null;
  detectedPlatform?: "ios" | "android" | "web";
  config: ScenarioConfig;
};

const APP_STORE_URL =
  (process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378") as string;
const PLAY_STORE_URL =
  (process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
    "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly") as string;
const APP_STORE_LABEL = "Download on the App Store";
const PLAY_STORE_LABEL = "Get it on Google Play";

function StoreCtas({
  onClick,
  detectedPlatform = "web",
}: {
  onClick: (store: OutreachStore) => void;
  detectedPlatform?: "ios" | "android" | "web";
}) {
  return (
    <div className={styles.storeCtas}>
      <KinlyStack direction="horizontal" gap="s" wrap>
        {detectedPlatform !== "android" ? (
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
        ) : null}
        {detectedPlatform !== "ios" ? (
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
        ) : null}
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
  detectedPlatform = "web",
  config,
}: ScenarioLandingProps) {
  const [hasHydrated, setHasHydrated] = useState(false);

  const searchParams = useSearchParams();
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);

  useEffect(() => {
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

  const showStoreCtas = useMemo(() => isSupportedRegion(regionCountry), [regionCountry]);

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

  if (!hasHydrated) return null;

  return (
    <>
      {!showStoreCtas && config.availability ? (
        <section className={styles.section}>
          <KinlyCard variant="surface">
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{config.availability.heading ?? "Availability"}</KinlyHeading>
              <KinlyText variant="bodyMedium">{config.availability.body}</KinlyText>
            </KinlyStack>
          </KinlyCard>
        </section>
      ) : null}
      {showStoreCtas ? (
        <section className={styles.storeSection}>
          <KinlyCard variant="surfaceContainerHigh">
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>
                {config.sectionHeadings?.readyHeading ?? "When you are ready"}
              </KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                {config.sectionHeadings?.readySubtitle ??
                  "Kinly lives in the app - start on iOS or Android."}
              </KinlyText>
              <StoreCtas onClick={handleCtaClick} detectedPlatform={detectedPlatform} />
            </KinlyStack>
          </KinlyCard>
        </section>
      ) : null}
    </>
  );
}
