/**
 * Store badge configuration for localized App Store and Google Play badges.
 *
 * Apple and Google provide official localized badges. Add the appropriate
 * SVG files to /public and register them here.
 *
 * Official badge sources:
 * - Apple: https://developer.apple.com/app-store/marketing/guidelines/
 * - Google: https://play.google.com/intl/en_us/badges/
 */

export type StoreBadges = {
  apple: string;
  play: string;
};

const DEFAULT_BADGES: StoreBadges = {
  apple: "/apple-store.svg",
  play: "/google-play.svg",
};

/**
 * Localized badge paths keyed by language code.
 * Add entries here as you add localized badge SVGs to /public.
 */
const LOCALIZED_BADGES: Record<string, Partial<StoreBadges>> = {
  ar: {
    apple: "/apple-store-ar.svg",
    play: "/google-play-ar.svg",
  },
  es: {
    apple: "/apple-store-es.svg",
    play: "/google-play-es.svg",
  },
};

/**
 * Returns the appropriate store badge paths for a given language.
 * Falls back to English badges if localized versions aren't available.
 */
export function resolveStoreBadges(lang: string | null): StoreBadges {
  if (!lang) return DEFAULT_BADGES;

  const key = lang.split("-")[0]?.toLowerCase() ?? "en";
  const localized = LOCALIZED_BADGES[key];

  if (!localized) return DEFAULT_BADGES;

  return {
    apple: localized.apple ?? DEFAULT_BADGES.apple,
    play: localized.play ?? DEFAULT_BADGES.play,
  };
}
