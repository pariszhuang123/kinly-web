import { describe, expect, test } from "vitest";

import robots from "../app/robots";
import { metadata as homeMetadata } from "../app/page";
import { metadata as generalMetadata } from "../app/kinly/general/page";
import { metadata as getMetadata } from "../app/kinly/get/page";
import { metadata as flatAgreementsMetadata } from "../app/kinly/market/flat-agreements/page";

describe("public metadata", () => {
  test("sets a canonical URL and indexable robots for public pages", () => {
    expect(homeMetadata.alternates?.canonical).toBe("/");
    expect(homeMetadata.robots).toMatchObject({ index: true, follow: true });

    expect(generalMetadata.alternates?.canonical).toBe("/kinly/general");
    expect(generalMetadata.robots).toMatchObject({ index: true, follow: true });

    expect(getMetadata.alternates?.canonical).toBe("/kinly/get");
    expect(getMetadata.robots).toMatchObject({ index: true, follow: true });

    expect(flatAgreementsMetadata.alternates?.canonical).toBe("/kinly/market/flat-agreements");
    expect(flatAgreementsMetadata.robots).toMatchObject({ index: true, follow: true });
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
});
