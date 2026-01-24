type SubmitPayload = {
  email: string;
  country_code: string;
  ui_locale: string;
  source?: string;
};

type SubmitResult = {
  ok: boolean;
  lead_id?: string | null;
  deduped?: boolean;
  simulated?: boolean;
  error?: string;
};

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function submitInterest(payload: SubmitPayload): Promise<SubmitResult> {
  const body = {
    p_email: payload.email.trim(),
    p_country_code: payload.country_code.trim().toUpperCase(),
    p_ui_locale: payload.ui_locale.trim(),
    p_source: payload.source ?? "kinly_web_get",
  };

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return {
      ok: false,
      error: "SUPABASE_CONFIG_MISSING",
    };
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/leads_upsert_v1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorCode = (data && (data.code || data.error)) || "LEADS_UNKNOWN_ERROR";

    return {
      ok: false,
      error: errorCode,
    };
  }

  return {
    ok: true,
    lead_id: data?.lead_id ?? null,
    deduped: Boolean(data?.deduped),
    simulated: false,
  };
}
