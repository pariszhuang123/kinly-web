"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../../components";
import {
  derivePollPageKeyFromSlug,
  fetchOutreachPoll,
  fetchOutreachPollResults,
  OutreachPollDefinition,
  OutreachPollOption,
  OutreachPollResults,
  submitOutreachPollVote,
} from "../../../../lib/outreachPoll";
import {
  buildClientEventId,
  detectUiLocale,
  ensureSessionId,
  hasEventBeenSent,
  logOutreachEvent,
  markEventSent,
  normalizeCountryCode,
  OutreachStore,
  readUtmParams,
} from "../../../../lib/outreachTracking";
import { isSupportedRegion } from "../../../../lib/regionSupport";
import { normalizeShortCode } from "../../../../lib/shortLinkResolver";
import { resolveStoreBadges } from "../../../../lib/storeBadges";
import styles from "./PollClient.module.css";

type PollClientProps = {
  slug: string;
  detectedCountryCode?: string | null;
};

type LoadState = "loading" | "ready" | "error";

const APP_STORE_URL =
  (process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378") as string;
const PLAY_STORE_URL =
  (process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
    "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly") as string;

function getOptionVotes(option: OutreachPollOption, results: OutreachPollResults | null): number {
  if (!results) return 0;
  return results.option_votes[option.option_key] ?? 0;
}

function getOptionPercent(option: OutreachPollOption, results: OutreachPollResults | null): number {
  if (!results || results.total_votes <= 0) return 0;
  return Math.round((getOptionVotes(option, results) / results.total_votes) * 100);
}

function parseVoteError(errorCode: string): string {
  if (errorCode === "invalid_input") return "Choose an option before submitting.";
  if (errorCode === "vote_rejected") return "Vote could not be recorded. Please try again.";
  if (errorCode === "network_error") return "Network issue while submitting your vote.";
  if (errorCode === "config_missing") return "Poll service is temporarily unavailable.";
  return "Vote could not be recorded right now.";
}

export default function PollClient({ slug, detectedCountryCode = null }: PollClientProps) {
  const searchParams = useSearchParams();

  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [poll, setPoll] = useState<OutreachPollDefinition | null>(null);
  const [options, setOptions] = useState<OutreachPollOption[]>([]);
  const [results, setResults] = useState<OutreachPollResults | null>(null);
  const [selectedOptionKey, setSelectedOptionKey] = useState<string>("");
  const [voteError, setVoteError] = useState<string | null>(null);
  const [isSubmittingVote, setIsSubmittingVote] = useState(false);
  const [hasSubmittedVote, setHasSubmittedVote] = useState(false);

  const pageKey = useMemo(() => derivePollPageKeyFromSlug(slug), [slug]);
  const utmParams = useMemo(() => readUtmParams(searchParams), [searchParams]);
  const shortCode = useMemo(
    () => normalizeShortCode(searchParams.get("k_sc") ?? undefined),
    [searchParams],
  );

  const sessionId = useMemo(() => ensureSessionId(), []);
  const uiLocale = useMemo(() => detectUiLocale(), []);
  const normalizedCountry = useMemo(
    () => normalizeCountryCode(detectedCountryCode),
    [detectedCountryCode],
  );
  const suppressStoreCtas = useMemo(
    () => (normalizedCountry ? !isSupportedRegion(normalizedCountry) : false),
    [normalizedCountry],
  );
  const lang = useMemo(() => uiLocale?.split("-")[0]?.toLowerCase() ?? null, [uiLocale]);
  const storeBadges = useMemo(() => resolveStoreBadges(lang), [lang]);

  useEffect(() => {
    let cancelled = false;

    async function loadPoll() {
      setLoadState("loading");
      const pollResult = await fetchOutreachPoll(pageKey);
      if (cancelled) return;
      if (!pollResult.ok) {
        setLoadState("error");
        return;
      }

      setPoll(pollResult.poll);
      setOptions(pollResult.options);
      setLoadState("ready");

      const baselineResults = await fetchOutreachPollResults(pageKey);
      if (cancelled) return;
      if (baselineResults) {
        setResults(baselineResults);
      }
    }

    void loadPoll();
    return () => {
      cancelled = true;
    };
  }, [pageKey]);

  useEffect(() => {
    if (!sessionId) return;
    if (hasEventBeenSent("poll_page_view", pageKey, sessionId)) return;

    markEventSent("poll_page_view", pageKey, sessionId);
    void logOutreachEvent({
      event: "poll_page_view",
      page_key: pageKey,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry || null,
      ui_locale: uiLocale,
    });
  }, [
    normalizedCountry,
    pageKey,
    sessionId,
    uiLocale,
    utmParams.utm_campaign,
    utmParams.utm_medium,
    utmParams.utm_source,
  ]);

  useEffect(() => {
    if (!sessionId || !hasSubmittedVote) return;
    if (hasEventBeenSent("poll_results_view", pageKey, sessionId)) return;

    markEventSent("poll_results_view", pageKey, sessionId);
    void logOutreachEvent({
      event: "poll_results_view",
      page_key: pageKey,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry || null,
      ui_locale: uiLocale,
    });
  }, [
    hasSubmittedVote,
    normalizedCountry,
    pageKey,
    sessionId,
    uiLocale,
    utmParams.utm_campaign,
    utmParams.utm_medium,
    utmParams.utm_source,
  ]);

  async function handleVoteSubmit() {
    if (!sessionId || !shortCode || !selectedOptionKey) {
      setVoteError("Scan the official QR link to vote.");
      return;
    }

    setIsSubmittingVote(true);
    setVoteError(null);

    const result = await submitOutreachPollVote({
      shortCode,
      optionKey: selectedOptionKey,
      sessionId,
      store: "web",
      clientVoteId: buildClientEventId(),
      country: normalizedCountry || null,
      uiLocale,
    });

    if (!result.ok) {
      setVoteError(parseVoteError(result.error));
      setIsSubmittingVote(false);
      return;
    }

    let nextResults: OutreachPollResults | null = null;
    if (result.total_votes !== null) {
      nextResults = {
        total_votes: result.total_votes,
        option_votes: result.option_votes,
      };
    }

    if (!nextResults) {
      nextResults = await fetchOutreachPollResults(pageKey);
    }

    if (nextResults) {
      setResults(nextResults);
    }

    setHasSubmittedVote(true);
    setIsSubmittingVote(false);
  }

  function handleCtaClick(store: OutreachStore) {
    if (!sessionId) return;

    void logOutreachEvent({
      event: "cta_click",
      page_key: pageKey,
      utm_campaign: utmParams.utm_campaign,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      session_id: sessionId,
      country: normalizedCountry || null,
      ui_locale: uiLocale,
      store,
      client_event_id: buildClientEventId(),
    });
  }

  const totalVotes = results?.total_votes ?? 0;

  return (
    <main className={styles.page}>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <KinlyStack direction="vertical" gap="xs">
            <KinlyHeading level={1}>{poll?.title ?? "UC Poll"}</KinlyHeading>
            <KinlyText variant="bodyMedium" tone="muted">
              Quick pulse check for shared-living expectations.
            </KinlyText>
          </KinlyStack>

          {loadState === "loading" ? (
            <KinlyCard variant="surface">
              <KinlyText variant="bodyMedium">Loading poll...</KinlyText>
            </KinlyCard>
          ) : null}

          {loadState === "error" ? (
            <KinlyCard variant="surface">
              <KinlyStack direction="vertical" gap="s">
                <KinlyHeading level={2}>Poll unavailable</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  This poll is not available right now. You can still download Kinly below.
                </KinlyText>
              </KinlyStack>
            </KinlyCard>
          ) : null}

          {loadState === "ready" && poll ? (
            <KinlyCard variant="surfaceContainer">
              <KinlyStack direction="vertical" gap="m">
                <KinlyHeading level={2}>{poll.question}</KinlyHeading>
                {poll.description ? (
                  <KinlyText variant="bodyMedium" tone="muted">
                    {poll.description}
                  </KinlyText>
                ) : null}

                {!hasSubmittedVote ? (
                  <div className={styles.optionList}>
                    {options.map((option) => (
                      <div key={option.option_key}>
                        <KinlyButton
                          variant={selectedOptionKey === option.option_key ? "filled" : "outlined"}
                          onClick={() => setSelectedOptionKey(option.option_key)}
                        >
                          {option.label}
                        </KinlyButton>
                      </div>
                    ))}
                  </div>
                ) : null}

                {!shortCode ? (
                  <KinlyText variant="bodySmall" tone="warning">
                    Voting is available only from official UC QR links.
                  </KinlyText>
                ) : null}

                {voteError ? (
                  <KinlyText variant="bodySmall" tone="danger">
                    {voteError}
                  </KinlyText>
                ) : null}

                {!hasSubmittedVote ? (
                  <KinlyButton
                    variant="filled"
                    disabled={!selectedOptionKey || isSubmittingVote || !shortCode}
                    isLoading={isSubmittingVote}
                    onClick={handleVoteSubmit}
                  >
                    Submit vote
                  </KinlyButton>
                ) : null}

                {hasSubmittedVote ? (
                  <KinlyStack direction="vertical" gap="m">
                    <KinlyHeading level={3}>Results</KinlyHeading>
                    <KinlyText variant="bodyMedium">
                      {totalVotes} UC students voted
                    </KinlyText>
                    <div className={styles.resultList}>
                      {options.map((option) => {
                        const percent = getOptionPercent(option, results);
                        const votes = getOptionVotes(option, results);
                        return (
                          <div key={option.option_key} className={styles.resultRow}>
                            <div className={styles.resultHeader}>
                              <KinlyText variant="bodyMedium">{option.label}</KinlyText>
                              <KinlyText variant="labelMedium" tone="muted">
                                {percent}% ({votes})
                              </KinlyText>
                            </div>
                            <div className={styles.barTrack}>
                              <div className={styles.barFill} style={{ width: `${percent}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </KinlyStack>
                ) : null}
              </KinlyStack>
            </KinlyCard>
          ) : null}

          {!suppressStoreCtas ? (
            <KinlyCard variant="surfaceContainerHigh">
              <KinlyStack direction="vertical" gap="s">
                <KinlyHeading level={2}>Get Kinly</KinlyHeading>
                <KinlyText variant="bodyMedium" tone="muted">
                  Continue in the app to align expectations with your flat.
                </KinlyText>
                <div className={styles.storeCtas}>
                  <a
                    className={styles.storeBadgeLink}
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    onClick={() => handleCtaClick("ios_app_store")}
                  >
                    <img src={storeBadges.apple} alt="Download on the App Store" className={styles.storeBadge} />
                  </a>
                  <a
                    className={styles.storeBadgeLink}
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    onClick={() => handleCtaClick("google_play")}
                  >
                    <img src={storeBadges.play} alt="Get it on Google Play" className={styles.storeBadge} />
                  </a>
                </div>
              </KinlyStack>
            </KinlyCard>
          ) : null}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
