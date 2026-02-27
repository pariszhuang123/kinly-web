export const SHORT_CODE_REGEX = /^[a-z0-9_-]{4,24}$/i;
export const PRODUCTION_HOST = "https://go.makinglifeeasie.com";
export const STAGING_HOST = "https://staging.makinglifeeasie.com";

export type ShortLinkRow = {
  target_path: string;
  target_query: Record<string, unknown>;
  utm_campaign: string;
  utm_source: string;
  utm_medium: string;
  app_key: string;
  page_key: string;
};

export function normalizeShortCode(value: string | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!SHORT_CODE_REGEX.test(trimmed)) return null;
  return trimmed.toLowerCase();
}

export function normalizeBaseUrl(raw: string): string | null {
  try {
    const parsed = new URL(raw);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return null;
  }
}

export function getRedirectBaseUrl(options?: {
  redirectBaseUrl?: string | null;
  vercelEnv?: string | null;
  useStagingHost?: string | null;
}): string {
  const explicit = options?.redirectBaseUrl?.trim();
  if (explicit) {
    const normalized = normalizeBaseUrl(explicit);
    if (normalized) return normalized;
  }

  const vercelEnv = options?.vercelEnv?.trim();
  if (vercelEnv === "production") return PRODUCTION_HOST;

  const useStagingHost = options?.useStagingHost === "true";
  if (useStagingHost) return STAGING_HOST;

  // Staging host is not guaranteed to be live yet; production host fallback is allowed.
  return PRODUCTION_HOST;
}

export function parseShortLinkRow(value: unknown): ShortLinkRow | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  const row = value[0];
  if (!row || typeof row !== "object") return null;

  const record = row as Record<string, unknown>;
  const targetPath = typeof record.target_path === "string" ? record.target_path.trim() : "";
  const utmCampaign = typeof record.utm_campaign === "string" ? record.utm_campaign.trim() : "";
  const utmSource = typeof record.utm_source === "string" ? record.utm_source.trim() : "";
  const utmMedium = typeof record.utm_medium === "string" ? record.utm_medium.trim() : "";
  const appKey = typeof record.app_key === "string" ? record.app_key.trim() : "";
  const pageKey = typeof record.page_key === "string" ? record.page_key.trim() : "";
  const targetQuery =
    record.target_query && typeof record.target_query === "object" && !Array.isArray(record.target_query)
      ? (record.target_query as Record<string, unknown>)
      : {};

  if (!targetPath.startsWith("/kinly/")) return null;
  if (!utmCampaign || !utmSource || !utmMedium || !appKey || !pageKey) return null;

  return {
    target_path: targetPath,
    target_query: targetQuery,
    utm_campaign: utmCampaign,
    utm_source: utmSource,
    utm_medium: utmMedium,
    app_key: appKey,
    page_key: pageKey,
  };
}

export function buildDestinationUrl(baseUrl: string, row: ShortLinkRow): string | null {
  return buildDestinationUrlWithShortCode(baseUrl, row);
}

export function buildDestinationUrlWithShortCode(
  baseUrl: string,
  row: ShortLinkRow,
  shortCode?: string | null,
): string | null {
  try {
    const url = new URL(row.target_path, baseUrl);

    for (const [key, value] of Object.entries(row.target_query)) {
      if (!key || key.startsWith("utm_") || key === "k_sc") continue;
      if (value === null || value === undefined) continue;
      if (typeof value === "object") continue;
      url.searchParams.set(key, String(value));
    }

    // Canonical UTM values must take precedence.
    url.searchParams.set("utm_campaign", row.utm_campaign);
    url.searchParams.set("utm_source", row.utm_source);
    url.searchParams.set("utm_medium", row.utm_medium);

    const normalizedShortCode =
      typeof shortCode === "string" && SHORT_CODE_REGEX.test(shortCode.trim())
        ? shortCode.trim().toLowerCase()
        : null;
    if (normalizedShortCode && row.target_path.startsWith("/kinly/polls/")) {
      url.searchParams.set("k_sc", normalizedShortCode);
    }

    return url.toString();
  } catch {
    return null;
  }
}

export function buildSyntheticSessionId(length = 24): string {
  const size = Math.min(Math.max(length, 16), 32);
  const buffer = new Uint8Array(Math.ceil(size / 2));

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    crypto.getRandomValues(buffer);
  } else {
    for (let i = 0; i < buffer.length; i += 1) {
      buffer[i] = Math.floor(Math.random() * 256);
    }
  }

  const token = Array.from(buffer, (byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, size);

  return `anon_${token}`;
}

export function extractLocale(value: string | null): string | null {
  if (!value) return null;
  const first = value.split(",")[0]?.trim();
  if (!first) return null;
  if (first.length < 2 || first.length > 35) return null;
  if (/\s/.test(first)) return null;
  return first;
}

export function extractCountryCode(requestHeaders: Headers): string | null {
  const raw =
    requestHeaders.get("x-kinly-country") ||
    requestHeaders.get("x-vercel-ip-country") ||
    requestHeaders.get("cf-ipcountry") ||
    "";
  const normalized = raw.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(normalized) ? normalized : null;
}
