import { beforeEach, expect, test, vi } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "../app/api/piano/lead/route";

beforeEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
  delete process.env.RESEND_API_KEY;
  delete process.env.PIANO_NOTIFY_TO_EMAIL;
  delete process.env.PIANO_NOTIFY_FROM_EMAIL;
  vi.restoreAllMocks();
});

test("returns invalid request for malformed body", async () => {
  const request = new NextRequest("https://example.com/api/piano/lead", {
    method: "POST",
    body: JSON.stringify({ email: "bad", country_code: "NZ", ui_locale: "en-NZ" }),
  });

  const response = await POST(request);
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body).toEqual({
    ok: false,
    error: "INVALID_REQUEST",
  });
});

test("rejects non-NZ submissions", async () => {
  const request = new NextRequest("https://example.com/api/piano/lead", {
    method: "POST",
    body: JSON.stringify({ email: "parent@example.com", country_code: "AU", ui_locale: "en-AU" }),
  });

  const response = await POST(request);
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body).toEqual({
    ok: false,
    error: "INVALID_REQUEST",
  });
});

test("submits to the leads rpc with piano source", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => ({ lead_id: "lead-1", deduped: false }),
  } as Response);

  const request = new NextRequest("https://example.com/api/piano/lead", {
    method: "POST",
    body: JSON.stringify({ email: "parent@example.com", country_code: "NZ", ui_locale: "en-NZ" }),
  });

  const response = await POST(request);
  const body = await response.json();

  expect(fetchSpy).toHaveBeenCalledWith(
    "https://example.supabase.co/rest/v1/rpc/leads_upsert_v1",
    expect.objectContaining({
      body: JSON.stringify({
        p_email: "parent@example.com",
        p_country_code: "NZ",
        p_ui_locale: "en-NZ",
        p_source: "piano_web",
      }),
    }),
  );
  expect(response.status).toBe(200);
  expect(body.notification_status).toBe("notification_config_missing");
});

test("sends a resend email when notification config is present", async () => {
  process.env.RESEND_API_KEY = "re_test";
  process.env.PIANO_NOTIFY_TO_EMAIL = "teacher@example.com";
  process.env.PIANO_NOTIFY_FROM_EMAIL = "noreply@example.com";

  const fetchSpy = vi
    .spyOn(globalThis, "fetch")
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ lead_id: "lead-1", deduped: false }),
    } as Response)
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: "email-1" }),
    } as Response);

  const request = new NextRequest("https://example.com/api/piano/lead", {
    method: "POST",
    body: JSON.stringify({ email: "parent@example.com", country_code: "NZ", ui_locale: "en-NZ" }),
  });

  const response = await POST(request);
  const body = await response.json();

  expect(fetchSpy).toHaveBeenNthCalledWith(
    2,
    "https://api.resend.com/emails",
    expect.objectContaining({
      body: expect.stringContaining('"reply_to":"parent@example.com"'),
    }),
  );
  expect(response.status).toBe(200);
  expect(body.notification_status).toBe("sent");
  expect(body.notification_sent).toBe(true);
});

test("skips notification for deduped enquiries", async () => {
  process.env.RESEND_API_KEY = "re_test";
  process.env.PIANO_NOTIFY_TO_EMAIL = "teacher@example.com";
  process.env.PIANO_NOTIFY_FROM_EMAIL = "noreply@example.com";

  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => ({ lead_id: "lead-1", deduped: true }),
  } as Response);

  const request = new NextRequest("https://example.com/api/piano/lead", {
    method: "POST",
    body: JSON.stringify({ email: "parent@example.com", country_code: "NZ", ui_locale: "en-NZ" }),
  });

  const response = await POST(request);
  const body = await response.json();

  expect(fetchSpy).toHaveBeenCalledTimes(1);
  expect(response.status).toBe(200);
  expect(body.deduped).toBe(true);
  expect(body.notification_status).toBe("duplicate_skipped");
  expect(body.notification_sent).toBe(true);
});
