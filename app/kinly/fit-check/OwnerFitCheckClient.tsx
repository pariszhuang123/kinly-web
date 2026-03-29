"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyInput,
  KinlyLink,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../components";
import {
  BONUS_INTERVIEW_QUESTIONS,
  FIT_CHECK_SCENARIOS,
  type PartialFitCheckAnswers,
  getOwnerDraftSession,
  mapFitCheckErrorMessage,
  saveOwnerDraftSession,
  simulateMatchPreview,
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
import styles from "./FitCheckClient.module.css";
import { fitCheckCopy, OWNER_PAGE_KEY } from "./copy";

type Props = {
  detectedCountryCode?: string | null;
  detectedPlatform?: "ios" | "android" | "web";
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function OwnerFitCheckClient({
  detectedCountryCode = null,
}: Props) {
  const searchParams = useSearchParams();
  const initialDraft = useMemo(() => getOwnerDraftSession(), []);
  const [answers, setAnswers] = useState<PartialFitCheckAnswers>(() => initialDraft?.answers ?? {});
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState(() => initialDraft?.shareUrl ?? "");
  const [copied, setCopied] = useState(false);
  const [hasSavedDraft, setHasSavedDraft] = useState(() => Boolean(initialDraft));
  const [resumeInfo, setResumeInfo] = useState<ReturnType<typeof getOwnerDraftSession>>(() => initialDraft);
  const [currentStep, setCurrentStep] = useState(0);

  const sessionId = useMemo(() => ensureSessionId(), []);
  const uiLocale = useMemo(() => detectUiLocale() ?? "en", []);
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);
  const normalizedCountry = useMemo(() => normalizeCountryCode(detectedCountryCode), [detectedCountryCode]);
  const isComplete = Boolean(toFitCheckAnswersPayload(answers));
  const activeScenario = FIT_CHECK_SCENARIOS[currentStep];
  const activeAnswer = activeScenario ? answers[activeScenario.id] : undefined;
  const progressPercent = ((currentStep + 1) / FIT_CHECK_SCENARIOS.length) * 100;

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

    const isLastStep = currentStep >= FIT_CHECK_SCENARIOS.length - 1;
    if (!isLastStep) {
      setError(null);
      setStatus("idle");
      setCurrentStep((current) => current + 1);
    }

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

  function handleBackStep() {
    setError(null);
    setStatus("idle");
    setCurrentStep((current) => Math.max(current - 1, 0));
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
              <KinlyText variant="bodySmall" tone="muted">
                {fitCheckCopy.owner.statText} —{" "}
                <KinlyLink href={fitCheckCopy.owner.statUrl} external>
                  {fitCheckCopy.owner.statSource}
                </KinlyLink>
              </KinlyText>
            </KinlyStack>
          </section>

          {resumeInfo ? (
            <section className={styles.section}>
              <KinlyCard variant="surfaceContainer">
                <KinlyText variant="bodyMedium">{fitCheckCopy.owner.resume}</KinlyText>
              </KinlyCard>
            </section>
          ) : null}

          {status === "success" ? (
            <>
              <section className={styles.section}>
                <div className={styles.successBanner}>
                  <KinlyCard variant="surface">
                    <KinlyStack direction="vertical" gap="xs">
                      <KinlyHeading level={2}>{fitCheckCopy.owner.successTitle}</KinlyHeading>
                      <KinlyText variant="bodyMedium" tone="muted">
                        {fitCheckCopy.owner.successBody}
                      </KinlyText>
                    </KinlyStack>
                  </KinlyCard>
                </div>
              </section>

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

              {toFitCheckAnswersPayload(answers) ? (
                <>
                  <section className={styles.section}>
                    <KinlyCard variant="surfaceContainer">
                      <KinlyStack direction="vertical" gap="m">
                        <KinlyHeading level={2}>{fitCheckCopy.owner.summaryTitle}</KinlyHeading>
                        <KinlyText variant="bodyMedium" tone="muted">
                          {fitCheckCopy.owner.summarySubtitle}
                        </KinlyText>
                        <div className={styles.summaryList}>
                          {simulateMatchPreview(toFitCheckAnswersPayload(answers)!).map((result) => {
                            const badgeClass =
                              result.match === "match" ? styles.badgeMatch :
                              result.match === "close" ? styles.badgeClose :
                              styles.badgeClash;
                            const badgeLabel =
                              result.match === "match" ? fitCheckCopy.owner.matchLabel :
                              result.match === "close" ? fitCheckCopy.owner.closeLabel :
                              fitCheckCopy.owner.clashLabel;

                            return (
                              <div key={result.scenarioId} className={styles.matchRow}>
                                <KinlyText variant="bodyMedium">{result.prompt}</KinlyText>
                                <div className={styles.matchAnswers}>
                                  <KinlyText variant="bodySmall" tone="muted">
                                    {fitCheckCopy.owner.youLabel}: {result.ownerLabel}
                                  </KinlyText>
                                  <KinlyText variant="bodySmall" tone="muted">
                                    {fitCheckCopy.owner.applicantLabel}: {result.applicantLabel}
                                  </KinlyText>
                                </div>
                                <span className={`${styles.matchBadge} ${badgeClass}`}>{badgeLabel}</span>
                              </div>
                            );
                          })}
                        </div>
                      </KinlyStack>
                    </KinlyCard>
                  </section>

                  <section className={styles.section}>
                    <KinlyCard variant="surfaceContainer">
                      <KinlyStack direction="vertical" gap="m">
                        <KinlyHeading level={2}>{fitCheckCopy.owner.questionsTitle}</KinlyHeading>
                        <KinlyText variant="bodyMedium" tone="muted">
                          {fitCheckCopy.owner.questionsSubtitle}
                        </KinlyText>
                        {simulateMatchPreview(toFitCheckAnswersPayload(answers)!).filter((r) => r.match !== "match").map((result) => (
                          <KinlyStack key={result.scenarioId} direction="vertical" gap="xs">
                            <KinlyText variant="bodyMedium">{result.prompt}</KinlyText>
                            <ul className={styles.questionList}>
                              {result.interviewQuestions.map((q) => (
                                <li key={q}>
                                  <KinlyText variant="bodySmall">{q}</KinlyText>
                                </li>
                              ))}
                            </ul>
                          </KinlyStack>
                        ))}
                      </KinlyStack>
                    </KinlyCard>
                  </section>

                  <section className={styles.section}>
                    <KinlyCard variant="surfaceContainer">
                      <KinlyStack direction="vertical" gap="m">
                        <KinlyHeading level={2}>{fitCheckCopy.owner.bonusTitle}</KinlyHeading>
                        <KinlyText variant="bodyMedium" tone="muted">
                          {fitCheckCopy.owner.bonusSubtitle}
                        </KinlyText>
                        {BONUS_INTERVIEW_QUESTIONS.map((group) => (
                          <KinlyStack key={group.category} direction="vertical" gap="xs">
                            <KinlyText variant="bodyMedium">{group.category}</KinlyText>
                            <ul className={styles.questionList}>
                              {group.questions.map((q) => (
                                <li key={q}>
                                  <KinlyText variant="bodySmall">{q}</KinlyText>
                                </li>
                              ))}
                            </ul>
                          </KinlyStack>
                        ))}
                      </KinlyStack>
                    </KinlyCard>
                  </section>
                </>
              ) : null}

              <section className={styles.section}>
                <KinlyCard variant="surfaceContainerHigh">
                  <KinlyStack direction="vertical" gap="m">
                    <div className={styles.signInLogo}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                    </div>
                    <KinlyHeading level={2}>{fitCheckCopy.owner.signInTitle}</KinlyHeading>
                    <KinlyText variant="bodyMedium" tone="muted">
                      {fitCheckCopy.owner.signInBody}
                    </KinlyText>
                    <KinlyStack direction="vertical" gap="s">
                      <KinlyButton
                        type="button"
                        variant="outlined"
                        onClick={() => {/* TODO: Google sign-in */}}
                      >
                        {fitCheckCopy.owner.signInGoogle}
                      </KinlyButton>
                      <KinlyButton
                        type="button"
                        variant="outlined"
                        onClick={() => {/* TODO: Apple sign-in */}}
                      >
                        {fitCheckCopy.owner.signInApple}
                      </KinlyButton>
                    </KinlyStack>
                  </KinlyStack>
                </KinlyCard>
              </section>
            </>
          ) : (
            <section className={styles.section}>
              <KinlyCard variant="surface">
                <form onSubmit={handleSubmit}>
                  <KinlyStack direction="vertical" gap="l">
                    <fieldset className={styles.questionGrid} key={currentStep}>
                      <legend className={styles.srOnly}>{activeScenario.prompt}</legend>
                      <KinlyStack direction="vertical" gap="xs">
                        <KinlyHeading level={2}>{activeScenario.prompt}</KinlyHeading>
                        <div className={styles.optionGroup} role="radiogroup" aria-label={activeScenario.prompt}>
                          {activeScenario.options.map((option, index) => {
                            const optionIndex = index as 0 | 1 | 2;
                            const isActive = activeAnswer === optionIndex;
                            return (
                              <div
                                key={`${activeScenario.id}-${option}`}
                                className={`${styles.optionFrame} ${isActive ? styles.optionFrameActive : ""}`.trim()}
                              >
                                <KinlyButton
                                  type="button"
                                  variant={isActive ? "filled" : "outlined"}
                                  aria-pressed={isActive}
                                  onClick={() => setAnswer(activeScenario.id, optionIndex)}
                                >
                                  {option}
                                </KinlyButton>
                              </div>
                            );
                          })}
                        </div>
                      </KinlyStack>
                    </fieldset>

                    {error ? (
                      <div className={styles.errorCard}>
                        <KinlyCard variant="surface">
                          <KinlyText variant="bodyMedium" tone="danger">
                            {error}
                          </KinlyText>
                        </KinlyCard>
                      </div>
                    ) : null}

                    <div className={styles.progressBlock}>
                      <KinlyText variant="bodyMedium" tone="muted">
                        {fitCheckCopy.owner.progressLabel} {currentStep + 1} of {FIT_CHECK_SCENARIOS.length}
                      </KinlyText>
                      <div className={styles.progressBar} aria-hidden="true">
                        <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
                      </div>
                    </div>

                    <div className={styles.navigationRow}>
                      {currentStep > 0 ? (
                        <KinlyButton
                          type="button"
                          variant="outlined"
                          disabled={status === "submitting"}
                          onClick={handleBackStep}
                        >
                          {fitCheckCopy.owner.back}
                        </KinlyButton>
                      ) : null}
                      {currentStep >= FIT_CHECK_SCENARIOS.length - 1 ? (
                        <KinlyButton
                          type="submit"
                          variant="filled"
                          isLoading={status === "submitting"}
                          disabled={!isComplete || status === "submitting"}
                        >
                          {hasSavedDraft ? fitCheckCopy.owner.update : fitCheckCopy.owner.submit}
                        </KinlyButton>
                      ) : null}
                    </div>
                  </KinlyStack>
                </form>
              </KinlyCard>
            </section>
          )}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
