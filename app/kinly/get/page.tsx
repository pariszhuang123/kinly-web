import type { Metadata } from "next";
import { Suspense } from "react";
import GetClient from "./GetClient";
import { KinlyShell, KinlyText } from "../../../components";
import { getDetectedCountryCode } from "../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Get the app",
  description:
    "Download Kinly for iOS or Android. Express interest if Kinly is not yet available in your area — we will email you when it opens.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function sanitizeNextParam(next?: string | string[] | null): string | null {
  if (!next) return null;
  const value = Array.isArray(next) ? next[0] : next;
  if (!value) return null;
  if (!value.startsWith("/")) return null;
  if (value.startsWith("//")) return null;
  return value;
}

export default async function GetPage({ searchParams }: Props) {
  const detectedCountryCode = await getDetectedCountryCode();
  const params = await searchParams;
  const nextParam = sanitizeNextParam(params?.next ?? null);

  return (
    <Suspense
      fallback={
        <KinlyShell>
          <KinlyText variant="bodyMedium">Loading...</KinlyText>
        </KinlyShell>
      }
    >
      <GetClient detectedCountryCode={detectedCountryCode} sourcePath={nextParam} />
    </Suspense>
  );
}
