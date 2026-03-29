type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export type FitCheckScenarioId =
  | "fit_cleanliness"
  | "fit_rhythm"
  | "fit_chores"
  | "fit_conflict";

export type FitCheckAnswers = Record<FitCheckScenarioId, 0 | 1 | 2>;
export type PartialFitCheckAnswers = Partial<FitCheckAnswers>;

export type FitCheckScenarioDefinition = {
  id: FitCheckScenarioId;
  prompt: string;
  options: [string, string, string];
};

export type FitCheckDraftSession = {
  draftId: string;
  draftSessionToken: string;
  shareUrl: string;
  shareToken?: string;
  claimUrl: string | null;
  answers: FitCheckAnswers;
  summaryLabels: string[];
};

export type FitCheckErrorCode =
  | "FIT_CHECK_INVALID_INPUTS"
  | "FIT_CHECK_INVALID_TOKEN"
  | "FIT_CHECK_TOKEN_EXPIRED"
  | "FIT_CHECK_TOKEN_REVOKED"
  | "FIT_CHECK_TOKEN_SUBMISSION_LIMIT_REACHED"
  | "FIT_CHECK_DUPLICATE_SUBMISSION"
  | "FIT_CHECK_RATE_LIMITED"
  | "FIT_CHECK_CONFIG_MISSING"
  | "FIT_CHECK_NETWORK_ERROR"
  | "FIT_CHECK_UNKNOWN_ERROR";

export type FitCheckErrorEnvelope = {
  code: FitCheckErrorCode | string;
  message: string;
  details?: unknown;
};

export type FitCheckDraftResponse = {
  ok: true;
  draft_id: string;
  owner_answers: FitCheckAnswers;
  summary: {
    labels: string[];
  };
  share: {
    share_url: string;
    share_token?: string;
    expires_at: string;
  };
  draft_session?: {
    resume_available: boolean;
    draft_session_token?: string;
  };
  claim: {
    claim_required: boolean;
    continue_in_app_url: string | null;
  };
};

export type FitCheckPublicScenario = {
  scenario_id: FitCheckScenarioId;
  prompt_key: string;
  option_keys: string[];
};

export type FitCheckPublicPayload = {
  ok: true;
  available: boolean;
  token_status?: string;
  fit_check_public: {
    entry_prompt_key: string;
    location?: {
      required: boolean;
      suggested_country_code?: string | null;
      country_field_key?: string;
      city_field_key?: string;
      city_lookup_mode?: string;
    };
    scenarios: FitCheckPublicScenario[];
  } | null;
  error?: {
    code: string;
    message: string;
  };
};

export type FitCheckCandidateSubmitResponse = {
  ok: true;
  submission_id: string;
  candidate: {
    display_name: string;
    country_code?: string;
    city_name?: string;
  };
  confirmation: {
    message_key: string;
    result_page?: {
      submission_id: string;
      page_type: "personalized_non_comparative";
      reflection?: {
        show: boolean;
        text_key: string;
      };
    };
    cta: {
      text_key: string;
      target_url: string;
    };
  };
};

export type FitCheckCandidateResultState = {
  submissionId: string;
  displayName: string;
  reflectionKey: string | null;
  ctaUrl: string;
  countryCode: string | null;
  cityName: string | null;
};

export const FIT_CHECK_SCENARIOS: FitCheckScenarioDefinition[] = [
  {
    id: "fit_cleanliness",
    prompt: "When the kitchen is messy, what do you usually do?",
    options: ["Clean it straight away", "Leave it a while, then clean it", "Leave it unless it's mine"],
  },
  {
    id: "fit_rhythm",
    prompt: "What does a normal weekday night look like for you?",
    options: ["Quiet, early night", "Chill - TV or music", "Social or late nights"],
  },
  {
    id: "fit_chores",
    prompt: "How do you prefer shared chores to work?",
    options: ["Roster or system", "Take initiative when needed", "Only handle my own things"],
  },
  {
    id: "fit_conflict",
    prompt: "If something bothers you about a housemate, what do you usually do?",
    options: ["Bring it up early", "Wait a bit, then raise it", "Avoid it unless it's serious"],
  },
];

