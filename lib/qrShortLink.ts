export const QR_SHORT_LINK_APP_KEY = "kinly-web";
export const QR_SHORT_LINK_MEDIUM = "qr";
export const QR_SHORT_LINK_CANONICAL_HOST = "https://go.makinglifeeasie.com";

export type ShortLinkTargetQuery = Record<string, string>;

export type QrShortLinkCreatePayload = {
  short_code: string | null;
  target_path: string;
  target_query: ShortLinkTargetQuery;
  utm_campaign: string;
  utm_source: string;
  utm_medium: typeof QR_SHORT_LINK_MEDIUM;
  app_key: typeof QR_SHORT_LINK_APP_KEY;
  page_key: string;
  expires_at: string | null;
};

export type BuildQrDestinationInput = {
  pageKey: string;
  utmCampaign: string;
  utmSource: string;
  targetQuery?: ShortLinkTargetQuery;
  shortCode?: string | null;
  expiresAt?: string | null;
};

export type BuiltQrDestination = {
  fallbackUrl: string;
  payload: QrShortLinkCreatePayload;
};

const SHORT_CODE_REGEX = /^[a-z0-9_-]{4,24}$/i;

function normalizeSlugSegment(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[-_]+|[-_]+$/g, "");
}

function toSnakeCase(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function normalizeToken(value: string): string {
  return value.trim();
}

function normalizeTargetQuery(targetQuery?: ShortLinkTargetQuery): ShortLinkTargetQuery {
  if (!targetQuery) return {};

  const normalized: ShortLinkTargetQuery = {};
  const keys = Object.keys(targetQuery).sort();

  for (const key of keys) {
    const cleanKey = key.trim();
    if (!cleanKey) continue;
    const rawValue = targetQuery[key];
    const cleanValue = typeof rawValue === "string" ? rawValue.trim() : "";
    if (!cleanValue) continue;
    normalized[cleanKey] = cleanValue;
  }

  return normalized;
}

export function deriveShortLinkPageKey(pageKey: string): string {
  const normalized = toSnakeCase(pageKey);
  if (!normalized) return "kinly_market_unknown";
  if (normalized.startsWith("kinly_")) return normalized;
  return `kinly_market_${normalized}`;
}

export function buildQrDestination(input: BuildQrDestinationInput): BuiltQrDestination {
  const slug = normalizeSlugSegment(input.pageKey);
  const safeSlug = slug || "unknown";
  const targetPath = `/kinly/market/${safeSlug}`;
  const targetQuery = normalizeTargetQuery(input.targetQuery);
  const utmCampaign = normalizeToken(input.utmCampaign);
  const utmSource = normalizeToken(input.utmSource);

  const url = new URL(`${QR_SHORT_LINK_CANONICAL_HOST}${targetPath}`);
  for (const [key, value] of Object.entries(targetQuery)) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set("utm_campaign", utmCampaign);
  url.searchParams.set("utm_medium", QR_SHORT_LINK_MEDIUM);
  url.searchParams.set("utm_source", utmSource);

  const payload: QrShortLinkCreatePayload = {
    short_code: input.shortCode?.trim() || null,
    target_path: targetPath,
    target_query: targetQuery,
    utm_campaign: utmCampaign,
    utm_source: utmSource,
    utm_medium: QR_SHORT_LINK_MEDIUM,
    app_key: QR_SHORT_LINK_APP_KEY,
    page_key: deriveShortLinkPageKey(input.pageKey),
    expires_at: input.expiresAt ?? null,
  };

  return {
    fallbackUrl: url.toString(),
    payload,
  };
}

export function extractShortCode(shortUrl: string | null | undefined): string | null {
  if (!shortUrl) return null;

  try {
    const parsed = new URL(shortUrl);
    const segments = parsed.pathname.split("/").filter(Boolean);
    if (segments.length !== 1) return null;

    const candidate = segments[0];
    if (!SHORT_CODE_REGEX.test(candidate)) return null;
    return candidate.toLowerCase();
  } catch {
    return null;
  }
}
