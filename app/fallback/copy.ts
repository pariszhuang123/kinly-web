export type FallbackLocale = "en" | "es" | "ar";

export type FallbackCopy = {
  title: string;
  goKinly: string;
  imageAlt: string;
};

const FALLBACK_COPY: Record<FallbackLocale, FallbackCopy> = {
  en: {
    title: "This page could not be found in Kinly.",
    goKinly: "Go to Kinly",
    imageAlt: "Kinly themed 404 illustration",
  },
  es: {
    title: "Esta ruta aun no esta lista.",
    goKinly: "Ir a Kinly",
    imageAlt: "Ilustracion 404 con tema de Kinly",
  },
  ar: {
    title: "هذه الصفحة غير متاحة حالياً في Kinly.",
    goKinly: "اذهب إلى Kinly",
    imageAlt: "صورة 404 بطابع Kinly",
  },
};

function normalizeLanguage(value: string | null): string {
  if (!value) return "en";
  const first = value.split(",")[0]?.trim().toLowerCase() ?? "en";
  const withoutQuality = first.split(";")[0]?.trim() ?? "en";
  return withoutQuality.split("-")[0] ?? "en";
}

export function resolveFallbackLocale(preferredLanguage: string | null): FallbackLocale {
  const normalized = normalizeLanguage(preferredLanguage);
  if (normalized === "es" || normalized === "ar") {
    return normalized;
  }
  return "en";
}

export function resolveFallbackContent(preferredLanguage: string | null) {
  const locale = resolveFallbackLocale(preferredLanguage);
  return {
    isRtl: locale === "ar",
    copy: FALLBACK_COPY[locale],
  };
}
