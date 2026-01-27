import { headers } from "next/headers";

const COUNTRY_REGEX = /^[A-Z]{2}$/;

export async function getDetectedCountryCode(): Promise<string | null> {
  const h = await headers();
  const fromHeader =
    h.get("x-kinly-country") ||
    h.get("x-vercel-ip-country") ||
    h.get("x-country-code") ||
    h.get("cf-ipcountry");

  if (!fromHeader) return null;

  const normalized = fromHeader.trim().toUpperCase();
  if (!COUNTRY_REGEX.test(normalized)) return null;
  return normalized;
}