export type FitCheckMatchResult = {
  scenarioId: FitCheckScenarioId;
  prompt: string;
  ownerLabel: string;
  applicantLabel: string;
  match: "match" | "close" | "clash";
  interviewQuestions: string[];
};

const SCENARIO_INTERVIEW_QUESTIONS: Record<FitCheckScenarioId, string[]> = {
  fit_cleanliness: [
    "What does 'clean enough' look like to you in a shared kitchen?",
    "Would you be happy with a cleaning roster, or do you prefer people just handle it?",
    "If dishes sat in the sink for two days, what would you do first — clean them or say something?",
  ],
  fit_rhythm: [
    "How often do you have friends or a partner stay over during the week?",
    "Are you okay with noise after 10 pm on a weeknight?",
    "Would you want a heads-up before someone has guests over?",
  ],
  fit_chores: [
    "Who takes out the bins and buys shared supplies like toilet paper — is that something you'd split?",
    "Have you shared chores before? What worked and what didn't?",
    "If a housemate wasn't pulling their weight, how would you handle it?",
  ],
  fit_conflict: [
    "Can you think of a time a living situation got awkward — what happened and how did you handle it?",
    "If something small kept bugging you, how long before you'd bring it up?",
    "Would you rather sort things out face to face, or over text?",
  ],
};

export type BonusInterviewQuestion = {
  category: string;
  questions: string[];
};

export const BONUS_INTERVIEW_QUESTIONS: BonusInterviewQuestion[] = [
  {
    category: "Money and bills",
    questions: [
      "Are you comfortable paying bond and rent in advance before moving in?",
      "How do you prefer to split bills — evenly, by usage, or another way?",
      "Have you ever been late on rent or bills? What happened?",
    ],
  },
  {
    category: "Guests and partners",
    questions: [
      "How often would your partner or friends stay over?",
      "Would you check with the house before having someone stay multiple nights?",
      "Have you ever had a situation where guests became an issue in a flat?",
    ],
  },
  {
    category: "Honesty and deal-breakers",
    questions: [
      "Is there anything about how you live that's easier to mention now than discover later?",
      "Do you smoke, vape, or use anything you'd want the house to know about?",
      "Do you have any allergies or dietary needs that could affect shared spaces?",
    ],
  },
  {
    category: "Long-term fit",
    questions: [
      "How long are you planning to stay?",
      "What does a good flatting situation look like for you?",
      "Have you ever left a flat early? What was the reason?",
    ],
  },
];

export function simulateMatchPreview(ownerAnswers: FitCheckAnswers): FitCheckMatchResult[] {
  const simulatedApplicant: FitCheckAnswers = {
    fit_cleanliness: 0,
    fit_rhythm: 0,
    fit_chores: 0,
    fit_conflict: 0,
  };

  return FIT_CHECK_SCENARIOS.map((scenario) => {
    const ownerVal = ownerAnswers[scenario.id];
    const applicantVal = simulatedApplicant[scenario.id];
    const diff = Math.abs(ownerVal - applicantVal);

    return {
      scenarioId: scenario.id,
      prompt: scenario.prompt,
      ownerLabel: scenario.options[ownerVal],
      applicantLabel: scenario.options[applicantVal],
      match: diff === 0 ? "match" : diff === 1 ? "close" : "clash",
      interviewQuestions: SCENARIO_INTERVIEW_QUESTIONS[scenario.id],
    };
  });
}

const OWNER_DRAFT_STORAGE_KEY = "kinly.fit_check.owner_draft";
const CANDIDATE_RESULT_STORAGE_KEY = "kinly.fit_check.candidate_results";
const APP_STORE_URL =
  process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378";
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
  "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly";

function getStorage(type: "local" | "session"): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return type === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

function getSupabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL?.trim(),
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
  };
}

function buildRpcHeaders(anonKey: string, anonymousSessionId?: string): HeadersInit {
  return {
    "Content-Type": "application/json",
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    ...(anonymousSessionId ? { "x-anonymous-session-id": anonymousSessionId } : {}),
  };
}

