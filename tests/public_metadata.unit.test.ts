import { describe, expect, test } from "vitest";

import robots from "../app/robots";
import { metadata as homeMetadata } from "../app/page";
import { metadata as generalMetadata } from "../app/kinly/general/page";
import { metadata as getMetadata } from "../app/kinly/get/page";
import { metadata as marketIndexMetadata } from "../app/kinly/market/page";
import { metadata as flatAgreementsMetadata } from "../app/kinly/market/flat-agreements/page";
import { buildSiteMetadata } from "../lib/siteMetadata";

function getTwitterCard(value: unknown) {
  if (!value || typeof value !== "object") return undefined;
  if (!("card" in value)) return undefined;
  return value.card;
}

describe("public metadata", () => {
  test("sets canonical, robots, and social metadata for public pages", () => {
    expect(homeMetadata.alternates?.canonical).toBe("/");
    expect(homeMetadata.robots).toMatchObject({ index: true, follow: true });
    expect(homeMetadata.openGraph?.url).toBe("/");
    expect(getTwitterCard(homeMetadata.twitter)).toBe("summary");

    expect(generalMetadata.alternates?.canonical).toBe("/kinly/general");
    expect(generalMetadata.robots).toMatchObject({ index: true, follow: true });
    expect(generalMetadata.openGraph?.siteName).toBe("Kinly by MakingLifeEasie");
    expect(getTwitterCard(generalMetadata.twitter)).toBe("summary");

    expect(getMetadata.alternates?.canonical).toBe("/kinly/get");
    expect(getMetadata.robots).toMatchObject({ index: true, follow: true });
    expect(getMetadata.openGraph?.siteName).toBe("Kinly by MakingLifeEasie");

    expect(marketIndexMetadata.alternates?.canonical).toBe("/kinly/market");
    expect(marketIndexMetadata.robots).toMatchObject({ index: true, follow: true });
    expect(marketIndexMetadata.openGraph?.url).toBe("/kinly/market");

    expect(flatAgreementsMetadata.alternates?.canonical).toBe("/kinly/market/flat-agreements");
    expect(flatAgreementsMetadata.robots).toMatchObject({ index: true, follow: true });
    expect(flatAgreementsMetadata.openGraph?.siteName).toBe("Kinly by MakingLifeEasie");
  });

  test("serves explicit crawler rules for the public site", () => {
    const result = robots();
    expect(result.host).toBe("https://go.makinglifeeasie.com");
    expect(result.sitemap).toBe("https://go.makinglifeeasie.com/sitemap.xml");
    expect(result.rules).toEqual([
      {
        userAgent: "*",
        allow: ["/", "/kinly/", "/fallback"],
        disallow: ["/tools/qr"],
      },
    ]);
  });

  test("adds Google site verification when configured", () => {
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = "google-verification-token";

    const metadata = buildSiteMetadata();
    expect(metadata.verification).toMatchObject({
      google: "google-verification-token",
    });

    delete process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  });
});
