import { describe, expect, test } from "vitest";

import { buildQrDestination, deriveShortLinkPageKey, extractShortCode } from "./qrShortLink";

describe("deriveShortLinkPageKey", () => {
  test("prefixes market page keys", () => {
    expect(deriveShortLinkPageKey("flat-agreements")).toBe("kinly_market_flat_agreements");
  });

  test("preserves already-canonical kinly keys", () => {
    expect(deriveShortLinkPageKey("kinly_general")).toBe("kinly_general");
  });

  test("preserves poll keys", () => {
    expect(deriveShortLinkPageKey("poll_toilet_paper_v1")).toBe("poll_toilet_paper_v1");
  });
});

describe("buildQrDestination", () => {
  test("builds fallback URL and payload from form values", () => {
    const { fallbackUrl, payload } = buildQrDestination({
      pageKey: "flat-agreements",
      utmCampaign: "early_interest_2026",
      utmSource: "offline_event",
      targetQuery: {
        variant: "A",
      },
    });

    expect(fallbackUrl).toBe(
      "https://go.makinglifeeasie.com/kinly/market/flat-agreements?variant=A&utm_campaign=early_interest_2026&utm_medium=qr&utm_source=offline_event",
    );
    expect(payload).toEqual({
      short_code: null,
      target_path: "/kinly/market/flat-agreements",
      target_query: { variant: "A" },
      utm_campaign: "early_interest_2026",
      utm_source: "offline_event",
      utm_medium: "qr",
      app_key: "kinly-web",
      page_key: "kinly_market_flat_agreements",
      expires_at: null,
    });
  });

  test("routes kinly_polls_ prefixed keys to /kinly/polls", () => {
    const { fallbackUrl, payload } = buildQrDestination({
      pageKey: "kinly_polls_toilet_paper_v1",
      utmCampaign: "uc_tp_feb2026_a",
      utmSource: "uc",
    });

    expect(payload.target_path).toBe("/kinly/polls/toilet-paper-v1");
    expect(fallbackUrl).toContain("/kinly/polls/toilet-paper-v1");
  });

  test("routes kinly_market_ prefixed keys to /kinly/market", () => {
    const { payload } = buildQrDestination({
      pageKey: "kinly_market_freshers",
      utmCampaign: "camp",
      utmSource: "src",
    });

    expect(payload.target_path).toBe("/kinly/market/freshers");
  });

  test("routes poll page keys to /kinly/polls", () => {
    const { fallbackUrl, payload } = buildQrDestination({
      pageKey: "poll_toilet_paper_v1",
      utmCampaign: "uc_tp_feb2026_a",
      utmSource: "uc",
    });

    expect(fallbackUrl).toBe(
      "https://go.makinglifeeasie.com/kinly/polls/toilet-paper-v1?utm_campaign=uc_tp_feb2026_a&utm_medium=qr&utm_source=uc",
    );
    expect(payload).toEqual({
      short_code: null,
      target_path: "/kinly/polls/toilet-paper-v1",
      target_query: {},
      utm_campaign: "uc_tp_feb2026_a",
      utm_source: "uc",
      utm_medium: "qr",
      app_key: "kinly-web",
      page_key: "poll_toilet_paper_v1",
      expires_at: null,
    });
  });
});

describe("extractShortCode", () => {
  test("extracts a short code from short URL format", () => {
    expect(extractShortCode("https://go.makinglifeeasie.com/k8m4qz")).toBe("k8m4qz");
  });

  test("returns null when URL is not short-code format", () => {
    expect(
      extractShortCode(
        "https://go.makinglifeeasie.com/kinly/market/flat-agreements?utm_campaign=a&utm_medium=qr&utm_source=b",
      ),
    ).toBeNull();
  });

  test("returns null when input is not a valid URL", () => {
    expect(extractShortCode("not a valid url")).toBeNull();
  });

  test("returns null for empty or null input", () => {
    expect(extractShortCode(null)).toBeNull();
    expect(extractShortCode("")).toBeNull();
  });

  test("returns null when short code fails regex", () => {
    expect(extractShortCode("https://go.makinglifeeasie.com/ab")).toBeNull();
  });
});
