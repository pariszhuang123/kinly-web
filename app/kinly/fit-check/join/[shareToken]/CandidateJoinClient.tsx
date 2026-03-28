"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyInput,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../../../components";
import { CANDIDATE_JOIN_PAGE_KEY, fitCheckCopy } from "../../copy";
import {
  FIT_CHECK_SCENARIOS,
  type PartialFitCheckAnswers,
  fetchFitCheckPublicByToken,
  getFitCheckEntryText,
  mapFitCheckErrorMessage,
  saveCandidateResult,
  submitFitCheckCandidateByToken,
  toFitCheckAnswersPayload,
} from "../../../../../lib/flatmateFitCheck";
import {
  getFitCheckCityOptions,
  getFitCheckCountryOptions,
  getFitCheckOtherCityOptions,
  getFitCheckPriorityCityOptions,
  isValidFitCheckCity,
} from "../../../../../lib/fitCheckLocations";
import {
  buildClientEventId,
  detectUiLocale,
  ensureSessionId,
  hasPageViewBeenSent,
  logOutreachEvent,
  markPageViewSent,
  normalizeCountryCode,
  readUtmParams,
} from "../../../../../lib/outreachTracking";
import styles from "../../FitCheckClient.module.css";

type Props = {
  shareToken: string;
  detectedCountryCode?: string | null;
};

type LoadState = "loading" | "ready" | "unavailable" | "error";
type SubmitState = "idle" | "submitting" | "error";

