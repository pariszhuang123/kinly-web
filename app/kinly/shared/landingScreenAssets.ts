export type LandingScreenLocale = "en" | "es" | "ar";
export type LandingScreenKey = "today" | "manage" | "hub";

export const LANDING_SCREEN_ASSETS: Record<LandingScreenLocale, Record<LandingScreenKey, string>> = {
  en: {
    today: "/images/app_screens/en/today.webp",
    manage: "/images/app_screens/en/manage.webp",
    hub: "/images/app_screens/en/hub.webp",
  },
  es: {
    today: "/images/app_screens/es/today.webp",
    manage: "/images/app_screens/es/manage.webp",
    hub: "/images/app_screens/es/hub.webp",
  },
  ar: {
    today: "/images/app_screens/ar/today.webp",
    manage: "/images/app_screens/ar/manage.webp",
    hub: "/images/app_screens/ar/hub.webp",
  },
};
