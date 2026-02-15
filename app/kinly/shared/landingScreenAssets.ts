export type LandingScreenLocale = "en" | "es" | "ar";
export type LandingScreenKey =
  | "today"
  | "manage"
  | "hub"
  | "flows"
  | "groceries"
  | "bills"
  | "checkins";

export const LANDING_SCREEN_ASSETS: Record<LandingScreenLocale, Record<LandingScreenKey, string>> = {
  en: {
    today: "/images/app_screens/en/today.webp",
    manage: "/images/app_screens/en/manage.webp",
    hub: "/images/app_screens/en/hub.webp",
    flows: "/images/app_screens/en/flows.webp",
    groceries: "/images/app_screens/en/groceries.webp",
    bills: "/images/app_screens/en/bills.webp",
    checkins: "/images/app_screens/en/checkins.webp",
  },
  es: {
    today: "/images/app_screens/es/today.webp",
    manage: "/images/app_screens/es/manage.webp",
    hub: "/images/app_screens/es/hub.webp",
    flows: "/images/app_screens/es/flows.webp",
    groceries: "/images/app_screens/es/groceries.webp",
    bills: "/images/app_screens/es/bills.webp",
    checkins: "/images/app_screens/es/checkins.webp",
  },
  ar: {
    today: "/images/app_screens/ar/today.webp",
    manage: "/images/app_screens/ar/manage.webp",
    hub: "/images/app_screens/ar/hub.webp",
    flows: "/images/app_screens/ar/flows.webp",
    groceries: "/images/app_screens/ar/groceries.webp",
    bills: "/images/app_screens/ar/bills.webp",
    checkins: "/images/app_screens/ar/checkins.webp",
  },
};

export function resolveLandingScreenAsset(locale: string | null, key: LandingScreenKey): string {
  const normalized = locale?.split("-")[0]?.toLowerCase() as LandingScreenLocale | undefined;
  if (normalized && LANDING_SCREEN_ASSETS[normalized]?.[key]) {
    return LANDING_SCREEN_ASSETS[normalized][key];
  }
  return LANDING_SCREEN_ASSETS.en[key];
}
