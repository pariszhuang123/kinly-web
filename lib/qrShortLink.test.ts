import { describe, expect, test } from "vitest";

import { buildQrDestination, deriveShortLinkPageKey, extractShortCode } from "./qrShortLink";

describe("deriveShortLinkPageKey", () => {
  test("prefixes market page keys", () => {
    expect(deriveShortLinkPageKey("flat-agreements")).toBe("kinly_market_flat_agreements");
  });

  test("preserves already-canonical kinly keys", () => {
    expect(deriveShortLinkPageKey("kinly_general")).toBe("kinly_general");
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
});
