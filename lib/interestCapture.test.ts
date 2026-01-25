import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { submitInterest } from "./interestCapture";

describe("submitInterest", () => {
  const mockFetch = vi.fn();
  const originalEnv = process.env;

  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_SUPABASE_URL: "https://test.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "test-anon-key",
    };
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    mockFetch.mockReset();
    process.env = originalEnv;
  });

  it("returns error when Supabase config is missing", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const result = await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(result.ok).toBe(false);
    expect(result.error).toBe("SUPABASE_CONFIG_MISSING");
  });

  it("trims and normalizes input values", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ lead_id: "123", deduped: false }),
    });

    await submitInterest({
      email: "  test@example.com  ",
      country_code: "  us  ",
      ui_locale: "  en-US  ",
    });

    expect(mockFetch).toHaveBeenCalledWith(
      "https://test.supabase.co/rest/v1/rpc/leads_upsert_v1",
      expect.objectContaining({
        body: JSON.stringify({
          p_email: "test@example.com",
          p_country_code: "US",
          p_ui_locale: "en-US",
          p_source: "kinly_web_get",
        }),
      })
    );
  });

  it("uses custom source when provided", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ lead_id: "123" }),
    });

    await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
      source: "custom_source",
    });

    expect(mockFetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        body: expect.stringContaining('"p_source":"custom_source"'),
      })
    );
  });

  it("sends correct headers", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ lead_id: "123" }),
    });

    await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(mockFetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "test-anon-key",
          Authorization: "Bearer test-anon-key",
        },
      })
    );
  });

  it("returns success with lead_id on successful response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ lead_id: "abc-123", deduped: false }),
    });

    const result = await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(result).toEqual({
      ok: true,
      lead_id: "abc-123",
      deduped: false,
      simulated: false,
    });
  });

  it("returns deduped flag when response indicates duplicate", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ lead_id: "abc-123", deduped: true }),
    });

    const result = await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(result.deduped).toBe(true);
  });

  it("returns error code from failed response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ code: "RATE_LIMITED" }),
    });

    const result = await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(result).toEqual({
      ok: false,
      error: "RATE_LIMITED",
    });
  });

  it("returns error field from failed response when code is missing", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: "VALIDATION_FAILED" }),
    });

    const result = await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(result.error).toBe("VALIDATION_FAILED");
  });

  it("returns unknown error when response parsing fails", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.reject(new Error("Invalid JSON")),
    });

    const result = await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(result.error).toBe("LEADS_UNKNOWN_ERROR");
  });

  it("handles null lead_id in response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    });

    const result = await submitInterest({
      email: "test@example.com",
      country_code: "US",
      ui_locale: "en",
    });

    expect(result.lead_id).toBeNull();
  });
});
