import { normalizeShortCode } from "./shortLinkResolver";
import { OutreachStore } from "./outreachTracking";

type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

const APP_KEY = "kinly-web";
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const FALLBACK_PRIMARY_MESSAGE =
  'Every flat has its own "how things get done." Kinly helps make it clearer and calmer.';
const FALLBACK_CTA_LABEL = "Set your flat up in 5 minutes";

export type OutreachPollDefinition = {
  id: string | null;
  page_key: string;
  title: string;
  question: string;
  description: string | null;
};

export type OutreachPollOption = {
  id: string | null;
  option_key: string;
  label: string;
  position: number;
};

export type OutreachPollResults = {
  total_votes: number;
  option_votes: Record<string, number>;
};

export type PollResultResolutionTier = "EXACT" | "SOURCE_ONLY" | "GLOBAL_DEFAULT" | "FALLBACK";

export type OutreachPollResultMessage = {
  message_id: string | null;
  resolution_tier: PollResultResolutionTier;
  primary_message: string;
  cta_label: string;
};

export type OutreachPollGetResult =
  | {
      ok: true;
      poll: OutreachPollDefinition;
      options: OutreachPollOption[];
    }
  | { ok: false; error: "config_missing" | "network_error" | "poll_not_found" | "invalid_response" };

export type OutreachPollVoteResult =
  | {
      ok: true;
      total_votes: number | null;
      option_votes: Record<string, number>;
    }
  | {
      ok: false;
      error:
        | "config_missing"
        | "network_error"
        | "invalid_input"
        | "invalid_response"
        | "vote_rejected";
    };

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function parseNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return { supabaseUrl, supabaseAnonKey };
}

function buildHeaders(config: { supabaseAnonKey: string }): HeadersInit {
  return {
    "Content-Type": "application/json",
    apikey: config.supabaseAnonKey,
    Authorization: `Bearer ${config.supabaseAnonKey}`,
  };
}

function toOptions(value: unknown): OutreachPollOption[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((entry) => {
      if (!isPlainObject(entry)) return null;
      const id =
        typeof entry.id === "string" && UUID_REGEX.test(entry.id.trim()) ? entry.id.trim().toLowerCase() : null;
      const optionKey = typeof entry.option_key === "string" ? entry.option_key.trim() : "";
      const label = typeof entry.label === "string" ? entry.label.trim() : "";
      const position = parseNumber(entry.position) ?? 0;
      if (!optionKey || !label) return null;
      return {
        id,
        option_key: optionKey,
        label,
        position,
      };
    })
    .filter((entry): entry is OutreachPollOption => Boolean(entry))
    .sort((a, b) => a.position - b.position || a.option_key.localeCompare(b.option_key));
}

function parsePollDefinition(value: unknown): OutreachPollDefinition | null {
  if (!isPlainObject(value)) return null;
  const id =
    typeof value.id === "string" && UUID_REGEX.test(value.id.trim()) ? value.id.trim().toLowerCase() : null;
  const pageKey = typeof value.page_key === "string" ? value.page_key.trim() : "";
  const title = typeof value.title === "string" ? value.title.trim() : "";
  const question = typeof value.question === "string" ? value.question.trim() : "";
  const description =
    typeof value.description === "string" ? value.description.trim() || null : null;
  if (!pageKey || !title || !question) return null;
  return {
    id,
    page_key: pageKey,
    title,
    question,
    description,
  };
}

export function derivePollPageKeyFromSlug(slug: string): string {
  const normalized = slug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
  if (!normalized) return "poll_unknown";
  if (normalized.startsWith("poll_")) return normalized;
  return `poll_${normalized}`;
}

