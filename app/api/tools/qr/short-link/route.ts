import { NextRequest, NextResponse } from "next/server";

import { extractShortCode, QrShortLinkCreatePayload } from "../../../../../lib/qrShortLink";

const SHORT_CODE_REGEX = /^[a-z0-9_-]{4,24}$/i;
const TARGET_PATH_REGEX = /^\/kinly\/market\/[a-z0-9_-]+$/;
const PAGE_KEY_REGEX = /^[a-z0-9_]{3,80}$/;
const UTM_MAX_LENGTH = 128;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function normalizeTargetQuery(value: unknown): Record<string, string> | null {
  if (!isPlainObject(value)) return null;

  const normalized: Record<string, string> = {};
  for (const [key, raw] of Object.entries(value)) {
    const cleanKey = key.trim();
    if (!cleanKey) return null;
    if (cleanKey.startsWith("utm_")) return null;
    if (typeof raw !== "string") return null;
    normalized[cleanKey] = raw.trim();
  }

  return normalized;
}

function normalizePayload(value: unknown): QrShortLinkCreatePayload | null {
  if (!isPlainObject(value)) return null;

  const targetPath = typeof value.target_path === "string" ? value.target_path.trim() : "";
  const utmCampaign = typeof value.utm_campaign === "string" ? value.utm_campaign.trim() : "";
  const utmSource = typeof value.utm_source === "string" ? value.utm_source.trim() : "";
  const utmMedium = typeof value.utm_medium === "string" ? value.utm_medium.trim() : "";
  const appKey = typeof value.app_key === "string" ? value.app_key.trim() : "";
  const pageKey = typeof value.page_key === "string" ? value.page_key.trim() : "";
  const targetQuery = normalizeTargetQuery(value.target_query);
  const shortCodeRaw =
    value.short_code === null || typeof value.short_code === "string" ? value.short_code : undefined;
  const expiresAtRaw =
    value.expires_at === null || typeof value.expires_at === "string" ? value.expires_at : undefined;

  if (!targetPath || !TARGET_PATH_REGEX.test(targetPath)) return null;
  if (!utmCampaign || utmCampaign.length > UTM_MAX_LENGTH) return null;
  if (!utmSource || utmSource.length > UTM_MAX_LENGTH) return null;
  if (utmMedium !== "qr") return null;
  if (appKey !== "kinly-web") return null;
  if (!PAGE_KEY_REGEX.test(pageKey)) return null;
  if (!targetQuery) return null;
  if (shortCodeRaw === undefined || expiresAtRaw === undefined) return null;

  const shortCode = shortCodeRaw ? shortCodeRaw.trim().toLowerCase() : null;
  if (shortCode && !SHORT_CODE_REGEX.test(shortCode)) return null;

  let expiresAt: string | null = null;
  if (typeof expiresAtRaw === "string") {
    const trimmed = expiresAtRaw.trim();
    if (trimmed) {
      const parsedMs = Date.parse(trimmed);
      if (!Number.isFinite(parsedMs)) return null;
      expiresAt = new Date(parsedMs).toISOString();
    }
  }

  return {
    short_code: shortCode,
    target_path: targetPath,
    target_query: targetQuery,
    utm_campaign: utmCampaign,
    utm_source: utmSource,
    utm_medium: "qr",
    app_key: "kinly-web",
    page_key: pageKey,
    expires_at: expiresAt,
  };
}

function getRequesterKey(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const firstIp = forwardedFor.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return firstIp || realIp || "unknown";
}

function isRateLimited(requesterKey: string, nowMs = Date.now()): boolean {
  const existing = rateLimitBuckets.get(requesterKey);
  if (!existing || nowMs > existing.resetAt) {
    rateLimitBuckets.set(requesterKey, {
      count: 1,
      resetAt: nowMs + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  existing.count += 1;
  if (existing.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

function buildPrefixedRpcPayload(payload: QrShortLinkCreatePayload): Record<string, unknown> {
  return {
    p_short_code: payload.short_code,
    p_target_path: payload.target_path,
    p_target_query: payload.target_query,
    p_utm_campaign: payload.utm_campaign,
    p_utm_source: payload.utm_source,
    p_utm_medium: payload.utm_medium,
    p_app_key: payload.app_key,
    p_page_key: payload.page_key,
    p_expires_at: payload.expires_at,
  };
}

function shouldRetryWithPrefixedArgs(responseStatus: number, rpcBody: unknown): boolean {
  if (responseStatus < 400 || responseStatus >= 500) return false;
  if (!isPlainObject(rpcBody)) return false;

  const message = typeof rpcBody.message === "string" ? rpcBody.message : "";
  const hint = typeof rpcBody.hint === "string" ? rpcBody.hint : "";
  const combined = `${message} ${hint}`.toLowerCase();

  return combined.includes("could not find the function")
    || (combined.includes("outreach_short_links_get_or_create") && combined.includes("function"));
}

type RpcShortLinkResponse = {
  shortUrl: string;
  shortCode: string | null;
  created: boolean;
};

function parseRpcShortLinkResponse(value: unknown): RpcShortLinkResponse | null {
  const payload = Array.isArray(value) ? value[0] : value;
  if (!isPlainObject(payload)) return null;

  const shortUrl = typeof payload.short_url === "string" ? payload.short_url.trim() : "";
  if (!shortUrl) return null;

  const rawCode = typeof payload.short_code === "string" ? payload.short_code.trim() : "";
  const shortCode = rawCode ? rawCode.toLowerCase() : extractShortCode(shortUrl);

  return {
    shortUrl,
    shortCode,
    created: Boolean(payload.created),
  };
}

async function callShortLinkRpc(
  supabaseUrl: string,
  serviceRoleKey: string,
  payload: QrShortLinkCreatePayload,
): Promise<RpcShortLinkResponse | null> {
  const endpoint = `${supabaseUrl}/rest/v1/rpc/outreach_short_links_get_or_create`;
  const bodies: Array<Record<string, unknown>> = [payload, buildPrefixedRpcPayload(payload)];

  for (let index = 0; index < bodies.length; index += 1) {
    const body = bodies[index];
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const responseBody = await response.json().catch(() => null);

    if (response.ok) {
      return parseRpcShortLinkResponse(responseBody);
    }

    const retryAllowed = index === 0 && shouldRetryWithPrefixedArgs(response.status, responseBody);
    if (!retryAllowed) {
      return null;
    }
  }

  return null;
}

export async function POST(request: NextRequest) {
  const requesterKey = getRequesterKey(request);
  if (isRateLimited(requesterKey)) {
    return NextResponse.json({ ok: false, error: "SHORT_LINK_TEMPORARILY_UNAVAILABLE" }, { status: 429 });
  }

  const requestBody = await request.json().catch(() => null);
  const payload = normalizePayload(requestBody);
  if (!payload) {
    return NextResponse.json({ ok: false, error: "INVALID_REQUEST" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ ok: false, error: "SHORT_LINK_UNAVAILABLE" }, { status: 503 });
  }

  const rpcResult = await callShortLinkRpc(supabaseUrl, serviceRoleKey, payload);

  if (!rpcResult) {
    return NextResponse.json({ ok: false, error: "SHORT_LINK_UNAVAILABLE" }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    short_url: rpcResult.shortUrl,
    short_code: rpcResult.shortCode,
    created: rpcResult.created,
  });
}
