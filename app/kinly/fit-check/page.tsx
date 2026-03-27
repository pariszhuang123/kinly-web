import type { Metadata } from "next";
import OwnerFitCheckClient from "./OwnerFitCheckClient";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import { getDetectedCountryCode } from "../../../lib/geo";
import { getDetectedPlatform } from "../../../lib/platform";

export const metadata: Metadata = buildPublicMetadata({
  title: "Kinly | Flatmate Fit Check",
  description:
    "Create an anonymous flatmate fit check, share it with applicants, and unlock the full applicant inbox in the Kinly app.",
  path: "/kinly/fit-check",
  siteName: "Kinly by MakingLifeEasie",
});

export default async function FitCheckPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);

  return (
    <OwnerFitCheckClient
      detectedCountryCode={detectedCountryCode}
      detectedPlatform={detectedPlatform}
    />
  );
}