export async function fetchOutreachPoll(
  pageKey: string,
  fetcher: FetchLike | null | undefined = typeof fetch !== "undefined" ? fetch : null,
): Promise<OutreachPollGetResult> {
  const config = getSupabaseConfig();
  if (!config) return { ok: false, error: "config_missing" };
  if (!fetcher) return { ok: false, error: "network_error" };

  try {
    const response = await fetcher(`${config.supabaseUrl}/rest/v1/rpc/outreach_poll_get_v1`, {
      method: "POST",
      headers: buildHeaders(config),
      body: JSON.stringify({
        p_app_key: APP_KEY,
        p_page_key: pageKey,
      }),
      keepalive: true,
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      if (isPlainObject(payload) && String(payload.code || "").includes("poll_not_found")) {
        return { ok: false, error: "poll_not_found" };
      }
      return { ok: false, error: "network_error" };
    }

    const body = Array.isArray(payload) ? payload[0] : payload;
    if (!isPlainObject(body)) return { ok: false, error: "invalid_response" };
    if (body.ok === false) {
      const errorCode = typeof body.error === "string" ? body.error : "invalid_response";
      if (errorCode === "poll_not_found") return { ok: false, error: "poll_not_found" };
      return { ok: false, error: "network_error" };
    }

    const poll = parsePollDefinition(body.poll);
    const options = toOptions(body.options);
    if (!poll || options.length === 0) return { ok: false, error: "invalid_response" };

    return {
      ok: true,
      poll,
      options,
    };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

function parseVoteResult(value: unknown): { totalVotes: number | null; optionVotes: Record<string, number> } | null {
  const payload = Array.isArray(value) ? value[0] : value;
  if (!isPlainObject(payload)) return null;
  if (payload.ok === false) return null;

  const resultsSource = isPlainObject(payload.results) ? payload.results : payload;
  const totalVotes = parseNumber(resultsSource.total_votes);
  const optionVotes: Record<string, number> = {};

  if (Array.isArray(resultsSource.option_counts)) {
    for (const entry of resultsSource.option_counts) {
      if (!isPlainObject(entry)) continue;
      const optionKey = typeof entry.option_key === "string" ? entry.option_key.trim() : "";
      const votes = parseNumber(entry.votes ?? entry.vote_count);
      if (!optionKey || votes === null) continue;
      optionVotes[optionKey] = votes;
    }
  } else if (isPlainObject(resultsSource.option_votes)) {
    for (const [key, raw] of Object.entries(resultsSource.option_votes)) {
      const votes = parseNumber(raw);
      if (!key || votes === null) continue;
      optionVotes[key] = votes;
    }
  }

  return {
    totalVotes,
    optionVotes,
  };
}

export async function submitOutreachPollVote(
  params: {
    shortCode: string;
    optionKey: string;
    sessionId: string;
    store?: OutreachStore | null;
    clientVoteId?: string | null;
    country?: string | null;
    uiLocale?: string | null;
  },
  fetcher: FetchLike | null | undefined = typeof fetch !== "undefined" ? fetch : null,
): Promise<OutreachPollVoteResult> {
  const config = getSupabaseConfig();
  if (!config) return { ok: false, error: "config_missing" };
  if (!fetcher) return { ok: false, error: "network_error" };

  const shortCode = normalizeShortCode(params.shortCode);
  const optionKey = params.optionKey.trim();
  if (!shortCode || !optionKey) return { ok: false, error: "invalid_input" };

  try {
    const response = await fetcher(`${config.supabaseUrl}/rest/v1/rpc/outreach_poll_vote_submit_v1`, {
      method: "POST",
      headers: buildHeaders(config),
      body: JSON.stringify({
        p_short_code: shortCode,
        p_option_key: optionKey,
        p_session_id: params.sessionId,
        p_store: params.store ?? "web",
        p_client_vote_id: params.clientVoteId ?? null,
        p_country: params.country ?? null,
        p_ui_locale: params.uiLocale ?? null,
      }),
      keepalive: true,
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok) return { ok: false, error: "vote_rejected" };

    const parsed = parseVoteResult(payload);
    if (!parsed) return { ok: false, error: "invalid_response" };

    return {
      ok: true,
      total_votes: parsed.totalVotes,
      option_votes: parsed.optionVotes,
    };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

export async function fetchOutreachPollResults(
  pageKey: string,
  fetcher: FetchLike | null | undefined = typeof fetch !== "undefined" ? fetch : null,
): Promise<OutreachPollResults | null> {
  const config = getSupabaseConfig();
  if (!config || !fetcher) return null;

  const query = new URLSearchParams({
    select: "option_key,vote_count,total_votes",
    page_key: `eq.${pageKey}`,
    order: "option_key.asc",
  });

  try {
    const response = await fetcher(
      `${config.supabaseUrl}/rest/v1/outreach_poll_results_uc_v1?${query.toString()}`,
      {
        method: "GET",
        headers: {
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
        },
        cache: "no-store",
      },
    );
    if (!response.ok) return null;

    const payload = await response.json().catch(() => null);
    if (!Array.isArray(payload) || payload.length === 0) return null;

    let totalVotes = 0;
    const optionVotes: Record<string, number> = {};
    for (const row of payload) {
      if (!isPlainObject(row)) continue;
      const optionKey = typeof row.option_key === "string" ? row.option_key.trim() : "";
      const voteCount = parseNumber(row.vote_count) ?? 0;
      const rowTotalVotes = parseNumber(row.total_votes);
      if (!optionKey) continue;
      optionVotes[optionKey] = voteCount;
      if (rowTotalVotes !== null) totalVotes = Math.max(totalVotes, rowTotalVotes);
    }

    if (Object.keys(optionVotes).length === 0) return null;
    if (totalVotes <= 0) {
      totalVotes = Object.values(optionVotes).reduce((sum, value) => sum + value, 0);
    }

    return {
      total_votes: totalVotes,
      option_votes: optionVotes,
    };
  } catch {
    return null;
  }
}

type PollResultMessageRow = {
  id: string | null;
  source_id_resolved: string | null;
  utm_campaign: string | null;
  primary_message: string;
  cta_label: string;
};

function parseNullableText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed || null;
}

function parsePollResultMessageRow(value: unknown): PollResultMessageRow | null {
  if (!isPlainObject(value)) return null;

  const primaryMessage = typeof value.primary_message === "string" ? value.primary_message.trim() : "";
  const ctaLabel = typeof value.cta_label === "string" ? value.cta_label.trim() : "";
  if (!primaryMessage || !ctaLabel) return null;

  const id =
    typeof value.id === "string" && UUID_REGEX.test(value.id.trim()) ? value.id.trim().toLowerCase() : null;

  return {
    id,
    source_id_resolved: parseNullableText(value.source_id_resolved),
    utm_campaign: parseNullableText(value.utm_campaign),
    primary_message: primaryMessage,
    cta_label: ctaLabel,
  };
}

function fallbackPollResultMessage(): OutreachPollResultMessage {
  return {
    message_id: null,
    resolution_tier: "FALLBACK",
    primary_message: FALLBACK_PRIMARY_MESSAGE,
    cta_label: FALLBACK_CTA_LABEL,
  };
}

function normalizeContextValue(value: string | null | undefined): string | null {
  const trimmed = (value ?? "").trim();
  return trimmed || null;
}

export async function fetchOutreachPollResultMessage(
  params: {
    pollId: string | null | undefined;
    optionId: string | null | undefined;
    sourceIdResolved: string | null | undefined;
    utmCampaign: string | null | undefined;
  },
  fetcher: FetchLike | null | undefined = typeof fetch !== "undefined" ? fetch : null,
): Promise<OutreachPollResultMessage> {
  const config = getSupabaseConfig();
  if (!config || !fetcher) return fallbackPollResultMessage();

  const pollId = normalizeContextValue(params.pollId);
  const optionId = normalizeContextValue(params.optionId);
  if (!pollId || !optionId) return fallbackPollResultMessage();

  const sourceIdResolved = normalizeContextValue(params.sourceIdResolved);
  const utmCampaign = normalizeContextValue(params.utmCampaign);

  const query = new URLSearchParams({
    select: "id,source_id_resolved,utm_campaign,primary_message,cta_label",
    poll_id: `eq.${pollId}`,
    option_id: `eq.${optionId}`,
    active: "eq.true",
    limit: "20",
  });

  try {
    const response = await fetcher(
      `${config.supabaseUrl}/rest/v1/outreach_poll_result_messages?${query.toString()}`,
      {
        method: "GET",
        headers: {
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
        },
        cache: "no-store",
      },
    );
    if (!response.ok) return fallbackPollResultMessage();

    const payload = await response.json().catch(() => null);
    if (!Array.isArray(payload) || payload.length === 0) return fallbackPollResultMessage();

    const rows = payload
      .map(parsePollResultMessageRow)
      .filter((row): row is PollResultMessageRow => Boolean(row));
    if (rows.length === 0) return fallbackPollResultMessage();

    const exact = rows.find(
      (row) => row.source_id_resolved === sourceIdResolved && row.utm_campaign === utmCampaign,
    );
    if (exact) {
      return {
        message_id: exact.id,
        resolution_tier: "EXACT",
        primary_message: exact.primary_message,
        cta_label: exact.cta_label,
      };
    }

    const sourceOnly = rows.find(
      (row) => row.source_id_resolved === sourceIdResolved && row.utm_campaign === null,
    );
    if (sourceOnly) {
      return {
        message_id: sourceOnly.id,
        resolution_tier: "SOURCE_ONLY",
        primary_message: sourceOnly.primary_message,
        cta_label: sourceOnly.cta_label,
      };
    }

    const globalDefault = rows.find(
      (row) => row.source_id_resolved === null && row.utm_campaign === null,
    );
    if (globalDefault) {
      return {
        message_id: globalDefault.id,
        resolution_tier: "GLOBAL_DEFAULT",
        primary_message: globalDefault.primary_message,
        cta_label: globalDefault.cta_label,
      };
    }

    return fallbackPollResultMessage();
  } catch {
    return fallbackPollResultMessage();
  }
}
