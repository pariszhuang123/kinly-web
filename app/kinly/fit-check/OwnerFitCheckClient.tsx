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
  getFitCheckCityOptions,
  getFitCheckCountryOptions,
  getFitCheckOtherCityOptions,
  getFitCheckPriorityCityOptions,
  isValidFitCheckCity,
} from "../../../lib/fitCheckLocations";
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
const ASKED_QUESTIONS_STORAGE_KEY = "kinly.fit_check.owner_asked_questions";

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
  const [countryCode, setCountryCode] = useState(() => initialDraft?.countryCode ?? normalizeCountryCode(detectedCountryCode) ?? "");
  const [cityQuery, setCityQuery] = useState(() => initialDraft?.cityName ?? "");
  const [cityName, setCityName] = useState(() => initialDraft?.cityName ?? "");
  const [showComparisonPreview, setShowComparisonPreview] = useState(false);
  const [currentStep, setCurrentStep] = useState(() =>
    initialDraft ? FIT_CHECK_SCENARIOS.length : 0,
  );
  const [askedQuestions, setAskedQuestions] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.sessionStorage.getItem(ASKED_QUESTIONS_STORAGE_KEY);
      if (!raw) return {};
      return JSON.parse(raw) as Record<string, boolean>;
    } catch {
      return {};
    }
  });

  const sessionId = useMemo(() => ensureSessionId(), []);
  const uiLocale = useMemo(() => detectUiLocale() ?? "en", []);
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);
  const normalizedCountry = useMemo(() => normalizeCountryCode(detectedCountryCode), [detectedCountryCode]);
  const countryOptions = useMemo(() => getFitCheckCountryOptions(uiLocale), [uiLocale]);
  const cityOptions = useMemo(() => getFitCheckCityOptions(countryCode, cityQuery), [countryCode, cityQuery]);
  const priorityCityOptions = useMemo(
    () => getFitCheckPriorityCityOptions(countryCode, cityQuery),
    [countryCode, cityQuery],
  );
  const otherCityOptions = useMemo(() => getFitCheckOtherCityOptions(countryCode, cityQuery), [countryCode, cityQuery]);
  const completedAnswers = useMemo(() => toFitCheckAnswersPayload(answers), [answers]);
  const previewResults = useMemo(
    () => (completedAnswers ? simulateMatchPreview(completedAnswers) : []),
    [completedAnswers],
  );
  const isComplete = Boolean(completedAnswers);
  const hasValidLocation = Boolean(countryCode) && isValidFitCheckCity(countryCode, cityName);
  const totalSteps = FIT_CHECK_SCENARIOS.length + 1;
  const isLocationStep = currentStep === FIT_CHECK_SCENARIOS.length;
  const activeScenario = FIT_CHECK_SCENARIOS[Math.min(currentStep, FIT_CHECK_SCENARIOS.length - 1)];
  const activeAnswer = activeScenario ? answers[activeScenario.id] : undefined;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(ASKED_QUESTIONS_STORAGE_KEY, JSON.stringify(askedQuestions));
    } catch {
      // ignore storage failures
    }
  }, [askedQuestions]);

  function setAnswer(scenarioId: (typeof FIT_CHECK_SCENARIOS)[number]["id"], optionIndex: 0 | 1 | 2) {
    setAnswers((current) => ({ ...current, [scenarioId]: optionIndex }));

    setError(null);
    setStatus("idle");
    setCurrentStep((current) => Math.min(current + 1, totalSteps - 1));

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

  function handleCountrySelect(nextCountryCode: string) {
    setCountryCode(nextCountryCode);
    setCityName("");
    setCityQuery("");
    if (error === fitCheckCopy.owner.missingLocation) {
      setError(null);
      setStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!completedAnswers) {
      setStatus("error");
      setError(fitCheckCopy.owner.missingAnswers);
      return;
    }
    if (!hasValidLocation) {
      setStatus("error");
      setError(fitCheckCopy.owner.missingLocation);
      return;
    }

    setStatus("submitting");
    setError(null);

    const result = await upsertFitCheckDraft(
      uiLocale,
      completedAnswers,
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
      countryCode: countryCode || undefined,
      cityName,
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

  function toggleAskedQuestion(questionKey: string) {
    setAskedQuestions((current) => ({
      ...current,
      [questionKey]: !current[questionKey],
    }));
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
            null
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

              {completedAnswers ? (
                <>
                  <section className={styles.section}>
                    <KinlyCard variant="surfaceContainer">
                      <KinlyStack direction="vertical" gap="m">
                        <KinlyHeading level={2}>{fitCheckCopy.owner.comparisonPreviewTitle}</KinlyHeading>
                        <KinlyText variant="bodyMedium" tone="muted">
                          {fitCheckCopy.owner.comparisonPreviewBody}
                        </KinlyText>
                        <KinlyButton
                          type="button"
                          variant="outlined"
                          aria-pressed={showComparisonPreview}
                          onClick={() => setShowComparisonPreview((current) => !current)}
                        >
                          {showComparisonPreview
                            ? fitCheckCopy.owner.comparisonPreviewClose
                            : fitCheckCopy.owner.comparisonPreviewOpen}
                        </KinlyButton>
                        {showComparisonPreview ? (
                          <KinlyStack direction="vertical" gap="s">
                            <KinlyText variant="bodySmall" tone="muted">
                              {fitCheckCopy.owner.comparisonPreviewHint}
                            </KinlyText>
                            <div className={styles.previewList}>
                              {previewResults.map((result) => {
                                const previewLabel =
                                  result.match === "match" ? fitCheckCopy.owner.comparisonAligned :
                                  result.match === "close" ? fitCheckCopy.owner.comparisonAskMore :
                                  fitCheckCopy.owner.comparisonMismatch;
                                const previewClass =
                                  result.match === "match" ? styles.badgeMatch :
                                  result.match === "close" ? styles.badgeClose :
                                  styles.badgeClash;

                                return (
                                  <div key={result.scenarioId} className={styles.previewRow}>
                                    <KinlyText variant="bodyMedium">{result.prompt}</KinlyText>
                                    <span className={`${styles.matchBadge} ${previewClass}`}>{previewLabel}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </KinlyStack>
                        ) : null}
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
                        <KinlyText variant="bodySmall" tone="muted">
                          {fitCheckCopy.owner.questionsHelper}
                        </KinlyText>
                        {previewResults.filter((r) => r.match !== "match").map((result) => {
                          const questions = result.match === "clash"
                            ? result.interviewQuestions
                            : result.interviewQuestions.slice(0, 1);
                          return (
                            <KinlyStack key={result.scenarioId} direction="vertical" gap="xs">
                              <KinlyText variant="bodyMedium">{result.prompt}</KinlyText>
                              <ul className={styles.questionList}>
                                {questions.map((q, index) => {
                                  const questionKey = `${result.scenarioId}:${index}:${q}`;
                                  const isAsked = Boolean(askedQuestions[questionKey]);
                                  return (
                                  <li key={questionKey} className={styles.questionItem}>
                                    <div className={styles.questionItemRow}>
                                      <div className={isAsked ? styles.questionTextAsked : undefined}>
                                        <KinlyText variant="bodySmall" tone={isAsked ? "muted" : undefined}>
                                          {q}
                                        </KinlyText>
                                      </div>
                                      <KinlyButton
                                        type="button"
                                        variant={isAsked ? "filled" : "outlined"}
                                        aria-pressed={isAsked}
                                        onClick={() => toggleAskedQuestion(questionKey)}
                                      >
                                        {isAsked ? fitCheckCopy.owner.questionAsked : fitCheckCopy.owner.questionMarkAsked}
                                      </KinlyButton>
                                    </div>
                                  </li>
                                  );
                                })}
                              </ul>
                            </KinlyStack>
                          );
                        })}
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
                    {!isLocationStep ? (
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
                    ) : (
                      <KinlyStack direction="vertical" gap="m">
                        <KinlyHeading level={2}>{fitCheckCopy.owner.locationTitle}</KinlyHeading>
                        <KinlyText variant="bodyMedium" tone="muted">
                          {fitCheckCopy.owner.locationBody}
                        </KinlyText>
                        <div className={styles.countryPicker}>
                          <KinlyInput
                            label={fitCheckCopy.owner.countryLabel}
                            hint={fitCheckCopy.owner.countryHint}
                            value={countryCode}
                            onChange={(event) => handleCountrySelect(event.target.value.trim().toUpperCase())}
                            placeholder="NZ"
                            maxLength={2}
                            required
                          />
                          <div className={styles.countryList} role="listbox" aria-label={fitCheckCopy.owner.countryLabel}>
                            {countryOptions.map((country) => (
                              <div key={country.code} className={styles.countryOption}>
                                <KinlyButton
                                  type="button"
                                  variant={country.code === countryCode ? "filled" : "ghost"}
                                  onClick={() => handleCountrySelect(country.code)}
                                  aria-selected={country.code === countryCode ? "true" : "false"}
                                >
                                  {country.name} ({country.code})
                                </KinlyButton>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className={styles.citySection}>
                          <KinlyInput
                            label={fitCheckCopy.owner.cityLabel}
                            hint={fitCheckCopy.owner.cityHint}
                            value={cityQuery}
                            onChange={(event) => {
                              setCityQuery(event.target.value);
                              setCityName("");
                            }}
                            placeholder={fitCheckCopy.owner.cityPlaceholder}
                            required
                          />
                          {cityOptions.length > 0 ? (
                            <>
                              {priorityCityOptions.length > 0 ? (
                                <div className={styles.cityGroup}>
                                  <KinlyText variant="bodyMedium" tone="muted">
                                    {fitCheckCopy.owner.priorityCitiesTitle}
                                  </KinlyText>
                                  <div className={styles.optionGroup} role="listbox" aria-label={fitCheckCopy.owner.priorityCitiesTitle}>
                                    {priorityCityOptions.map((city) => (
                                      <div
                                        key={city}
                                        className={`${styles.optionFrame} ${cityName === city ? styles.optionFrameActive : ""}`.trim()}
                                      >
                                        <KinlyButton
                                          type="button"
                                          variant={cityName === city ? "filled" : "outlined"}
                                          onClick={() => {
                                            setCityName(city);
                                            setCityQuery(city);
                                          }}
                                          aria-selected={cityName === city ? "true" : "false"}
                                        >
                                          {city}
                                        </KinlyButton>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              {otherCityOptions.length > 0 ? (
                                <div className={styles.cityGroup}>
                                  <KinlyText variant="bodyMedium" tone="muted">
                                    {fitCheckCopy.owner.otherCitiesTitle}
                                  </KinlyText>
                                  <div className={styles.optionGroup} role="listbox" aria-label={fitCheckCopy.owner.otherCitiesTitle}>
                                    {otherCityOptions.map((city) => (
                                      <div
                                        key={city}
                                        className={`${styles.optionFrame} ${cityName === city ? styles.optionFrameActive : ""}`.trim()}
                                      >
                                        <KinlyButton
                                          type="button"
                                          variant={cityName === city ? "filled" : "outlined"}
                                          onClick={() => {
                                            setCityName(city);
                                            setCityQuery(city);
                                          }}
                                          aria-selected={cityName === city ? "true" : "false"}
                                        >
                                          {city}
                                        </KinlyButton>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </>
                          ) : (
                            <KinlyText variant="bodyMedium" tone="muted">
                              {fitCheckCopy.owner.cityEmpty}
                            </KinlyText>
                          )}
                        </div>
                      </KinlyStack>
                    )}

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
                        {fitCheckCopy.owner.progressLabel} {currentStep + 1} of {totalSteps}
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
                      {isLocationStep ? (
                        <KinlyButton
                          type="submit"
                          variant="filled"
                          isLoading={status === "submitting"}
                          disabled={!isComplete || !hasValidLocation || status === "submitting"}
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
