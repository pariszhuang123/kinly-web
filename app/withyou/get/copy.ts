export type WithYouGetCopy = {
  title: string;
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
};

const ENGLISH: WithYouGetCopy = {
  title: "Get withYou updates",
  lead: "Tell us your email and country so we can notify you when withYou expands to more languages and markets.",
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
  submitCta: "Join the withYou list",
  backCta: "Back to withYou",
  successHeading: "You are on the list.",
  successBody: "We will email you when withYou launches more languages, packs, or markets.",
  cooldownMessage: "Too many tries right now - wait 30 seconds and try again.",
  errorGeneric: "Something went wrong. Please try again.",
  errorRateLimit: "Too many tries right now - wait 30 seconds and try again.",
  errorEmailInvalid: "Enter a valid email.",
  errorCountryInvalid: "Use a 2-letter country code.",
  errorLocaleInvalid: "Locale detection failed. Please refresh and try again.",
  errorConfigMissing: "Form not ready yet. Please try again later.",
};

const CHINESE: WithYouGetCopy = {
  title: "获取 withYou 更新",
  lead: "留下邮箱和国家/地区，我们会在 withYou 支持更多语言、音频包或市场时通知你。",
  emailLabel: "邮箱",
  emailPlaceholder: "you@example.com",
  emailError: "请输入有效邮箱。",
  countryLabel: "国家/地区",
  countryPlaceholder: "国家代码（例如 US）",
  countryError: "请输入 2 位国家代码。",
  detectedCountryPrefix: "检测到的国家/地区：",
  searchLabel: "搜索国家/地区",
  searchPlaceholder: "输入以筛选",
  searchAriaLabel: "国家/地区",
  submitCta: "加入 withYou 名单",
  backCta: "返回 withYou",
  successHeading: "你已加入名单。",
  successBody: "withYou 上线更多语言、音频包或市场时，我们会发邮件通知你。",
  cooldownMessage: "当前尝试过多，请等待 30 秒后再试。",
  errorGeneric: "发生错误，请稍后再试。",
  errorRateLimit: "当前尝试过多，请等待 30 秒后再试。",
  errorEmailInvalid: "请输入有效邮箱。",
  errorCountryInvalid: "请输入 2 位国家代码。",
  errorLocaleInvalid: "语言检测失败，请刷新后重试。",
  errorConfigMissing: "表单暂时不可用，请稍后再试。",
};

export function resolveWithYouGetCopy(lang: string | null): WithYouGetCopy {
  const key = lang?.split("-")[0]?.toLowerCase();
  return key === "zh" ? CHINESE : ENGLISH;
}