function normalizeFitCheckError(error: unknown, fallbackCode: FitCheckErrorCode): FitCheckErrorEnvelope {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    typeof (error as { code?: unknown }).code === "string"
  ) {
    const candidate = error as { code: string; message?: unknown; details?: unknown };
    return {
      code: candidate.code,
      message: typeof candidate.message === "string" ? candidate.message : candidate.code,
      details: candidate.details,
    };
  }

  return {
    code: fallbackCode,
    message: fallbackCode,
  };
}

async function callFitCheckRpc<T>(
  rpcName: string,
  body: Record<string, unknown>,
  options?: {
    fetcher?: FetchLike | null;
    anonymousSessionId?: string;
  },
): Promise<T> {
  const { url, anonKey } = getSupabaseConfig();
  if (!url || !anonKey) {
    throw {
      code: "FIT_CHECK_CONFIG_MISSING",
      message: "Supabase config missing",
    };
  }

  const fetcher = options?.fetcher ?? (typeof fetch !== "undefined" ? fetch : null);
  if (!fetcher) {
    throw {
      code: "FIT_CHECK_NETWORK_ERROR",
      message: "Fetch unavailable",
    };
  }

  let response: Response;
  try {
    response = await fetcher(`${url}/rest/v1/rpc/${rpcName}`, {
      method: "POST",
      headers: buildRpcHeaders(anonKey, options?.anonymousSessionId),
      body: JSON.stringify(body),
    });
  } catch {
    throw {
      code: "FIT_CHECK_NETWORK_ERROR",
      message: "Network error",
    };
  }

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw {
      code: (data && (data.code || data.error)) || "FIT_CHECK_UNKNOWN_ERROR",
      message: (data && (data.message || data.error_description)) || "Fit check request failed",
      details: data,
    };
  }

  return data as T;
}

export function isCompleteFitCheckAnswers(value: PartialFitCheckAnswers): value is FitCheckAnswers {
  return FIT_CHECK_SCENARIOS.every((scenario) => {
    const answer = value[scenario.id];
    return answer === 0 || answer === 1 || answer === 2;
  });
}

export function toFitCheckAnswersPayload(value: PartialFitCheckAnswers): FitCheckAnswers | null {
  if (!isCompleteFitCheckAnswers(value)) return null;
  return {
    fit_cleanliness: value.fit_cleanliness,
    fit_rhythm: value.fit_rhythm,
    fit_chores: value.fit_chores,
    fit_conflict: value.fit_conflict,
  };
}

