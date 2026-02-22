import { describe, expect, test } from "vitest";

import {
  buildDestinationUrl,
  buildSyntheticSessionId,
  extractCountryCode,
  extractLocale,
  getRedirectBaseUrl,
  normalizeShortCode,
  normalizeBaseUrl,
  parseShortLinkRow,
} from "./shortLinkResolver";

describe("normalizeShortCode", () => {
  test("accepts valid codes and normalizes lowercase", () => {
    expect(normalizeShortCode("  7BbTj6 ")).toBe("7bbtj6");
  });

  test("rejects invalid code shapes", () => {
    expect(normalizeShortCode("kinly/market/freshers")).toBeNull();
    expect(normalizeShortCode("")).toBeNull();
  });
});

describe("parseShortLinkRow", () => {
  test("parses valid row payload", () => {
    const parsed = parseShortLinkRow([
      {
        target_path: "/kinly/market/takeaway-budget",
        target_query: { variant: "a" },
        utm_campaign: "fish_and_chips_campaign",
        utm_source: "offline_event",
        utm_medium: "qr",
        app_key: "kinly-web",
        page_key: "kinly_market_takeaway_budget",
      },
    ]);

    expect(parsed).toEqual({
      target_path: "/kinly/market/takeaway-budget",
      target_query: { variant: "a" },
      utm_campaign: "fish_and_chips_campaign",
      utm_source: "offline_event",
      utm_medium: "qr",
      app_key: "kinly-web",
      page_key: "kinly_market_takeaway_budget",
    });
  });

  test("returns null for invalid payload", () => {
    expect(parseShortLinkRow([{ target_path: "/outside/path" }])).toBeNull();
  });

  test("defaults target_query to empty object when not object", () => {
    const parsed = parseShortLinkRow([
      {
        target_path: "/kinly/market/freshers",
        target_query: [],
        utm_campaign: "first_year_2026",
        utm_source: "offline_event",
        utm_medium: "qr",
        app_key: "kinly-web",
        page_key: "kinly_market_freshers",
      },
    ]);

    expect(parsed?.target_query).toEqual({});
  });
});

describe("buildDestinationUrl", () => {
  test("merges target query and enforces canonical utm values", () => {
    const url = buildDestinationUrl("https://go.makinglifeeasie.com", {
      target_path: "/kinly/market/takeaway-budget",
      target_query: {
        variant: "A",
        utm_source: "ignore_this",
      },
      utm_campaign: "fish_and_chips_campaign",
      utm_source: "offline_event",
      utm_medium: "qr",
      app_key: "kinly-web",
      page_key: "kinly_market_takeaway_budget",
    });

    expect(url).toBe(
      "https://go.makinglifeeasie.com/kinly/market/takeaway-budget?variant=A&utm_campaign=fish_and_chips_campaign&utm_source=offline_event&utm_medium=qr",
    );
  });

  test("skips null/object values and malformed keys in target_query", () => {
    const url = buildDestinationUrl("https://go.makinglifeeasie.com", {
      target_path: "/kinly/market/freshers",
      target_query: {
        variant: "B",
        nested: { a: 1 },
        nullable: null,
        "": "ignored",
      },
      utm_campaign: "first_year_2026",
      utm_source: "offline_event",
      utm_medium: "qr",
      app_key: "kinly-web",
      page_key: "kinly_market_freshers",
    });

    expect(url).toBe(
      "https://go.makinglifeeasie.com/kinly/market/freshers?variant=B&utm_campaign=first_year_2026&utm_source=offline_event&utm_medium=qr",
    );
  });

  test("returns null when base URL is invalid", () => {
    expect(
      buildDestinationUrl("://bad-url", {
        target_path: "/kinly/market/freshers",
        target_query: {},
        utm_campaign: "first_year_2026",
        utm_source: "offline_event",
        utm_medium: "qr",
        app_key: "kinly-web",
        page_key: "kinly_market_freshers",
      }),
    ).toBeNull();
  });
});

describe("getRedirectBaseUrl", () => {
  test("prefers explicit configured base URL when valid", () => {
    expect(
      getRedirectBaseUrl({
        redirectBaseUrl: "https://custom.example.com/path/ignored",
        vercelEnv: "preview",
        useStagingHost: "false",
      }),
    ).toBe("https://custom.example.com");
  });

  test("uses production host for production env", () => {
    expect(
      getRedirectBaseUrl({
        vercelEnv: "production",
      }),
    ).toBe("https://go.makinglifeeasie.com");
  });

  test("uses staging host when flag is true outside production", () => {
    expect(
      getRedirectBaseUrl({
        vercelEnv: "preview",
        useStagingHost: "true",
      }),
    ).toBe("https://staging.makinglifeeasie.com");
  });

  test("falls back to production host when explicit base is invalid", () => {
    expect(
      getRedirectBaseUrl({
        redirectBaseUrl: "not a url",
        vercelEnv: "preview",
      }),
    ).toBe("https://go.makinglifeeasie.com");
  });
});

describe("normalizeBaseUrl", () => {
  test("returns protocol+host for valid URL", () => {
    expect(normalizeBaseUrl("https://custom.example.com/path?q=1")).toBe("https://custom.example.com");
  });

  test("returns null for invalid URL", () => {
    expect(normalizeBaseUrl("%%%")).toBeNull();
  });
});

describe("buildSyntheticSessionId", () => {
  test("builds anon_ id in allowed length range", () => {
    const id = buildSyntheticSessionId(24);
    expect(id).toMatch(/^anon_[A-Za-z0-9_-]{16,32}$/);
  });
});

describe("extractLocale", () => {
  test("extracts first locale token", () => {
    expect(extractLocale("en-NZ,en;q=0.8")).toBe("en-NZ");
  });

  test("returns null for invalid locale values", () => {
    expect(extractLocale(null)).toBeNull();
    expect(extractLocale("a")).toBeNull();
    expect(extractLocale("en NZ")).toBeNull();
  });
});

describe("extractCountryCode", () => {
  test("prefers x-kinly-country", () => {
    const h = new Headers({
      "x-kinly-country": "nz",
      "x-vercel-ip-country": "SG",
    });
    expect(extractCountryCode(h)).toBe("NZ");
  });

  test("falls back to other headers and rejects invalid value", () => {
    const valid = new Headers({
      "x-vercel-ip-country": "sg",
    });
    expect(extractCountryCode(valid)).toBe("SG");

    const invalid = new Headers({
      "cf-ipcountry": "unknown",
    });
    expect(extractCountryCode(invalid)).toBeNull();
  });
});
