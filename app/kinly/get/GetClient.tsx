"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  KinlyCard,
  KinlyButton,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
  KinlyInput,
} from "../../../components";
import { getCountries } from "../../../lib/countries";
import { submitInterest } from "../../../lib/interestCapture";
import { detectUiLocale } from "../../../lib/outreachTracking";
import { resolveGetCopy } from "./copy";
import styles from "./GetClient.module.css";

type GetClientProps = {
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

  return [normalizedLanguage, normalizedScript, normalizedRegion, remainder]
    .filter(Boolean)
    .join("-");
}

function isValidLocale(tag: string) {
  const trimmed = tag.trim();
  if (!trimmed) return false;
  if (trimmed.length < 2 || trimmed.length > 35) return false;
  if (/\s/.test(trimmed)) return false;

  return /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(trimmed);
}

export default function GetClient({ detectedCountryCode, sourcePath }: GetClientProps) {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState(() => {
    const detectedFromParams = searchParams?.get("country");
    const normalizedParam =
      detectedFromParams && countryRegex.test(detectedFromParams.trim().toUpperCase())
        ? detectedFromParams.trim().toUpperCase()
        : null;
    if (normalizedParam) return normalizedParam;
    if (detectedCountryCode && countryRegex.test(detectedCountryCode.trim().toUpperCase())) {
      return detectedCountryCode.trim().toUpperCase();
    }
    return "";
  });
  const [uiLocale, setUiLocale] = useState("en");
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
  const [nowTs, setNowTs] = useState<number>(() => Date.now());
  const [showRedirectNotice, setShowRedirectNotice] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogTitleId = "redirect-dialog-title";
  const dialogDescId = "redirect-dialog-description";

  const inviteCode = searchParams.get("code");
  const home = searchParams.get("home");
  const detectedCountry = useMemo(
    () => (detectedCountryCode ? detectedCountryCode.trim().toUpperCase() : null),
    [detectedCountryCode],
  );

  useEffect(() => {
    const detected = detectUiLocale();
    if (!detected) return;
    setUiLocale((current) => (current === "en" ? detected : current));
  }, []);

  useEffect(() => {
    if (!cooldownUntil) return;
    const id = window.setInterval(() => {
      setNowTs(Date.now());
    }, 1000);
    return () => window.clearInterval(id);
  }, [cooldownUntil]);

  useEffect(() => {
    if (cooldownUntil && nowTs >= cooldownUntil) {
      setCooldownUntil(null);
    }
  }, [cooldownUntil, nowTs]);

  useEffect(() => {
    if (!showRedirectNotice || redirectCountdown === null) return;
    if (redirectCountdown <= 0) return;
    const id = window.setTimeout(() => {
      setRedirectCountdown((prev) => (typeof prev === "number" ? Math.max(0, prev - 1) : prev));
    }, 1000);
    return () => window.clearTimeout(id);
  }, [redirectCountdown, showRedirectNotice]);

  useEffect(() => {
    if (!showRedirectNotice) return;
    const id = window.setTimeout(() => {
      window.location.assign("/kinly/general");
    }, 3000);
    return () => window.clearTimeout(id);
  }, [showRedirectNotice]);

  useEffect(() => {
    if (!showRedirectNotice) return;
    overlayRef.current?.focus();
  }, [showRedirectNotice]);

  const resolvedLocale = useMemo(() => {
    if (isValidLocale(uiLocale)) {
      return normalizeLocale(uiLocale);
    }
    return "en";
  }, [uiLocale]);
  const language = useMemo(
    () => resolvedLocale.split("-")[0]?.toLowerCase() ?? "en",
    [resolvedLocale],
  );
  const copy = useMemo(() => resolveGetCopy(language), [language]);

  const countries = useMemo(() => getCountries(resolvedLocale || "en"), [resolvedLocale]);
  const countryNameMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of countries) {
      map.set(c.code, c.name);
    }
    return map;
  }, [countries]);
  const filteredCountries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return countries;

    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query) ||
        country.code.toLowerCase().includes(query),
    );
  }, [countries, searchTerm]);

  const emailValid = emailRegex.test(email.trim());
  const countryValid = countryRegex.test(countryCode.trim().toUpperCase());
  const localeValid = Boolean(resolvedLocale);
  const cooldownRemaining = cooldownUntil
    ? Math.max(0, Math.ceil((cooldownUntil - nowTs) / 1000))
    : 0;
  const canSubmit =
    emailValid && countryValid && localeValid && status !== "submitting" && cooldownRemaining === 0;

  useEffect(() => {
    if (countryCode || !detectedCountry) return;
    setCountryCode(detectedCountry);
  }, [countryCode, detectedCountry]);

  function mapErrorMessage(code?: string | null) {
    if (!code) return copy.errorGeneric;
    if (code.startsWith("LEADS_RATE_LIMIT")) {
      return copy.errorRateLimit;
    }
    if (code === "LEADS_EMAIL_INVALID" || code === "LEADS_EMAIL_TOO_SHORT" || code === "LEADS_EMAIL_TOO_LONG") {
      return copy.errorEmailInvalid;
    }
    if (code === "LEADS_COUNTRY_CODE_INVALID") {
      return copy.errorCountryInvalid;
    }
    if (code === "LEADS_UI_LOCALE_INVALID") {
      return copy.errorLocaleInvalid;
    }
    if (code === "SUPABASE_CONFIG_MISSING") {
      return copy.errorConfigMissing;
    }
    return copy.errorGeneric;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const trimmedEmail = email.trim();
      const trimmedCountry = countryCode.trim().toUpperCase();
      const result = await submitInterest({
        email: trimmedEmail,
        country_code: trimmedCountry,
        ui_locale: resolvedLocale,
        source: "kinly_web_get",
      });

      if (!result.ok) {
        const message = mapErrorMessage(result.error);
        if (result.error && result.error.startsWith("LEADS_RATE_LIMIT")) {
          setCooldownUntil(Date.now() + COOLDOWN_MS);
        }
        throw new Error(message);
      }

      setStatus("success");
      setShowRedirectNotice(true);
      setRedirectCountdown(3);

      if (typeof window !== "undefined") {
        const interestMarker = {
          country_code: trimmedCountry,
          ui_locale: resolvedLocale,
          captured_at: new Date().toISOString(),
          detected_country_code: detectedCountry ?? null,
          source_path: sourcePath ?? null,
        };
        try {
          window.localStorage.setItem("kinly_interest_status", JSON.stringify(interestMarker));
        } catch {
          // best effort; ignore storage failures
        }
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : copy.errorGeneric);
    }
  }

  return (
    <main>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <KinlyStack direction="vertical" gap="xs">
            <KinlyHeading level={1}>{copy.title}</KinlyHeading>
            {inviteCode || home ? (
              <KinlyText variant="bodySmall" tone="info">
                {inviteCode
                  ? `${copy.inviteDetected} ${inviteCode}`
                  : home
                    ? `${copy.homeDetected} ${home}`
                    : null}
              </KinlyText>
            ) : null}
          </KinlyStack>

          <KinlyCard variant="surface">
            <form className={styles.form} onSubmit={handleSubmit}>
              <KinlyStack direction="vertical" gap="m">
                <KinlyStack direction="vertical" gap="xxs">
                  <KinlyText variant="bodyMedium" tone="muted">{copy.lead}</KinlyText>
                </KinlyStack>

                <KinlyInput
                  label={copy.emailLabel}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  placeholder={copy.emailPlaceholder}
                  error={email ? (emailValid ? undefined : copy.emailError) : undefined}
                />

                <div className={styles.countrySection}>
                  <KinlyInput
                    label={copy.countryLabel}
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value.toUpperCase())}
                    placeholder={copy.countryPlaceholder}
                    autoComplete="country"
                    required
                    error={countryCode ? (countryValid ? undefined : copy.countryError) : undefined}
                  />
                  {detectedCountry ? (
                    <KinlyText variant="bodySmall" tone="muted">
                      {copy.detectedCountryPrefix} {detectedCountry}
                      {countryNameMap.get(detectedCountry)
                        ? ` (${countryNameMap.get(detectedCountry)})`
                        : null}
                    </KinlyText>
                  ) : null}

                  <div className={styles.countryPicker}>
                    <KinlyInput
                      label={copy.searchLabel}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
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
                      {filteredCountries.length > 3 ? null : null}
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
                  <KinlyCard variant="surface">
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
                  <KinlyButton variant="outlined" href="/kinly/general">
                    {copy.backCta}
                  </KinlyButton>
                </KinlyStack>
              </KinlyStack>
            </form>
          </KinlyCard>
        </KinlyStack>
      </KinlyShell>

      {showRedirectNotice ? (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          aria-describedby={dialogDescId}
          ref={overlayRef}
          tabIndex={-1}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setShowRedirectNotice(false);
              setRedirectCountdown(null);
            }
          }}
        >
          <div className={styles.overlayCard}>
            <KinlyCard variant="surfaceContainerHigh">
              <KinlyStack direction="vertical" gap="m" align="start">
                <div id={dialogTitleId}>
                  <KinlyHeading level={3}>{copy.redirectTitle}</KinlyHeading>
                </div>
                <div id={dialogDescId}>
                  <KinlyText variant="bodyMedium">{copy.redirectBody}</KinlyText>
                </div>
                <KinlyText variant="bodySmall" tone="muted">
                  {copy.redirectCountdown.replace("{seconds}", String(redirectCountdown ?? 0))}
                </KinlyText>
                <KinlyStack direction="horizontal" gap="s">
                  <KinlyButton variant="filled" onClick={() => window.location.assign("/kinly/general")}>
                    {copy.redirectGoNow}
                  </KinlyButton>
                  <KinlyButton
                    variant="ghost"
                    onClick={() => {
                      setShowRedirectNotice(false);
                      setRedirectCountdown(null);
                    }}
                  >
                    {copy.redirectStay}
                  </KinlyButton>
                </KinlyStack>
              </KinlyStack>
            </KinlyCard>
          </div>
        </div>
      ) : null}
    </main>
  );
}

