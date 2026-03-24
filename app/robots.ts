import type { MetadataRoute } from "next";

import { getPublicSiteBaseUrl } from "../lib/publicRoutes";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getPublicSiteBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/kinly/", "/fallback"],
        disallow: ["/tools/qr"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
