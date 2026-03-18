import type { MetadataRoute } from "next";
import { getPublicSiteBaseUrl, getPublicSitePaths } from "../lib/publicRoutes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getPublicSiteBaseUrl();

  return getPublicSitePaths().map((path) => ({
    url: new URL(path, baseUrl).toString(),
  }));
}
