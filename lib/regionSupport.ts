const SUPPORTED_REGION_CODES = ["SG", "MY"] as const;

type AvailabilityLocale = "en" | "es";

const SUPPORTED_REGION_SET = new Set<string>(SUPPORTED_REGION_CODES);

function normalizeCountryCode(countryCode: string | null | undefined) {
  if (!countryCode) return "";
  return countryCode.trim().toUpperCase();
}

function getLocaleBase(locale: string) {
  return locale.split("-")[0]?.toLowerCase() || "en";
}

function getRegionDisplayName(code: string, locale: string) {
  if (typeof Intl === "undefined" || typeof Intl.DisplayNames === "undefined") {
    return code;
  }

  try {
    const formatter = new Intl.DisplayNames([locale], { type: "region" });
    return formatter.of(code) ?? code;
  } catch {
    return code;
  }
}

function formatRegionList(names: string[], locale: string) {
  if (names.length <= 1) return names[0] ?? "";

  if (typeof Intl !== "undefined" && typeof Intl.ListFormat === "function") {
    try {
      const formatter = new Intl.ListFormat([locale], { style: "long", type: "conjunction" });
      return formatter.format(names);
    } catch {
      // Fall through to simple conjunction formatting.
    }
  }

  const base = getLocaleBase(locale);
  const conjunction = base === "es" ? "y" : "and";

  if (names.length === 2) {
    return `${names[0]} ${conjunction} ${names[1]}`;
  }

  return `${names.slice(0, -1).join(", ")}, ${conjunction} ${names[names.length - 1]}`;
}

export function getSupportedRegionCodes() {
  return [...SUPPORTED_REGION_CODES];
}

export function isSupportedRegion(countryCode: string | null | undefined) {
  const normalized = normalizeCountryCode(countryCode);
  return SUPPORTED_REGION_SET.has(normalized);
}

export function formatSupportedRegions(locale = "en") {
  const names = SUPPORTED_REGION_CODES.map((code) => getRegionDisplayName(code, locale));
  return formatRegionList(names, locale);
}

export function getGeneralAvailabilityBody(locale: AvailabilityLocale = "en") {
  const supportedRegions = formatSupportedRegions(locale);
  if (locale === "es") {
    return `Kinly esta disponible en ${supportedRegions}. Te avisaremos cuando abra en tu zona; sin spam.`;
  }

  return `Kinly is currently available in ${supportedRegions}. We'll email you when Kinly opens in your area. No spam.`;
}

export function getScenarioAvailabilityBody(locale: AvailabilityLocale = "en") {
  const supportedRegions = formatSupportedRegions(locale);
  if (locale === "es") {
    return `Kinly esta disponible en ${supportedRegions}. Te avisaremos cuando abra en tu region.`;
  }

  return `Kinly is currently available in ${supportedRegions}. We will email you when Kinly opens in your area.`;
}
