import { scenarioConfigs } from "../app/kinly/market/configs";
import { PRODUCTION_HOST } from "./shortLinkResolver";

const STATIC_PUBLIC_PATHS = [
  "/",
  "/fallback",
  "/kinly/general",
  "/kinly/get",
];

export function getPublicSiteBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!explicit) return PRODUCTION_HOST;

  try {
    const parsed = new URL(explicit);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return PRODUCTION_HOST;
  }
}

export function getPublicSitePaths(): string[] {
  const marketPaths = Object.keys(scenarioConfigs)
    .sort((left, right) => left.localeCompare(right))
    .map((slug) => `/kinly/market/${slug}`);

  return [...STATIC_PUBLIC_PATHS, ...marketPaths];
}

export function getPublicSiteUrls(): string[] {
  const baseUrl = getPublicSiteBaseUrl();
  return getPublicSitePaths().map((path) => new URL(path, baseUrl).toString());
}
