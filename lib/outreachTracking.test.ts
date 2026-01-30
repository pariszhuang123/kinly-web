import { afterEach, describe, expect, test, vi } from "vitest";

import {
  detectUiLocale,
  ensureSessionId,
  buildClientEventId,
  hasPageViewBeenSent,
  logOutreachEvent,
  markPageViewSent,
  normalizeCountryCode,
  normalizeLocaleTag,
  readUtmParams,
} from "./outreachTracking";

function createMemoryStorage(): {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
} {
  const map = new Map<string, string>();
  return {
    getItem: (key) => map.get(key) ?? null,
    setItem: (key, value) => {
      map.set(key, value);
    },
    removeItem: (key) => {
      map.delete(key);
    },
  };
}

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

describe("ensureSessionId", () => {
  test("creates and reuses a session id when not expired", () => {
    const storage = createMemoryStorage();
    const now = () => 1000;
    const id1 = ensureSessionId({ storage, now });
    const id2 = ensureSessionId({ storage, now });

    expect(id1).toBeTruthy();
    expect(id1).toBe(id2);
    expect(id1?.startsWith("anon_")).toBe(true);
    expect((id1 ?? "").length).toBeGreaterThanOrEqual(21);
    expect((id1 ?? "").length).toBeLessThanOrEqual(37);
  });

  test("rotates session id after 30 days", () => {
    const storage = createMemoryStorage();
    const id1 = ensureSessionId({ storage, now: () => 0 });
    const id2 = ensureSessionId({ storage, now: () => THIRTY_DAYS_MS + 1 });

    expect(id1).not.toBe(id2);
  });

  test("returns null when storage unavailable", () => {
    const id = ensureSessionId({ storage: null });
    expect(id).toBeNull();
  });

  test("handles unreadable stored session gracefully", () => {
    const storage = createMemoryStorage();
    storage.setItem("kinly.outreach.session", "not-json");
    const id = ensureSessionId({ storage, now: () => 0, tokenLength: 16 });
    expect(id).toMatch(/^anon_/);
  });

  test("uses fallback random generator when crypto.getRandomValues is unavailable", () => {
    const originalCrypto = globalThis.crypto;
    Object.defineProperty(globalThis, "crypto", { value: undefined, configurable: true });
    const id = ensureSessionId({ storage: createMemoryStorage(), now: () => 0, tokenLength: 16 });
    Object.defineProperty(globalThis, "crypto", { value: originalCrypto, configurable: true });
    expect(id).toMatch(/^anon_/);
  });
});

describe("readUtmParams", () => {
  test("lowercases medium and source, keeps campaign", () => {
    const params = new URLSearchParams("utm_campaign=Summer2026&utm_medium=QR&utm_source=CampusFlyer");
    const utm = readUtmParams(params);
    expect(utm).toEqual({
      utm_campaign: "Summer2026",
      utm_medium: "qr",
      utm_source: "campusflyer",
    });
  });

  test("returns unknown when params missing or blank", () => {
    const utm = readUtmParams(new URLSearchParams(""));
    expect(utm).toEqual({
      utm_campaign: "unknown",
      utm_medium: "unknown",
      utm_source: "unknown",
    });
  });
});

describe("country and locale normalization", () => {
  test("normalizeCountryCode uppercases valid codes", () => {
    expect(normalizeCountryCode("nz")).toBe("NZ");
    expect(normalizeCountryCode("USA")).toBeNull();
    expect(normalizeCountryCode("")).toBeNull();
  });

  test("normalizeLocaleTag enforces BCP-ish constraints", () => {
    expect(normalizeLocaleTag("en-NZ")).toBe("en-NZ");
    expect(normalizeLocaleTag("EN_nz")).toBe("en-NZ");
    expect(normalizeLocaleTag("e")).toBeNull();
    expect(normalizeLocaleTag("this-is-way-too-long-to-be-valid-bcp-47-tag")).toBeNull();
    expect(normalizeLocaleTag("en NZ")).toBeNull();
  });
});

