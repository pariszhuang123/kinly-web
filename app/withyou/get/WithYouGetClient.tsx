"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyInput,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../components";
import { getCountries } from "../../../lib/countries";
import { submitInterest } from "../../../lib/interestCapture";
import { detectUiLocale } from "../../../lib/outreachTracking";
import { resolveWithYouGetCopy } from "./copy";
import styles from "../../kinly/get/GetClient.module.css";

type Props = {
  detectedCountryCode: string | null;
  sourcePath: string | null;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const COOLDOWN_MS = 30_000;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const countryRegex = /^[A-Z]{2}$/;

function normalizeLocale(tag: string) {
  const trimmed = tag.trim();
  if (!trimmed) return "";
  const parts = trimmed.split(/[-_]/).filter(Boolean);
  if (parts.length === 0) return "";

  const [language, maybeScript, maybeRegion, ...rest] = parts;
  const normalizedLanguage = language.toLowerCase();
  const normalizedScript =
    maybeScript && maybeScript.length === 4
      ? maybeScript[0].toUpperCase() + maybeScript.slice(1).toLowerCase()
      : undefined;
  const normalizedRegion =
    maybeScript && maybeScript.length === 2
      ? maybeScript.toUpperCase()
      : maybeRegion && maybeRegion.length === 2
        ? maybeRegion.toUpperCase()
        : undefined;
  const remainder = rest.length ? rest.join("-") : undefined;
  return [normalizedLanguage, normalizedScript, normalizedRegion, remainder].filter(Boolean).join("-");
}

function isValidLocale(tag: string) {
  const trimmed = tag.trim();
  return /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(trimmed);
}

export default function WithYouGetClient({ detectedCountryCode, sourcePath }: Props) {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState(() => {
    const fromQuery = searchParams?.get("country");
    if (fromQuery && countryRegex.test(fromQuery.trim().toUpperCase())) {
      return fromQuery.trim().toUpperCase();
    }
    if (detectedCountryCode && countryRegex.test(detectedCountryCode.trim().toUpperCase())) {
      return detectedCountryCode.trim().toUpperCase();
    }
    return "";
  });
  const [uiLocale] = useState(() => detectUiLocale() ?? "en");
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
  const [nowTs, setNowTs] = useState<number>(() => Date.now());

  useEffect(() => {
    if (!cooldownUntil) return;
    const id = window.setInterval(() => setNowTs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [cooldownUntil]);

  const resolvedLocale = useMemo(() => {
    if (isValidLocale(uiLocale)) return normalizeLocale(uiLocale);
    return "en";
  }, [uiLocale]);
  const language = useMemo(() => resolvedLocale.split("-")[0]?.toLowerCase() ?? "en", [resolvedLocale]);
  const copy = useMemo(() => resolveWithYouGetCopy(language), [language]);
  const countries = useMemo(() => getCountries(resolvedLocale), [resolvedLocale]);
  const countryNameMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const country of countries) {
      map.set(country.code, country.name);
    }
    return map;
  }, [countries]);
  const filteredCountries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return countries;
    return countries.filter(
      (country) => country.name.toLowerCase().includes(query) || country.code.toLowerCase().includes(query),
    );
  }, [countries, searchTerm]);

  const emailValid = emailRegex.test(email.trim());
  const countryValid = countryRegex.test(countryCode.trim().toUpperCase());
  const cooldownRemaining = cooldownUntil ? Math.max(0, Math.ceil((cooldownUntil - nowTs) / 1000)) : 0;
  const canSubmit = emailValid && countryValid && status !== "submitting" && cooldownRemaining === 0;

  function mapError(code?: string | null) {
    if (!code) return copy.errorGeneric;
    if (code.startsWith("LEADS_RATE_LIMIT")) return copy.errorRateLimit;
    if (code === "LEADS_EMAIL_INVALID" || code === "LEADS_EMAIL_TOO_SHORT" || code === "LEADS_EMAIL_TOO_LONG") {
      return copy.errorEmailInvalid;
    }
    if (code === "LEADS_COUNTRY_CODE_INVALID") return copy.errorCountryInvalid;
    if (code === "LEADS_UI_LOCALE_INVALID") return copy.errorLocaleInvalid;
    if (code === "SUPABASE_CONFIG_MISSING") return copy.errorConfigMissing;
    return copy.errorGeneric;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setErrorMessage(null);

    const trimmedCountry = countryCode.trim().toUpperCase();
    const result = await submitInterest({
      email: email.trim(),
      country_code: trimmedCountry,
      ui_locale: resolvedLocale,
      source: "withyou_web_get",
    });

    if (!result.ok) {
      if (result.error?.startsWith("LEADS_RATE_LIMIT")) {
        setCooldownUntil(Date.now() + COOLDOWN_MS);
      }
      setStatus("error");
      setErrorMessage(mapError(result.error));
      return;
    }

    setStatus("success");

    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(
          "withyou_interest_status",
          JSON.stringify({
            country_code: trimmedCountry,
            ui_locale: resolvedLocale,
            captured_at: new Date().toISOString(),
            source_path: sourcePath,
          }),
        );
      } catch {
        // best effort only
      }
    }
  }

  return (
    <main>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <KinlyStack direction="vertical" gap="xs">
            <KinlyHeading level={1}>{copy.title}</KinlyHeading>
            <KinlyText variant="bodyMedium" tone="muted">
              {copy.lead}
            </KinlyText>
          </KinlyStack>

          <KinlyCard variant="surface">
            <form className={styles.form} onSubmit={handleSubmit}>
              <KinlyStack direction="vertical" gap="m">
                <KinlyInput
                  label={copy.emailLabel}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                  placeholder={copy.emailPlaceholder}
                  error={email ? (emailValid ? undefined : copy.emailError) : undefined}
                />

                <div className={styles.countrySection}>
                  <KinlyInput
                    label={copy.countryLabel}
                    value={countryCode}
                    onChange={(event) => setCountryCode(event.target.value.toUpperCase())}
                    placeholder={copy.countryPlaceholder}
                    autoComplete="country"
                    required
                    error={countryCode ? (countryValid ? undefined : copy.countryError) : undefined}
                  />
                  {detectedCountryCode ? (
                    <KinlyText variant="bodySmall" tone="muted">
                      {copy.detectedCountryPrefix} {detectedCountryCode}
                      {countryNameMap.get(detectedCountryCode) ? ` (${countryNameMap.get(detectedCountryCode)})` : null}
                    </KinlyText>
                  ) : null}

                  <div className={styles.countryPicker}>
                    <KinlyInput
                      label={copy.searchLabel}
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder={copy.searchPlaceholder}
                    />

                    <div className={styles.countryList} role="listbox" aria-label={copy.searchAriaLabel}>
                      {filteredCountries.slice(0, 3).map((country) => (
                        <div key={country.code} className={styles.countryOption}>
                          <KinlyButton
                            type="button"
                            variant={country.code === countryCode ? "filled" : "ghost"}
                            size="md"
                            onClick={() => {
                              setCountryCode(country.code);
                              setSearchTerm("");
                            }}
                            aria-selected={country.code === countryCode ? "true" : "false"}
                          >
                            <span className={styles.countryName}>
                              {country.name}{" "}
                              <KinlyText variant="labelSmall" as="span" tone="muted">
                                ({country.code})
                              </KinlyText>
                            </span>
                          </KinlyButton>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {status === "error" && errorMessage ? (
                  <KinlyText variant="bodySmall" tone="danger">
                    {errorMessage}
                  </KinlyText>
                ) : null}

                {cooldownRemaining > 0 ? (
                  <KinlyText variant="bodySmall" tone="warning">
                    {copy.cooldownMessage}
                  </KinlyText>
                ) : null}

                {status === "success" ? (
                  <KinlyCard variant="surfaceContainer">
                    <KinlyStack direction="vertical" gap="xs">
                      <KinlyHeading level={3}>{copy.successHeading}</KinlyHeading>
                      <KinlyText variant="bodyMedium">{copy.successBody}</KinlyText>
                    </KinlyStack>
                  </KinlyCard>
                ) : null}

                <KinlyStack direction="horizontal" gap="m" align="center">
                  <KinlyButton type="submit" variant="filled" disabled={!canSubmit} isLoading={status === "submitting"}>
                    {copy.submitCta}
                  </KinlyButton>
                  <KinlyButton variant="outlined" href={sourcePath ?? "/withyou/uber"}>
                    {copy.backCta}
                  </KinlyButton>
                </KinlyStack>
              </KinlyStack>
            </form>
          </KinlyCard>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
