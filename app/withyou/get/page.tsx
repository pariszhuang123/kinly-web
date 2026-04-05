import type { Metadata } from "next";
import WithYouGetClient from "./WithYouGetClient";
import { getDetectedCountryCode } from "../../../lib/geo";
import { buildPublicMetadata } from "../../../lib/publicMetadata";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "withYou | Get updates" },
  description: "Join the withYou list to hear when new languages, downloadable packs, and public launches are available.",
  path: "/withyou/get",
  siteName: "withYou by MakingLifeEasie",
});

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function sanitizeNextParam(next?: string | string[] | null): string | null {
  if (!next) return null;
  const value = Array.isArray(next) ? next[0] : next;
  if (!value || !value.startsWith("/") || value.startsWith("//")) return null;
  return value;
}

export default async function WithYouGetPage({ searchParams }: PageProps) {
  const [detectedCountryCode, params] = await Promise.all([getDetectedCountryCode(), searchParams]);
  const nextParam = sanitizeNextParam(params?.next ?? null);

  return <WithYouGetClient detectedCountryCode={detectedCountryCode} sourcePath={nextParam} />;
}
