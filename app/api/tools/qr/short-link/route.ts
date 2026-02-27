import { NextRequest, NextResponse } from "next/server";

import { extractShortCode, QrShortLinkCreatePayload } from "../../../../../lib/qrShortLink";

const SHORT_CODE_REGEX = /^[a-z0-9_-]{4,24}$/i;
const TARGET_PATH_REGEX = /^\/kinly\/(?:market|polls)\/[a-z0-9_-]+$/;
const PAGE_KEY_REGEX = /^[a-z0-9_]{3,80}$/;
const UTM_MAX_LENGTH = 128;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type ShortLinkErrorCode =
  | "INVALID_REQUEST"
  | "SHORT_LINK_TEMPORARILY_UNAVAILABLE"
  | "SHORT_LINK_CONFIG_MISSING"
  | "SHORT_LINK_RPC_ERROR"
  | "SHORT_LINK_RPC_NETWORK_ERROR"
  | "SHORT_LINK_RPC_INVALID_RESPONSE";

function buildRequestId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function logShortLinkFailure(
  requestId: string,
  code: ShortLinkErrorCode,
  details?: Record<string, unknown>,
): void {
  console.error("[qr_short_link]", {
    request_id: requestId,
    code,
    ...details,
  });
}

function errorResponse(
  status: number,
  requestId: string,
  error: ShortLinkErrorCode,
  diagnostic?: Record<string, unknown>,
) {
  const body: Record<string, unknown> = {
    ok: false,
    error,
    request_id: requestId,
  };

  if (!IS_PRODUCTION && diagnostic) {
    body.diagnostic = diagnostic;
  }

  return NextResponse.json(body, { status });
}

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

type RpcShortLinkFailure = {
  ok: false;
  reason: "network_error" | "rpc_error" | "invalid_rpc_response";
  attempt: "canonical" | "prefixed";
  status?: number;
  responseBody?: unknown;
  fetchError?: unknown;
};

type RpcShortLinkResult =
  | { ok: true; data: RpcShortLinkResponse }
  | RpcShortLinkFailure;

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
): Promise<RpcShortLinkResult> {
  const endpoint = `${supabaseUrl}/rest/v1/rpc/outreach_short_links_get_or_create`;
  const bodies: Array<Record<string, unknown>> = [payload, buildPrefixedRpcPayload(payload)];
  let lastFailure: RpcShortLinkFailure = {
    ok: false,
    reason: "rpc_error",
    attempt: "canonical",
  };

  for (let index = 0; index < bodies.length; index += 1) {
    const body = bodies[index];
    const attempt = index === 0 ? "canonical" : "prefixed";
    let response: Response;

    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
        },
        body: JSON.stringify(body),
        cache: "no-store",
      });
    } catch (fetchError) {
      return {
        ok: false,
        reason: "network_error",
        attempt,
        fetchError,
      };
    }

    const responseBody = await response.json().catch(() => null);

    if (response.ok) {
      const parsed = parseRpcShortLinkResponse(responseBody);
      if (parsed) {
        return { ok: true, data: parsed };
      }
      return {
        ok: false,
        reason: "invalid_rpc_response",
        attempt,
        responseBody,
      };
    }

    const retryAllowed = index === 0 && shouldRetryWithPrefixedArgs(response.status, responseBody);
    lastFailure = {
      ok: false,
      reason: "rpc_error",
      attempt,
      status: response.status,
      responseBody,
    };

    if (!retryAllowed) {
      return lastFailure;
    }
  }

  return lastFailure;
}

export async function POST(request: NextRequest) {
  const requestId = buildRequestId();
  const requesterKey = getRequesterKey(request);
  if (isRateLimited(requesterKey)) {
    return errorResponse(429, requestId, "SHORT_LINK_TEMPORARILY_UNAVAILABLE");
  }

  const requestBody = await request.json().catch(() => null);
  const payload = normalizePayload(requestBody);
  if (!payload) {
    return errorResponse(400, requestId, "INVALID_REQUEST");
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !serviceRoleKey) {
    logShortLinkFailure(requestId, "SHORT_LINK_CONFIG_MISSING", {
      has_supabase_url: Boolean(supabaseUrl),
      has_service_role_key: Boolean(serviceRoleKey),
    });
    return errorResponse(503, requestId, "SHORT_LINK_CONFIG_MISSING");
  }

  const rpcResult = await callShortLinkRpc(supabaseUrl, serviceRoleKey, payload);

  if (!rpcResult.ok) {
    if (rpcResult.reason === "network_error") {
      logShortLinkFailure(requestId, "SHORT_LINK_RPC_NETWORK_ERROR", {
        attempt: rpcResult.attempt,
        message:
          rpcResult.fetchError instanceof Error
            ? rpcResult.fetchError.message
            : "unknown_fetch_error",
      });
      return errorResponse(502, requestId, "SHORT_LINK_RPC_NETWORK_ERROR");
    }

    if (rpcResult.reason === "invalid_rpc_response") {
      logShortLinkFailure(requestId, "SHORT_LINK_RPC_INVALID_RESPONSE", {
        attempt: rpcResult.attempt,
        rpc_response: rpcResult.responseBody,
      });
      return errorResponse(502, requestId, "SHORT_LINK_RPC_INVALID_RESPONSE", {
        attempt: rpcResult.attempt,
      });
    }

    logShortLinkFailure(requestId, "SHORT_LINK_RPC_ERROR", {
      attempt: rpcResult.attempt,
      rpc_status: rpcResult.status,
      rpc_response: rpcResult.responseBody,
    });
    return errorResponse(502, requestId, "SHORT_LINK_RPC_ERROR", {
      attempt: rpcResult.attempt,
      rpc_status: rpcResult.status,
    });
  }

  return NextResponse.json({
    ok: true,
    request_id: requestId,
    short_url: rpcResult.data.shortUrl,
    short_code: rpcResult.data.shortCode,
    created: rpcResult.data.created,
  });
}
