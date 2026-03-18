import { afterEach, describe, expect, test } from "vitest";
import { getPublicSiteBaseUrl, getPublicSitePaths, getPublicSiteUrls } from "./publicRoutes";

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
});

describe("getPublicSiteBaseUrl", () => {
  test("falls back to the production host when env is absent", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(getPublicSiteBaseUrl()).toBe("https://go.makinglifeeasie.com");
  });

  test("normalizes NEXT_PUBLIC_SITE_URL to origin only", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/path?x=1";
    expect(getPublicSiteBaseUrl()).toBe("https://example.com");
  });

  test("falls back to the production host when env is invalid", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "not a url";
    expect(getPublicSiteBaseUrl()).toBe("https://go.makinglifeeasie.com");
  });
});

describe("getPublicSitePaths", () => {
  test("includes static public pages and market scenarios", () => {
    const paths = getPublicSitePaths();

    expect(paths).toContain("/");
    expect(paths).toContain("/kinly/general");
    expect(paths).toContain("/kinly/market/sg-helper-alignment");
    expect(paths).toContain("/kinly/market/freshers");
  });
});

describe("getPublicSiteUrls", () => {
  test("builds absolute URLs from the configured site origin", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://staging.makinglifeeasie.com/preview";

    const urls = getPublicSiteUrls();
    expect(urls).toContain("https://staging.makinglifeeasie.com/kinly/market/sg-helper-alignment");
  });
});
