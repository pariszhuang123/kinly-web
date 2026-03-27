import type { Metadata } from "next";
import CandidateResultClient from "./CandidateResultClient";
import { buildPublicMetadata } from "../../../../../lib/publicMetadata";
import { getDetectedCountryCode } from "../../../../../lib/geo";
import { getDetectedPlatform } from "../../../../../lib/platform";

export const metadata: Metadata = buildPublicMetadata({
  title: "Kinly | Fit Check Result",
  description: "View your personalized fit check reflection and continue into Kinly.",
  path: "/kinly/fit-check/result",
  siteName: "Kinly by MakingLifeEasie",
  index: false,
  follow: false,
});

type Props = {
  params: Promise<{ submissionId: string }>;
};

export default async function FitCheckResultPage({ params }: Props) {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  const { submissionId } = await params;

  return (
    <CandidateResultClient
      submissionId={submissionId}
      detectedCountryCode={detectedCountryCode}
      detectedPlatform={detectedPlatform}
    />
  );
}