describe("page view sent marker", () => {
  test("marks and detects per session + page key", () => {
    const storage = createMemoryStorage();
    const session = "anon_abcdefghijklmnop";
    const pageKey = "kinly_general";

    expect(hasPageViewBeenSent(pageKey, session, storage)).toBe(false);
    markPageViewSent(pageKey, session, storage);
    expect(hasPageViewBeenSent(pageKey, session, storage)).toBe(true);
  });
});

describe("detectUiLocale", () => {
  test("gracefully returns null when window is undefined", () => {
    expect(detectUiLocale()).toBeNull();
  });
});

describe("buildClientEventId", () => {
  test("returns null when crypto.randomUUID is unavailable", () => {
    const originalCrypto = globalThis.crypto;
    Object.defineProperty(globalThis, "crypto", {
      value: { getRandomValues: () => new Uint8Array() },
      configurable: true,
    });
    expect(buildClientEventId()).toBeNull();
    Object.defineProperty(globalThis, "crypto", { value: originalCrypto, configurable: true });
  });

  test("returns null when crypto is entirely unavailable", () => {
    vi.stubGlobal("crypto", undefined as unknown as Crypto | undefined);
    expect(buildClientEventId()).toBeNull();
    vi.unstubAllGlobals();
  });

  test("returns randomUUID when available", () => {
    const originalCrypto = globalThis.crypto;
    const fakeRandom = vi.fn(() => "uuid-123");
    Object.defineProperty(globalThis, "crypto", {
      value: { randomUUID: fakeRandom },
      configurable: true,
    });
    expect(buildClientEventId()).toBe("uuid-123");
    expect(fakeRandom).toHaveBeenCalledTimes(1);
    Object.defineProperty(globalThis, "crypto", { value: originalCrypto, configurable: true });
  });
});

describe("logOutreachEvent", () => {
  const basePayload = {
    event: "page_view" as const,
    page_key: "kinly_general",
    utm_campaign: "camp",
    utm_medium: "qr",
    utm_source: "source",
    session_id: "anon_sessiontokenvalue",
  };
  const originalEnv = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  afterEach(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = originalEnv.url;
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalEnv.key;
  });

  test("returns config_missing when env vars are absent", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const result = await logOutreachEvent(basePayload, () => Promise.resolve(new Response()));
    expect(result).toEqual({ ok: false, error: "config_missing" });
  });

  test("returns fetch_unavailable when fetcher missing", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const result = await logOutreachEvent(basePayload, null);
    expect(result).toEqual({ ok: false, error: "fetch_unavailable" });
  });

  test("returns network_error when response not ok", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(new Response("nope", { status: 500, statusText: "fail" }));
    const result = await logOutreachEvent(basePayload, fakeFetcher);
    expect(result).toEqual({ ok: false, error: "network_error", status: 500 });
  });

  test("returns ok on successful response", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(new Response("{}", { status: 200 }));
    const result = await logOutreachEvent(basePayload, fakeFetcher);
    expect(result).toEqual({ ok: true });
  });

  test("returns network_error when fetcher throws", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.reject(new Error("boom"));
    const result = await logOutreachEvent(basePayload, fakeFetcher);
    expect(result).toEqual({ ok: false, error: "network_error" });
  });
});

describe("storage fallbacks", () => {
  test("getLocalStorage catch path returns null", () => {
    const originalWindow = (globalThis as unknown as { window?: unknown }).window;
    Object.defineProperty(globalThis, "window", {
      value: {
        get localStorage() {
          throw new Error("denied");
        },
      },
      configurable: true,
    });
    const result = ensureSessionId(); // storage fallback returns null
    expect(result).toBeNull();
    Object.defineProperty(globalThis, "window", { value: originalWindow, configurable: true });
  });

  test("getSessionStorage catch path returns false", () => {
    const originalWindow = (globalThis as unknown as { window?: unknown }).window;
    Object.defineProperty(globalThis, "window", {
      value: {
        get sessionStorage() {
          throw new Error("denied");
        },
      },
      configurable: true,
    });
    const sent = hasPageViewBeenSent("page", "session");
    expect(sent).toBe(false);
    Object.defineProperty(globalThis, "window", { value: originalWindow, configurable: true });
  });
});
