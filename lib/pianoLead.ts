export type SubmitPianoLeadPayload = {
  email: string;
  country_code: string;
  ui_locale: string;
};

export type SubmitPianoLeadResult = {
  ok: boolean;
  lead_id?: string | null;
  deduped?: boolean;
  notification_sent?: boolean;
  notification_status?: string;
  error?: string;
};

export async function submitPianoLead(payload: SubmitPianoLeadPayload): Promise<SubmitPianoLeadResult> {
  const response = await fetch("/api/piano/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
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
    notification_sent: Boolean(data?.notification_sent),
    notification_status:
      typeof data?.notification_status === "string" ? data.notification_status : undefined,
  };
}
