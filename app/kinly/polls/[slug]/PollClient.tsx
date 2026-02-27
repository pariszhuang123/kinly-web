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
  readUtmParams,
} from "../../../../lib/outreachTracking";
import { normalizeShortCode } from "../../../../lib/shortLinkResolver";
import styles from "./PollClient.module.css";

type PollClientProps = {
  slug: string;
  detectedCountryCode?: string | null;
};

type LoadState = "loading" | "ready" | "error";
type PieSlice = {
  option: OutreachPollOption;
  votes: number;
  percent: number;
  color: string;
};

const PIE_COLORS = ["#5EA667", "#2E7D5B", "#9CCB8D", "#5C7F7A", "#86A59C"];

function getOptionVotes(option: OutreachPollOption, results: OutreachPollResults | null): number {
  if (!results) return 0;
  return results.option_votes[option.option_key] ?? 0;
}

function getOptionPercent(option: OutreachPollOption, results: OutreachPollResults | null): number {
  if (!results || results.total_votes <= 0) return 0;
  return Math.round((getOptionVotes(option, results) / results.total_votes) * 100);
}

function getPieSlices(options: OutreachPollOption[], results: OutreachPollResults | null): PieSlice[] {
  return options.map((option, index) => ({
    option,
    votes: getOptionVotes(option, results),
    percent: getOptionPercent(option, results),
    color: PIE_COLORS[index % PIE_COLORS.length],
  }));
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

  async function handleVoteSubmit(optionKey: string) {
    if (!optionKey) return;

    setSelectedOptionKey(optionKey);

    if (!sessionId || !shortCode) {
      const baselineResults = await fetchOutreachPollResults(pageKey);
      if (baselineResults) {
        setResults(baselineResults);
      }
      setHasSubmittedVote(true);
      return;
    }

    setIsSubmittingVote(true);
    setVoteError(null);

    const result = await submitOutreachPollVote({
      shortCode,
      optionKey,
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

  const totalVotes = results?.total_votes ?? 0;
  const pieSlices = useMemo(() => getPieSlices(options, results), [options, results]);
  const pieRadius = 56;
  const pieCircumference = 2 * Math.PI * pieRadius;
  let pieOffset = 0;

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
                <KinlyText variant="bodyMedium" tone="muted">
                  {totalVotes} UC students voted
                </KinlyText>
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
                          disabled={isSubmittingVote}
                          isLoading={isSubmittingVote && selectedOptionKey === option.option_key}
                          onClick={() => void handleVoteSubmit(option.option_key)}
                        >
                          {option.label}
                        </KinlyButton>
                      </div>
                    ))}
                  </div>
                ) : null}

                {voteError ? (
                  <KinlyText variant="bodySmall" tone="danger">
                    {voteError}
                  </KinlyText>
                ) : null}

                {hasSubmittedVote ? (
                  <KinlyStack direction="vertical" gap="m">
                    <KinlyHeading level={3}>Results</KinlyHeading>
                    <KinlyText variant="bodyMedium">
                      {totalVotes} UC students voted
                    </KinlyText>
                    <div className={styles.resultsGrid}>
                      <div className={styles.pieWrap} aria-label="Poll results pie chart">
                        <svg viewBox="0 0 140 140" className={styles.pieChart} role="img">
                          <circle cx="70" cy="70" r={pieRadius} fill="none" stroke="#E5EAE6" strokeWidth="24" />
                          {totalVotes > 0
                            ? pieSlices.map((slice) => {
                                const segment = (slice.votes / totalVotes) * pieCircumference;
                                const dashArray = `${segment} ${Math.max(pieCircumference - segment, 0)}`;
                                const currentOffset = pieOffset;
                                pieOffset += segment;
                                return (
                                  <circle
                                    key={slice.option.option_key}
                                    cx="70"
                                    cy="70"
                                    r={pieRadius}
                                    fill="none"
                                    stroke={slice.color}
                                    strokeWidth="24"
                                    strokeLinecap="butt"
                                    strokeDasharray={dashArray}
                                    strokeDashoffset={-currentOffset}
                                    transform="rotate(-90 70 70)"
                                  />
                                );
                              })
                            : null}
                        </svg>
                      </div>
                      <div className={styles.legendList}>
                        {pieSlices.map((slice) => (
                          <div key={slice.option.option_key} className={styles.legendRow}>
                            <span className={styles.legendSwatch} style={{ backgroundColor: slice.color }} />
                            <KinlyText variant="bodyMedium">{slice.option.label}</KinlyText>
                            <KinlyText variant="labelMedium" tone="muted">
                              {slice.percent}% ({slice.votes})
                            </KinlyText>
                          </div>
                        ))}
                      </div>
                    </div>
                    <KinlyText variant="bodyMedium" tone="muted">
                      Flatmates often have different expectations on daily basics. Check this out to align
                      expectations in your flat.
                    </KinlyText>
                    <KinlyButton
                      variant="filled"
                      href="https://go.makinglifeeasie.com/kinly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check this out
                    </KinlyButton>
                  </KinlyStack>
                ) : null}
              </KinlyStack>
            </KinlyCard>
          ) : null}

        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
