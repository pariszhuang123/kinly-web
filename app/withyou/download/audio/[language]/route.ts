import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { WITHYOU_PACK_LANGUAGES, type WithYouPackLanguage } from "../../../../../lib/withyou";

type Context = {
  params: Promise<{ language: string }>;
};

type DownloadLogPayload = {
  p_language: WithYouPackLanguage;
  p_pack_version: string | null;
  p_platform: string | null;
  p_app_version: string | null;
  p_request_path: string | null;
  p_user_agent: string | null;
  p_country_code: string | null;
};

function isPackLanguage(value: string): value is WithYouPackLanguage {
  return WITHYOU_PACK_LANGUAGES.includes(value as WithYouPackLanguage);
}

async function logPackDownload(request: NextRequest, language: WithYouPackLanguage) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !serviceRoleKey) return;

  const h = await headers();
  const payload: DownloadLogPayload = {
    p_language: language,
    p_pack_version: request.nextUrl.searchParams.get("pack_version"),
    p_platform: request.nextUrl.searchParams.get("platform"),
    p_app_version: request.nextUrl.searchParams.get("app_version"),
    p_request_path: request.nextUrl.pathname,
    p_user_agent: h.get("user-agent"),
    p_country_code: h.get("x-vercel-ip-country") || h.get("x-country-code") || h.get("cf-ipcountry"),
  };

  try {
    await fetch(`${supabaseUrl}/rest/v1/rpc/withyou_log_pack_download_v1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch {
    // Logging is best-effort. Redirect should still succeed for supported languages.
  }
}

export async function GET(request: NextRequest, context: Context) {
  const { language } = await context.params;
  const normalized = language.trim().toLowerCase();

  if (!isPackLanguage(normalized)) {
    return Response.json(
      {
        ok: false,
        error: "WITHYOU_UNSUPPORTED_LANGUAGE",
      },
      { status: 404 },
    );
  }

  await logPackDownload(request, normalized);

  return NextResponse.redirect(new URL(`/withyou/audio/${normalized}/core.zip`, request.url), 302);
}
