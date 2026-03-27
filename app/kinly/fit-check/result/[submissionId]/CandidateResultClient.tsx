"use client";

import { useEffect, useMemo, useState } from "react";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../../../components";
import { getCandidateReflectionText, getCandidateResult } from "../../../../../lib/flatmateFitCheck";
import { getFitCheckLocationLabel } from "../../../../../lib/fitCheckLocations";
import {
  buildClientEventId,
  detectUiLocale,
  ensureSessionId,
  hasPageViewBeenSent,
  logOutreachEvent,
  markPageViewSent,
  normalizeCountryCode,
} from "../../../../../lib/outreachTracking";
import { CANDIDATE_RESULT_PAGE_KEY, fitCheckCopy } from "../../copy";
import { StoreDownloadCtas } from "../../StoreDownloadCtas";
import styles from "../../FitCheckClient.module.css";

type Props = {
  submissionId: string;
  detectedCountryCode?: string | null;
  detectedPlatform?: "ios" | "android" | "web";
};

export default function CandidateResultClient({
  submissionId,
  detectedCountryCode = null,
  detectedPlatform = "web",
}: Props) {
  const storedResult = useMemo(() => getCandidateResult(submissionId), [submissionId]);
  const [ctaUrl] = useState<string>(() => storedResult?.ctaUrl || "/kinly/general");
  const [reflection] = useState<string>(() => getCandidateReflectionText(storedResult?.reflectionKey));
  const [displayName] = useState<string>(() => storedResult?.displayName ?? "");
  const [locationLabel] = useState<string>(() =>
    getFitCheckLocationLabel(storedResult?.countryCode, storedResult?.cityName),
  );
  const [isAvailable] = useState(() => Boolean(storedResult));

  const sessionId = useMemo(() => ensureSessionId(), []);
  const uiLocale = useMemo(() => detectUiLocale() ?? "en", []);
  const normalizedCountry = useMemo(() => normalizeCountryCode(detectedCountryCode), [detectedCountryCode]);

  useEffect(() => {
    if (!sessionId) return;
    if (hasPageViewBeenSent(CANDIDATE_RESULT_PAGE_KEY, sessionId)) return;

    markPageViewSent(CANDIDATE_RESULT_PAGE_KEY, sessionId);
    void logOutreachEvent({
      event: "page_view",
      page_key: CANDIDATE_RESULT_PAGE_KEY,
      utm_campaign: "unknown",
      utm_medium: "unknown",
      utm_source: "unknown",
      session_id: sessionId,
      country: normalizedCountry,
      ui_locale: uiLocale,
    });
  }, [normalizedCountry, sessionId, uiLocale]);

  function handleStoreClick(store: "ios_app_store" | "google_play") {
    if (!sessionId) return;
    void logOutreachEvent({
      event: "cta_click",
      page_key: CANDIDATE_RESULT_PAGE_KEY,
      utm_campaign: "unknown",
      utm_medium: "unknown",
      utm_source: "unknown",
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
        <KinlyStack direction="vertical" gap="xl">
          <section className={`${styles.section} ${styles.hero}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={1}>{fitCheckCopy.result.title}</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                {fitCheckCopy.result.subtitle}
              </KinlyText>
            </KinlyStack>
          </section>

          {!isAvailable ? (
            <KinlyCard variant="surface">
              <KinlyStack direction="vertical" gap="s">
                <KinlyHeading level={2}>{fitCheckCopy.result.unavailable}</KinlyHeading>
                <KinlyButton variant="outlined" href="/kinly/general">
                  {fitCheckCopy.result.learnMore}
                </KinlyButton>
              </KinlyStack>
            </KinlyCard>
          ) : (
            <>
              <section className={styles.section}>
                <div className={styles.successCard}>
                  <KinlyCard variant="surfaceContainer">
                    <KinlyStack direction="vertical" gap="s">
                      <KinlyHeading level={2}>{displayName ? `Thanks, ${displayName}.` : "Thanks."}</KinlyHeading>
                      <KinlyText variant="bodyMedium">{reflection}</KinlyText>
                      {locationLabel ? (
                        <KinlyText variant="bodyMedium" tone="muted">
                          {fitCheckCopy.result.locationPrefix} {locationLabel}
                        </KinlyText>
                      ) : null}
                    </KinlyStack>
                  </KinlyCard>
                </div>
              </section>

              <section className={styles.section}>
                <StoreDownloadCtas
                  detectedCountryCode={detectedCountryCode}
                  detectedPlatform={detectedPlatform}
                  onStoreClick={handleStoreClick}
                  title={fitCheckCopy.result.appTitle}
                  body={fitCheckCopy.result.appBody}
                />
              </section>

              <section className={styles.section}>
                <KinlyButton variant="outlined" href={ctaUrl}>
                  {fitCheckCopy.result.learnMore}
                </KinlyButton>
              </section>
            </>
          )}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
