import { NextRequest, NextResponse } from "next/server";

const SOURCE = "piano_web";
const ALLOWED_COUNTRY_CODE = "NZ";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const countryRegex = /^[A-Z]{2}$/;
const localeRegex = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/;

type PianoLeadPayload = {
  email: string;
  country_code: string;
  ui_locale: string;
};

type RpcLeadResult = {
  ok: boolean;
  lead_id?: string | null;
  deduped?: boolean;
  error?: string;
  status?: number;
};

type NotificationResult =
  | { sent: true; status: "sent" | "duplicate_skipped" }
  | { sent: false; status: "notification_config_missing" | "notification_error" };

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function normalizePayload(value: unknown): PianoLeadPayload | null {
  if (!isPlainObject(value)) return null;

  const email = typeof value.email === "string" ? value.email.trim() : "";
  const countryCode =
    typeof value.country_code === "string" ? value.country_code.trim().toUpperCase() : "";
  const uiLocale = typeof value.ui_locale === "string" ? value.ui_locale.trim() : "";

  if (!emailRegex.test(email)) return null;
  if (!countryRegex.test(countryCode)) return null;
  if (countryCode !== ALLOWED_COUNTRY_CODE) return null;
  if (!uiLocale || uiLocale.length < 2 || uiLocale.length > 35) return null;
  if (/\s/.test(uiLocale)) return null;
  if (!localeRegex.test(uiLocale)) return null;

  return {
    email,
    country_code: countryCode,
    ui_locale: uiLocale,
  };
}

async function submitLeadToRpc(payload: PianoLeadPayload): Promise<RpcLeadResult> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      ok: false,
      error: "SUPABASE_CONFIG_MISSING",
      status: 500,
    };
  }

  let response: Response;
  try {
    response = await fetch(`${supabaseUrl}/rest/v1/rpc/leads_upsert_v1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify({
        p_email: payload.email,
        p_country_code: payload.country_code,
        p_ui_locale: payload.ui_locale,
        p_source: SOURCE,
      }),
    });
  } catch {
    return {
      ok: false,
      error: "LEADS_NETWORK_ERROR",
      status: 502,
    };
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    return {
      ok: false,
      error: (data && (data.code || data.error)) || "LEADS_UNKNOWN_ERROR",
      status: response.status,
    };
  }

  return {
    ok: true,
    lead_id: data?.lead_id ?? null,
    deduped: Boolean(data?.deduped),
  };
}

function buildNotificationHtml(payload: PianoLeadPayload): string {
  return [
    "<h1>New piano lesson lead</h1>",
    `<p><strong>Email:</strong> ${payload.email}</p>`,
    `<p><strong>Country:</strong> ${payload.country_code}</p>`,
    `<p><strong>Locale:</strong> ${payload.ui_locale}</p>`,
    `<p><strong>Source:</strong> ${SOURCE}</p>`,
  ].join("");
}

async function sendLeadNotification(payload: PianoLeadPayload, deduped: boolean): Promise<NotificationResult> {
  if (deduped) {
    return { sent: true, status: "duplicate_skipped" };
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const notifyTo = process.env.PIANO_NOTIFY_TO_EMAIL?.trim();
  const notifyFrom = process.env.PIANO_NOTIFY_FROM_EMAIL?.trim();

  if (!resendApiKey || !notifyTo || !notifyFrom) {
    return {
      sent: false,
      status: "notification_config_missing",
    };
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: notifyFrom,
        to: [notifyTo],
        reply_to: payload.email,
        subject: `New piano lesson lead from ${payload.email}`,
        html: buildNotificationHtml(payload),
        text: [
          "New piano lesson lead",
          `Email: ${payload.email}`,
          `Country: ${payload.country_code}`,
          `Locale: ${payload.ui_locale}`,
          `Source: ${SOURCE}`,
        ].join("\n"),
      }),
    });
  } catch {
    return {
      sent: false,
      status: "notification_error",
    };
  }

  if (!response.ok) {
    console.error("[piano_lead_notification]", {
      status: response.status,
      email: payload.email,
    });
    return {
      sent: false,
      status: "notification_error",
    };
  }

  return { sent: true, status: "sent" };
}

export async function POST(request: NextRequest) {
  const payload = normalizePayload(await request.json().catch(() => null));

  if (!payload) {
    return NextResponse.json(
      {
        ok: false,
        error: "INVALID_REQUEST",
      },
      { status: 400 },
    );
  }

  const leadResult = await submitLeadToRpc(payload);

  if (!leadResult.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: leadResult.error ?? "LEADS_UNKNOWN_ERROR",
      },
      { status: leadResult.status ?? 500 },
    );
  }

  const notification = await sendLeadNotification(payload, Boolean(leadResult.deduped));

  return NextResponse.json({
    ok: true,
    lead_id: leadResult.lead_id ?? null,
    deduped: Boolean(leadResult.deduped),
    notification_sent: notification.sent,
    notification_status: notification.status,
  });
}
