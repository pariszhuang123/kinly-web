import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import {
  buildDestinationUrl,
  buildSyntheticSessionId,
  extractCountryCode,
  extractLocale,
  getRedirectBaseUrl,
  normalizeShortCode,
  parseShortLinkRow,
  ShortLinkRow,
} from "../../lib/shortLinkResolver";

type Params = Promise<{
  shortCode: string;
}>;


async function logOutreachPageView(
  supabaseUrl: string,
  serviceRoleKey: string,
  row: ShortLinkRow,
  requestHeaders: Headers,
): Promise<void> {
  const payload = {
    p_event: "page_view",
    p_app_key: row.app_key,
    p_page_key: row.page_key,
    p_utm_campaign: row.utm_campaign,
    p_utm_source: row.utm_source,
    p_utm_medium: row.utm_medium,
    p_store: "web",
    p_session_id: buildSyntheticSessionId(),
    p_country: extractCountryCode(requestHeaders),
    p_ui_locale: extractLocale(requestHeaders.get("accept-language")),
    p_client_event_id: null,
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);

  try {
    await fetch(`${supabaseUrl}/rest/v1/rpc/outreach_log_event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });
  } catch {
    // Best-effort only: logging failures must not block redirect.
  } finally {
    clearTimeout(timeout);
  }
}

async function resolveShortLink(
  supabaseUrl: string,
  serviceRoleKey: string,
  shortCode: string,
): Promise<ShortLinkRow | null> {
  const query = new URLSearchParams({
    short_code: `eq.${shortCode}`,
    effective_active: "eq.true",
    select: "target_path,target_query,utm_campaign,utm_source,utm_medium,app_key,page_key",
    limit: "1",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/outreach_short_links_effective?${query.toString()}`, {
    method: "GET",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
    },
    cache: "no-store",
  }).catch(() => null);

  if (!response?.ok) return null;
  const body = await response.json().catch(() => null);
  return parseShortLinkRow(body);
}

export default async function ShortCodePage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const shortCode = normalizeShortCode(resolvedParams?.shortCode);
  if (!shortCode) {
    notFound();
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!supabaseUrl || !serviceRoleKey) {
    notFound();
  }

  const row = await resolveShortLink(supabaseUrl, serviceRoleKey, shortCode);
  if (!row) {
    notFound();
  }

  const destinationUrl = buildDestinationUrl(
    getRedirectBaseUrl({
      redirectBaseUrl: process.env.SHORT_LINK_REDIRECT_BASE_URL,
      vercelEnv: process.env.VERCEL_ENV,
      useStagingHost: process.env.SHORT_LINK_USE_STAGING_HOST,
    }),
    row,
  );
  if (!destinationUrl) {
    notFound();
  }

  const requestHeaders = await headers();
  await logOutreachPageView(supabaseUrl, serviceRoleKey, row, requestHeaders);

  redirect(destinationUrl);
}
