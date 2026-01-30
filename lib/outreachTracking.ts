type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem?(key: string): void;
};

type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export type OutreachEventType = "page_view" | "cta_click";

export type OutreachStore = "ios_app_store" | "google_play" | "web" | "unknown";

export type OutreachEventPayload = {
  event: OutreachEventType;
  page_key: string;
  utm_campaign: string;
  utm_medium: string;
  utm_source: string;
  session_id: string;
  store?: OutreachStore | null;
  country?: string | null;
  ui_locale?: string | null;
  client_event_id?: string | null;
};

const APP_KEY = "kinly-web";
const SESSION_STORAGE_KEY = "kinly.outreach.session";
const PAGE_VIEW_SENT_KEY_PREFIX = "kinly.outreach.page_view.sent";
const SESSION_ID_REGEX = /^anon_[A-Za-z0-9_-]{16,32}$/;
const SESSION_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

type StoredSession = {
  id: string;
  createdAt: number;
};

function getLocalStorage(): StorageLike | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function getSessionStorage(): StorageLike | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function randomToken(tokenLength = 28): string {
  const buffer = new Uint8Array(Math.ceil(tokenLength / 2));
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(buffer);
  } else {
    for (let i = 0; i < buffer.length; i += 1) {
      buffer[i] = Math.floor(Math.random() * 256);
    }
  }

  return Array.from(buffer, (byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, tokenLength);
}

export function generateSessionId(tokenLength = 28): string {
  const token = randomToken(Math.min(Math.max(tokenLength, 16), 32));
  return `anon_${token}`;
}

function isValidSessionId(value: string | null | undefined): value is string {
  return Boolean(value && SESSION_ID_REGEX.test(value));
}

