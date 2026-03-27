"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyInput,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../components";
import {
  FIT_CHECK_SCENARIOS,
  type PartialFitCheckAnswers,
  getOwnerDraftSession,
  mapFitCheckErrorMessage,
  saveOwnerDraftSession,
  toFitCheckAnswersPayload,
  upsertFitCheckDraft,
} from "../../../lib/flatmateFitCheck";
import {
  buildClientEventId,
  detectUiLocale,
  ensureSessionId,
  hasEventBeenSent,
  hasPageViewBeenSent,
  logOutreachEvent,
  markEventSent,
  markPageViewSent,
  normalizeCountryCode,
  readUtmParams,
} from "../../../lib/outreachTracking";
import { StoreDownloadCtas } from "./StoreDownloadCtas";
import styles from "./FitCheckClient.module.css";
import { fitCheckCopy, OWNER_PAGE_KEY } from "./copy";

type Props = {
  detectedCountryCode?: string | null;
  detectedPlatform?: "ios" | "android" | "web";
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function OwnerFitCheckClient({
  detectedCountryCode = null,
  detectedPlatform = "web",
}: Props) {
  const searchParams = useSearchParams();
  const initialDraft = useMemo(() => getOwnerDraftSession(), []);
  const [answers, setAnswers] = useState<PartialFitCheckAnswers>(() => initialDraft?.answers ?? {});
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState(() => initialDraft?.shareUrl ?? "");
  const [summaryLabels, setSummaryLabels] = useState<string[]>(() => initialDraft?.summaryLabels ?? []);
  const [continueUrl, setContinueUrl] = useState<string | null>(() => initialDraft?.claimUrl ?? null);
  const [copied, setCopied] = useState(false);
  const [hasSavedDraft, setHasSavedDraft] = useState(() => Boolean(initialDraft));
  const [resumeInfo, setResumeInfo] = useState<ReturnType<typeof getOwnerDraftSession>>(() => initialDraft);

  const sessionId = useMemo(() => ensureSessionId(), []);
  const uiLocale = useMemo(() => detectUiLocale() ?? "en", []);
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);
  const normalizedCountry = useMemo(() => normalizeCountryCode(detectedCountryCode), [detectedCountryCode]);
  const isComplete = Boolean(toFitCheckAnswersPayload(answers));

  useEffect(() => {
    if (!sessionId) return;
    if (hasPageViewBeenSent(OWNER_PAGE_KEY, sessionId)) return;

    markPageViewSent(OWNER_PAGE_KEY, sessionId);
    void logOutreachEvent({
      event: "page_view",
      page_key: OWNER_PAGE_KEY,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry,
      ui_locale: uiLocale,
    });
  }, [normalizedCountry, sessionId, uiLocale, utmParams.utm_campaign, utmParams.utm_medium, utmParams.utm_source]);

  function setAnswer(scenarioId: (typeof FIT_CHECK_SCENARIOS)[number]["id"], optionIndex: 0 | 1 | 2) {
    setAnswers((current) => ({ ...current, [scenarioId]: optionIndex }));

    if (!sessionId) return;
    if (hasEventBeenSent("fit_check_draft_start", OWNER_PAGE_KEY, sessionId)) return;
    markEventSent("fit_check_draft_start", OWNER_PAGE_KEY, sessionId);
    void logOutreachEvent({
      event: "fit_check_draft_start",
      page_key: OWNER_PAGE_KEY,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry,
      ui_locale: uiLocale,
      client_event_id: buildClientEventId(),
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const payload = toFitCheckAnswersPayload(answers);
    if (!payload) {
      setStatus("error");
      setError(fitCheckCopy.owner.missingAnswers);
      return;
    }

    setStatus("submitting");
    setError(null);

    const result = await upsertFitCheckDraft(
      uiLocale,
      payload,
      resumeInfo ? { draftId: resumeInfo.draftId, draftSessionToken: resumeInfo.draftSessionToken } : null,
    );

    if (!result.ok) {
      setStatus("error");
      setError(mapFitCheckErrorMessage(result.error.code));
      return;
    }

    const session = {
      draftId: result.data.draft_id,
      draftSessionToken: result.data.draft_session?.draft_session_token ?? resumeInfo?.draftSessionToken ?? "",
      shareUrl: result.data.share.share_url,
      shareToken: result.data.share.share_token,
      claimUrl: result.data.claim.continue_in_app_url,
      answers: result.data.owner_answers,
      summaryLabels: result.data.summary.labels,
    };

    saveOwnerDraftSession(session);
    setResumeInfo(session);
    setShareUrl(session.shareUrl);
    setSummaryLabels(session.summaryLabels);
    setContinueUrl(session.claimUrl);
    setHasSavedDraft(true);
    setStatus("success");

    if (sessionId) {
      void logOutreachEvent({
        event: "fit_check_share_generated",
        page_key: OWNER_PAGE_KEY,
        utm_campaign: utmParams.utm_campaign,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        session_id: sessionId,
        country: normalizedCountry,
        ui_locale: uiLocale,
        client_event_id: buildClientEventId(),
      });
    }
  }

  async function handleCopyLink() {
    if (!shareUrl || typeof navigator === "undefined" || !navigator.clipboard) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  function handleStoreClick(store: "ios_app_store" | "google_play") {
    if (!sessionId) return;
    void logOutreachEvent({
      event: "cta_click",
      page_key: OWNER_PAGE_KEY,
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
        <KinlyStack direction="vertical" gap="xl">
          <section className={`${styles.section} ${styles.hero}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyText variant="labelMedium" tone="muted">
                {fitCheckCopy.owner.eyebrow}
              </KinlyText>
              <KinlyHeading level={1}>{fitCheckCopy.owner.title}</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                {fitCheckCopy.owner.subtitle}
              </KinlyText>
              <KinlyText variant="bodyMedium">{fitCheckCopy.owner.intro}</KinlyText>
            </KinlyStack>
          </section>

          {resumeInfo ? (
            <section className={styles.section}>
              <KinlyCard variant="surfaceContainer">
                <KinlyText variant="bodyMedium">{fitCheckCopy.owner.resume}</KinlyText>
              </KinlyCard>
            </section>
          ) : null}

          <section className={styles.section}>
            <KinlyCard variant="surface">
              <form onSubmit={handleSubmit}>
                <KinlyStack direction="vertical" gap="l">
                  {FIT_CHECK_SCENARIOS.map((scenario) => {
                    const activeAnswer = answers[scenario.id];

                    return (
                      <div key={scenario.id} className={styles.questionGrid}>
                        <KinlyStack direction="vertical" gap="xs">
                          <KinlyHeading level={2}>{scenario.prompt}</KinlyHeading>
                          <div className={styles.optionGroup}>
                            {scenario.options.map((option, index) => {
                              const optionIndex = index as 0 | 1 | 2;
                              const isActive = activeAnswer === optionIndex;
                              return (
                                <div
                                  key={`${scenario.id}-${option}`}
                                  className={`${styles.optionFrame} ${isActive ? styles.optionFrameActive : ""}`.trim()}
                                >
                                  <KinlyButton
                                    type="button"
                                    variant={isActive ? "filled" : "outlined"}
                                    onClick={() => setAnswer(scenario.id, optionIndex)}
                                  >
                                    {option}
                                  </KinlyButton>
                                </div>
                              );
                            })}
                          </div>
                        </KinlyStack>
                      </div>
                    );
                  })}

                  {error ? (
                    <div className={styles.errorCard}>
                      <KinlyCard variant="surface">
                        <KinlyText variant="bodyMedium" tone="danger">
                          {error}
                        </KinlyText>
                      </KinlyCard>
                    </div>
                  ) : null}

                  <KinlyButton
                    type="submit"
                    variant="filled"
                    isLoading={status === "submitting"}
                    disabled={!isComplete || status === "submitting"}
                  >
                    {hasSavedDraft ? fitCheckCopy.owner.update : fitCheckCopy.owner.submit}
                  </KinlyButton>
                </KinlyStack>
              </form>
            </KinlyCard>
          </section>

          {summaryLabels.length > 0 ? (
            <section className={styles.section}>
              <KinlyCard variant="surfaceContainer">
                <KinlyStack direction="vertical" gap="m">
                  <KinlyHeading level={2}>{fitCheckCopy.owner.summaryTitle}</KinlyHeading>
                  <div className={styles.summaryList}>
                    {summaryLabels.map((label) => (
                      <div key={label} className={styles.pill}>
                        <KinlyText variant="bodyMedium">{label}</KinlyText>
                      </div>
                    ))}
                  </div>
                </KinlyStack>
              </KinlyCard>
            </section>
          ) : null}

          {shareUrl ? (
            <section className={styles.section}>
              <KinlyCard variant="surfaceContainerHigh">
                <KinlyStack direction="vertical" gap="m">
                  <KinlyHeading level={2}>{fitCheckCopy.owner.shareTitle}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{fitCheckCopy.owner.shareHelp}</KinlyText>
                  <div className={styles.shareRow}>
                    <KinlyInput label="Applicant link" value={shareUrl} readOnly />
                    <KinlyButton type="button" variant="outlined" onClick={() => void handleCopyLink()}>
                      {copied ? fitCheckCopy.owner.copied : fitCheckCopy.owner.copyLink}
                    </KinlyButton>
                  </div>
                </KinlyStack>
              </KinlyCard>
            </section>
          ) : null}

          {(status === "success" || continueUrl) ? (
            <section className={styles.section}>
              <StoreDownloadCtas
                detectedCountryCode={detectedCountryCode}
                detectedPlatform={detectedPlatform}
                onStoreClick={handleStoreClick}
                title={fitCheckCopy.owner.continueTitle}
                body={fitCheckCopy.owner.continueBody}
                continueUrl={continueUrl}
              />
            </section>
          ) : null}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
