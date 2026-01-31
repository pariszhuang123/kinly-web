export type GetCopy = {
  title: string;
  inviteDetected: string;
  homeDetected: string;
  lead: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailError: string;
  countryLabel: string;
  countryPlaceholder: string;
  countryError: string;
  detectedCountryPrefix: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  submitCta: string;
  backCta: string;
  successHeading: string;
  successBody: string;
  cooldownMessage: string;
  errorGeneric: string;
  errorRateLimit: string;
  errorEmailInvalid: string;
  errorCountryInvalid: string;
  errorLocaleInvalid: string;
  errorConfigMissing: string;
  redirectTitle: string;
  redirectBody: string;
  redirectCountdown: string;
  redirectGoNow: string;
  redirectStay: string;
};

const BASE_COPY: GetCopy = {
  title: "Get Kinly",
  inviteDetected: "Invite code detected:",
  homeDetected: "Home detected:",
  lead: "We'll email you when Kinly opens in your area — no spam.",
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  emailError: "Enter a valid email.",
  countryLabel: "Country",
  countryPlaceholder: "Country code (e.g., US)",
  countryError: "Use a 2-letter code.",
  detectedCountryPrefix: "Detected country:",
  searchLabel: "Search countries",
  searchPlaceholder: "Type to filter",
  searchAriaLabel: "Countries",
  submitCta: "Request access",
  backCta: "Back to home",
  successHeading: "Thanks - we got it.",
  successBody: "We will let you know when Kinly is ready in your area.",
  cooldownMessage: "Too many tries right now — wait 30 seconds and try again.",
  errorGeneric: "Something went wrong. Please try again.",
  errorRateLimit: "Too many tries right now — wait 30 seconds and try again.",
  errorEmailInvalid: "Enter a valid email.",
  errorCountryInvalid: "Use a 2-letter country code.",
  errorLocaleInvalid: "Locale detection failed. Please refresh and try again.",
  errorConfigMissing: "Form not ready yet. Please try again later.",
  redirectTitle: "You are on the list.",
  redirectBody:
    "We saved your spot and will take you to the Kinly story next so you can see what to expect.",
  redirectCountdown: "Redirecting in {seconds}s...",
  redirectGoNow: "Go now",
  redirectStay: "Stay here",
};

const COPY_OVERRIDES: Record<string, Partial<GetCopy>> = {
  es: {
    title: "Consigue Kinly",
    inviteDetected: "Código de invitación detectado:",
    homeDetected: "Hogar detectado:",
    lead: "Te enviaremos un correo cuando Kinly esté disponible en tu zona; sin spam.",
    emailLabel: "Correo",
    emailPlaceholder: "tu@ejemplo.com",
    emailError: "Ingresa un correo válido.",
    countryLabel: "País",
    countryPlaceholder: "Código de país (ej., US)",
    countryError: "Usa un código de 2 letras.",
    detectedCountryPrefix: "País detectado:",
    searchLabel: "Buscar países",
    searchPlaceholder: "Escribe para filtrar",
    searchAriaLabel: "Países",
    submitCta: "Solicitar acceso",
    backCta: "Volver al inicio",
    successHeading: "Gracias, lo recibimos.",
    successBody: "Te avisaremos cuando Kinly esté listo en tu zona.",
    cooldownMessage: "Demasiados intentos ahora; espera 30 segundos e inténtalo de nuevo.",
    errorGeneric: "Algo salió mal. Inténtalo de nuevo.",
    errorRateLimit: "Demasiados intentos ahora; espera 30 segundos e inténtalo de nuevo.",
    errorEmailInvalid: "Ingresa un correo válido.",
    errorCountryInvalid: "Usa un código de país de 2 letras.",
    errorLocaleInvalid: "Falló la detección de idioma. Recarga e inténtalo otra vez.",
    errorConfigMissing: "El formulario aún no está listo. Inténtalo más tarde.",
    redirectTitle: "Ya estás en la lista.",
    redirectBody:
      "Guardamos tu lugar y te llevaremos a la historia de Kinly para que veas qué esperar.",
    redirectCountdown: "Redirigiendo en {seconds}s...",
    redirectGoNow: "Ir ahora",
    redirectStay: "Quedarme aquí",
  },
};

export function resolveGetCopy(lang: string | null): GetCopy {
  const key = lang?.split("-")[0]?.toLowerCase() ?? "en";
  const overrides = COPY_OVERRIDES[key] ?? null;
  return overrides ? { ...BASE_COPY, ...overrides } : BASE_COPY;
}