export default function CandidateJoinClient({ shareToken, detectedCountryCode = null }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [displayName, setDisplayName] = useState("");
  const [answers, setAnswers] = useState<PartialFitCheckAnswers>({});
  const [entryPromptKey, setEntryPromptKey] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [cityName, setCityName] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);

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
  const answersPayload = useMemo(() => toFitCheckAnswersPayload(answers), [answers]);
  const hasValidLocation = Boolean(countryCode) && isValidFitCheckCity(countryCode, cityName);
  const canSubmit = Boolean(displayName.trim()) && Boolean(answersPayload) && hasValidLocation;
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = FIT_CHECK_SCENARIOS.length + 1;
  const isLocationStep = currentStep === FIT_CHECK_SCENARIOS.length;
  const activeScenario = FIT_CHECK_SCENARIOS[Math.min(currentStep, FIT_CHECK_SCENARIOS.length - 1)];
  const activeAnswer = activeScenario ? answers[activeScenario.id] : undefined;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const result = await fetchFitCheckPublicByToken(shareToken, uiLocale);
      if (cancelled) return;
      if (!result.ok) {
        setLoadState("error");
        setError(mapFitCheckErrorMessage(result.error.code));
        return;
      }
      if (!result.data.available || !result.data.fit_check_public) {
        setLoadState("unavailable");
        setError(mapFitCheckErrorMessage(result.data.error?.code ?? result.data.token_status ?? null));
        return;
      }
      setEntryPromptKey(result.data.fit_check_public.entry_prompt_key);
      const suggestedCountryCode = normalizeCountryCode(
        result.data.fit_check_public.location?.suggested_country_code ?? detectedCountryCode,
      );
      if (suggestedCountryCode) {
        setCountryCode((current) => current || suggestedCountryCode);
      }
      setLoadState("ready");
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [detectedCountryCode, shareToken, uiLocale]);

  useEffect(() => {
    if (!sessionId) return;
    if (hasPageViewBeenSent(CANDIDATE_JOIN_PAGE_KEY, sessionId)) return;

    markPageViewSent(CANDIDATE_JOIN_PAGE_KEY, sessionId);
    void logOutreachEvent({
      event: "page_view",
      page_key: CANDIDATE_JOIN_PAGE_KEY,
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
  }

  function handleCountrySelect(nextCountryCode: string) {
    setCountryCode(nextCountryCode);
    setCityName("");
    setCityQuery("");
    if (error === fitCheckCopy.candidate.missingLocation) {
      setError(null);
      setSubmitState("idle");
    }
  }

  function handleNextStep() {
    if (!isLocationStep && (!activeScenario || typeof activeAnswer !== "number")) {
      setSubmitState("error");
      setError(mapFitCheckErrorMessage("FIT_CHECK_INVALID_INPUTS"));
      return;
    }

    setError(null);
    setSubmitState("idle");
    setCurrentStep((current) => Math.min(current + 1, totalSteps - 1));
  }

  function handleBackStep() {
    setError(null);
    setSubmitState("idle");
    setCurrentStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!answersPayload || !displayName.trim() || !sessionId) {
      setSubmitState("error");
      setError(mapFitCheckErrorMessage("FIT_CHECK_INVALID_INPUTS"));
      return;
    }
    if (!hasValidLocation) {
      setSubmitState("error");
      setError(fitCheckCopy.candidate.missingLocation);
      return;
    }

    setSubmitState("submitting");
    setError(null);

    const result = await submitFitCheckCandidateByToken(
      shareToken,
      uiLocale,
      displayName.trim(),
      countryCode,
      cityName,
      answersPayload,
      sessionId,
    );

    if (!result.ok) {
      setSubmitState("error");
      setError(mapFitCheckErrorMessage(result.error.code));
      return;
    }

    saveCandidateResult({
      submissionId: result.data.submission_id,
      displayName: result.data.candidate.display_name,
      reflectionKey: result.data.confirmation.result_page?.reflection?.text_key ?? null,
      ctaUrl: result.data.confirmation.cta.target_url,
      countryCode: result.data.candidate.country_code ?? countryCode,
      cityName: result.data.candidate.city_name ?? cityName,
    });

    void logOutreachEvent({
      event: "fit_check_submission_complete",
      page_key: CANDIDATE_JOIN_PAGE_KEY,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry,
      ui_locale: uiLocale,
      client_event_id: buildClientEventId(),
    });

    router.push(`/kinly/fit-check/result/${result.data.submission_id}`);
  }

  return (
    <main className={styles.page}>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section className={`${styles.section} ${styles.hero}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={1}>{fitCheckCopy.candidate.title}</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                {getFitCheckEntryText(entryPromptKey) || fitCheckCopy.candidate.subtitle}
              </KinlyText>
            </KinlyStack>
          </section>

          {loadState === "loading" ? (
            <KinlyCard variant="surface">
              <KinlyText variant="bodyMedium">Loading fit check...</KinlyText>
            </KinlyCard>
          ) : null}

          {loadState === "unavailable" || loadState === "error" ? (
            <KinlyCard variant="surface">
              <KinlyStack direction="vertical" gap="s">
                <KinlyHeading level={2}>{fitCheckCopy.candidate.invalidLink}</KinlyHeading>
                <KinlyText variant="bodyMedium">{error ?? fitCheckCopy.candidate.invalidHelp}</KinlyText>
                <KinlyButton variant="outlined" href="/kinly/general">
                  Return to Kinly
                </KinlyButton>
              </KinlyStack>
            </KinlyCard>
          ) : null}

          {loadState === "ready" ? (
            <KinlyCard variant="surface">
              <form onSubmit={handleSubmit}>
                <KinlyStack direction="vertical" gap="l">
                  {!isLocationStep ? (
                    <>
                      {currentStep === 0 ? (
                        <KinlyInput
                          label={fitCheckCopy.candidate.displayNameLabel}
                          hint={fitCheckCopy.candidate.displayNameHint}
                          value={displayName}
                          onChange={(event) => setDisplayName(event.target.value)}
                          placeholder={fitCheckCopy.candidate.displayNamePlaceholder}
                          required
                        />
                      ) : null}

                      <div className={styles.questionGrid}>
                        <KinlyStack direction="vertical" gap="xs">
                          <KinlyHeading level={2}>{activeScenario.prompt}</KinlyHeading>
                          <div className={styles.optionGroup}>
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
                                    onClick={() => setAnswer(activeScenario.id, optionIndex)}
                                  >
                                    {option}
                                  </KinlyButton>
                                </div>
                              );
                            })}
                          </div>
                        </KinlyStack>
                      </div>
                    </>
                  ) : (
                    <KinlyStack direction="vertical" gap="m">
                      <KinlyHeading level={2}>{fitCheckCopy.candidate.locationTitle}</KinlyHeading>
                      <KinlyText variant="bodyMedium" tone="muted">
                        {fitCheckCopy.candidate.locationBody}
                      </KinlyText>
                      <div className={styles.countryPicker}>
                        <KinlyInput
                          label={fitCheckCopy.candidate.countryLabel}
                          hint={fitCheckCopy.candidate.countryHint}
                          value={countryCode}
                          onChange={(event) => handleCountrySelect(event.target.value.trim().toUpperCase())}
                          placeholder="NZ"
                          maxLength={2}
                          required
                        />
                        <div className={styles.countryList} role="listbox" aria-label={fitCheckCopy.candidate.countryLabel}>
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
                          label={fitCheckCopy.candidate.cityLabel}
                          hint={fitCheckCopy.candidate.cityHint}
                          value={cityQuery}
                          onChange={(event) => setCityQuery(event.target.value)}
                          placeholder={fitCheckCopy.candidate.cityPlaceholder}
                          required
                        />
                        {cityOptions.length > 0 ? (
                          <>
                            {priorityCityOptions.length > 0 ? (
                              <div className={styles.cityGroup}>
                                <KinlyText variant="bodyMedium" tone="muted">
                                  {fitCheckCopy.candidate.priorityCitiesTitle}
                                </KinlyText>
                                <div
                                  className={styles.optionGroup}
                                  role="listbox"
                                  aria-label={fitCheckCopy.candidate.priorityCitiesTitle}
                                >
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
                                  {fitCheckCopy.candidate.otherCitiesTitle}
                                </KinlyText>
                                <div
                                  className={styles.optionGroup}
                                  role="listbox"
                                  aria-label={fitCheckCopy.candidate.otherCitiesTitle}
                                >
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
                            {fitCheckCopy.candidate.cityEmpty}
                          </KinlyText>
                        )}
                      </div>
                    </KinlyStack>
                  )}

                  {error ? (
                    <KinlyText variant="bodyMedium" tone="danger">
                      {error}
                    </KinlyText>
                  ) : null}

                  <div className={styles.progressBlock}>
                    <KinlyText variant="bodyMedium" tone="muted">
                      {fitCheckCopy.candidate.progressLabel} {currentStep + 1} of {totalSteps}
                    </KinlyText>
                    <div className={styles.progressBar} aria-hidden="true">
                      <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
                    </div>
                  </div>

                  <div className={styles.navigationRow}>
                    <KinlyButton
                      type="button"
                      variant="outlined"
                      disabled={currentStep === 0 || submitState === "submitting"}
                      onClick={handleBackStep}
                    >
                      {fitCheckCopy.candidate.back}
                    </KinlyButton>
                    {!isLocationStep ? (
                      <KinlyButton
                        type="button"
                        variant="filled"
                        disabled={
                          (!displayName.trim() && currentStep === 0) ||
                          typeof activeAnswer !== "number" ||
                          submitState === "submitting"
                        }
                        onClick={handleNextStep}
                      >
                        {currentStep === FIT_CHECK_SCENARIOS.length - 1
                          ? fitCheckCopy.candidate.continueToLocation
                          : fitCheckCopy.candidate.next}
                      </KinlyButton>
                    ) : (
                      <KinlyButton
                        type="submit"
                        variant="filled"
                        isLoading={submitState === "submitting"}
                        disabled={!canSubmit || submitState === "submitting"}
                      >
                        {fitCheckCopy.candidate.submit}
                      </KinlyButton>
                    )}
                  </div>
                </KinlyStack>
              </form>
            </KinlyCard>
          ) : null}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