export function getOwnerDraftSession(): FitCheckDraftSession | null {
  const storage = getStorage("local");
  if (!storage) return null;
  const raw = storage.getItem(OWNER_DRAFT_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as FitCheckDraftSession;
    if (!parsed?.draftId || !parsed?.draftSessionToken || !parsed?.shareUrl) return null;
    if (!parsed.answers || !isCompleteFitCheckAnswers(parsed.answers)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveOwnerDraftSession(session: FitCheckDraftSession): void {
  const storage = getStorage("local");
  if (!storage) return;
  try {
    storage.setItem(OWNER_DRAFT_STORAGE_KEY, JSON.stringify(session));
  } catch {
    // ignore
  }
}

export function saveCandidateResult(result: FitCheckCandidateResultState): void {
  const storages = [getStorage("session"), getStorage("local")].filter(Boolean) as Storage[];
  if (storages.length === 0) return;

  for (const storage of storages) {
    try {
      const raw = storage.getItem(CANDIDATE_RESULT_STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as Record<string, FitCheckCandidateResultState>) : {};
      parsed[result.submissionId] = result;
      storage.setItem(CANDIDATE_RESULT_STORAGE_KEY, JSON.stringify(parsed));
    } catch {
      // ignore
    }
  }
}

export function getCandidateResult(submissionId: string): FitCheckCandidateResultState | null {
  for (const type of ["session", "local"] as const) {
    const storage = getStorage(type);
    if (!storage) continue;
    try {
      const raw = storage.getItem(CANDIDATE_RESULT_STORAGE_KEY);
      if (!raw) continue;
      const parsed = JSON.parse(raw) as Record<string, FitCheckCandidateResultState>;
      if (parsed[submissionId]) return parsed[submissionId];
    } catch {
      // ignore
    }
  }

  return null;
}

export function getCandidateReflectionText(key: string | null | undefined): string {
  switch (key) {
    case "fit_check.candidate.reflection.flexible":
      return "You sound most comfortable in homes where people can talk openly and adjust expectations as life changes.";
    case "fit_check.candidate.reflection.structured":
      return "You sound most comfortable in homes with visible expectations and a clearer shared rhythm.";
    default:
      return "Your answers give a quick snapshot of how you usually live day to day.";
  }
}

export function getFitCheckEntryText(key: string | null | undefined): string {
  switch (key) {
    case "fit_check.candidate.entry_prompt":
      return "Answer a few quick questions about how you live day to day.";
    case "fit_check.owner.entry_prompt":
      return "Quick check to spot potential issues before inviting someone to view.";
    default:
      return "Answer a few quick questions about how you live day to day.";
  }
}

export function getFitCheckAppUrls() {
  return {
    ios: APP_STORE_URL,
    android: PLAY_STORE_URL,
  };
}

export function mapFitCheckErrorMessage(code: string | null | undefined): string {
  switch (code) {
    case "FIT_CHECK_TOKEN_EXPIRED":
      return "This link has expired.";
    case "FIT_CHECK_TOKEN_REVOKED":
      return "This link is no longer active.";
    case "FIT_CHECK_DUPLICATE_SUBMISSION":
      return "This device has already submitted for this link.";
    case "FIT_CHECK_TOKEN_SUBMISSION_LIMIT_REACHED":
      return "This link is no longer accepting more submissions.";
    case "FIT_CHECK_RATE_LIMITED":
      return "Too many attempts. Please wait and try again.";
    case "FIT_CHECK_INVALID_INPUTS":
      return "Please complete each answer before continuing.";
    case "FIT_CHECK_CONFIG_MISSING":
      return "Fit Check is not configured yet.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export async function upsertFitCheckDraft(
  locale: string,
  answers: FitCheckAnswers,
  existingDraft?: { draftId: string; draftSessionToken: string } | null,
  fetcher?: FetchLike | null,
): Promise<{ ok: true; data: FitCheckDraftResponse } | { ok: false; error: FitCheckErrorEnvelope }> {
  try {
    const data = await callFitCheckRpc<FitCheckDraftResponse>(
      "fit_check_upsert_draft",
      {
        p_draft_id: existingDraft?.draftId ?? null,
        p_draft_session_token: existingDraft?.draftSessionToken ?? null,
        p_locale: locale,
        p_answers: answers,
      },
      { fetcher },
    );
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error: normalizeFitCheckError(error, "FIT_CHECK_UNKNOWN_ERROR") };
  }
}

export async function fetchFitCheckPublicByToken(
  shareToken: string,
  locale: string,
  fetcher?: FetchLike | null,
): Promise<{ ok: true; data: FitCheckPublicPayload } | { ok: false; error: FitCheckErrorEnvelope }> {
  try {
    const data = await callFitCheckRpc<FitCheckPublicPayload>(
      "fit_check_get_public_by_token",
      {
        p_share_token: shareToken,
        p_locale: locale,
      },
      { fetcher },
    );
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error: normalizeFitCheckError(error, "FIT_CHECK_UNKNOWN_ERROR") };
  }
}

export async function submitFitCheckCandidateByToken(
  shareToken: string,
  locale: string,
  displayName: string,
  countryCode: string,
  cityName: string,
  answers: FitCheckAnswers,
  anonymousSessionId: string,
  fetcher?: FetchLike | null,
): Promise<{ ok: true; data: FitCheckCandidateSubmitResponse } | { ok: false; error: FitCheckErrorEnvelope }> {
  try {
    const data = await callFitCheckRpc<FitCheckCandidateSubmitResponse>(
      "fit_check_submit_candidate_by_token",
      {
        p_share_token: shareToken,
        p_locale: locale,
        p_display_name: displayName.trim(),
        p_country_code: countryCode.trim().toUpperCase(),
        p_city_name: cityName.trim(),
        p_answers: answers,
      },
      {
        fetcher,
        anonymousSessionId,
      },
    );
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error: normalizeFitCheckError(error, "FIT_CHECK_UNKNOWN_ERROR") };
  }
}