function parseStoredSession(raw: string | null): StoredSession | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredSession;
    if (!parsed || typeof parsed !== "object") return null;
    if (!isValidSessionId(parsed.id)) return null;
    if (typeof parsed.createdAt !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

function shouldRotateSession(createdAt: number, nowMs: number): boolean {
  return nowMs - createdAt >= SESSION_MAX_AGE_MS;
}

export function ensureSessionId(options?: {
  storage?: StorageLike | null;
  now?: () => number;
  tokenLength?: number;
}): string | null {
  const storage = options?.storage ?? getLocalStorage();
  const now = options?.now ?? Date.now;
  const tokenLength = options?.tokenLength;

  if (!storage) return null;

  const stored = parseStoredSession(storage.getItem(SESSION_STORAGE_KEY));
  const nowMs = now();

  if (stored && !shouldRotateSession(stored.createdAt, nowMs)) {
    return stored.id;
  }

  const sessionId = generateSessionId(tokenLength);
  const payload: StoredSession = { id: sessionId, createdAt: nowMs };

  try {
    storage.setItem(SESSION_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore write errors (private mode, quota, etc.)
  }

  return sessionId;
}

export function hasPageViewBeenSent(
  pageKey: string,
  sessionId: string,
  storage: StorageLike | null = getSessionStorage(),
): boolean {
  if (!storage) return false;
  const key = `${PAGE_VIEW_SENT_KEY_PREFIX}.${pageKey}.${sessionId}`;
  return storage.getItem(key) === "1";
}

export function markPageViewSent(
  pageKey: string,
  sessionId: string,
  storage: StorageLike | null = getSessionStorage(),
): void {
  if (!storage) return;
  const key = `${PAGE_VIEW_SENT_KEY_PREFIX}.${pageKey}.${sessionId}`;
  try {
    storage.setItem(key, "1");
  } catch {
    // best effort
  }
}

export type UtmParams = {
  utm_campaign: string;
  utm_medium: string;
  utm_source: string;
};

function coerceUtm(value: string | null | undefined, shouldLowercase = false): string {
  const trimmed = (value ?? "").trim();
  if (!trimmed) return "unknown";
  return shouldLowercase ? trimmed.toLowerCase() : trimmed;
}

export function readUtmParams(params: URLSearchParams | null | undefined): UtmParams {
  if (!params) {
    return {
      utm_campaign: "unknown",
      utm_medium: "unknown",
      utm_source: "unknown",
    };
  }

  return {
    utm_campaign: coerceUtm(params.get("utm_campaign")),
    utm_medium: coerceUtm(params.get("utm_medium"), true),
    utm_source: coerceUtm(params.get("utm_source"), true),
  };
}

export function normalizeCountryCode(value: string | null | undefined): string | null {
  const trimmed = (value ?? "").trim();
  if (trimmed.length !== 2) return null;
  const upper = trimmed.toUpperCase();
  return /^[A-Z]{2}$/.test(upper) ? upper : null;
}

export function normalizeLocaleTag(value: string | null | undefined): string | null {
  const trimmed = (value ?? "").trim();
  if (!trimmed) return null;
  if (trimmed.length < 2 || trimmed.length > 35) return null;
  if (/\s/.test(trimmed)) return null;

  const hyphenated = trimmed.replace(/_/g, "-");

  if (!/^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(hyphenated)) return null;

  const parts = hyphenated.split("-").filter(Boolean);
  const [language, maybeScript, maybeRegion, ...rest] = parts;

  const normalizedLanguage = language.toLowerCase();
  const normalizedScript =
    maybeScript && maybeScript.length === 4
      ? maybeScript[0].toUpperCase() + maybeScript.slice(1).toLowerCase()
      : undefined;
  const normalizedRegion =
    maybeScript && maybeScript.length === 2
      ? maybeScript.toUpperCase()
      : maybeRegion && maybeRegion.length === 2
        ? maybeRegion.toUpperCase()
        : undefined;
  const remainder = rest.length ? rest.join("-") : undefined;

  return [normalizedLanguage, normalizedScript, normalizedRegion, remainder]
    .filter(Boolean)
    .join("-");
}

export function detectUiLocale(): string | null {
  if (typeof window === "undefined") return null;
  const rawLocale =
    (Array.isArray(window.navigator.languages) && window.navigator.languages[0]) ||
    window.navigator.language ||
    "";
  return normalizeLocaleTag(rawLocale);
}

export function buildClientEventId(): string | null {
  if (typeof crypto === "undefined") {
    return null;
  }
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return null;
}

export type LogResult =
  | { ok: true }
  | { ok: false; error: "config_missing" | "fetch_unavailable" | "network_error"; status?: number };

export async function logOutreachEvent(
  payload: OutreachEventPayload,
  fetcher: FetchLike | null | undefined = typeof fetch !== "undefined" ? fetch : null,
): Promise<LogResult> {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  const isDev = process.env.NODE_ENV !== "production";

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    if (isDev) console.debug("[outreach] skip (config_missing)", payload);
    return { ok: false, error: "config_missing" };
  }

  if (!fetcher) {
    if (isDev) console.debug("[outreach] skip (fetch_unavailable)", payload);
    return { ok: false, error: "fetch_unavailable" };
  }

  const body = {
    p_event: payload.event,
    p_app_key: APP_KEY,
    p_page_key: payload.page_key,
    p_utm_campaign: payload.utm_campaign || "unknown",
    p_utm_source: payload.utm_source || "unknown",
    p_utm_medium: payload.utm_medium || "unknown",
    p_session_id: payload.session_id,
    p_store: payload.store ?? null,
    p_country: payload.country ?? null,
    p_ui_locale: payload.ui_locale ?? null,
    p_client_event_id: payload.client_event_id ?? null,
  };

  try {
    const response = await fetcher(`${SUPABASE_URL}/rest/v1/rpc/outreach_log_event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(body),
      keepalive: true,
    });

    if (!response.ok) {
      if (isDev) console.debug("[outreach] network_error", { status: response.status, payload });
      return { ok: false, error: "network_error", status: response.status };
    }

    if (isDev) console.debug("[outreach] ok", payload);
    return { ok: true };
  } catch (err) {
    if (isDev) console.debug("[outreach] network_error", { error: err, payload });
    return { ok: false, error: "network_error" };
  }
}
