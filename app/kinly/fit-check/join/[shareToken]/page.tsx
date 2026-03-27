import type { Metadata } from "next";
import CandidateJoinClient from "./CandidateJoinClient";
import { buildPublicMetadata } from "../../../../../lib/publicMetadata";
import { getDetectedCountryCode } from "../../../../../lib/geo";

export const metadata: Metadata = buildPublicMetadata({
  title: "Kinly | Flatmate Fit Check",
  description: "Complete the flatmate fit check and share how you live day to day.",
  path: "/kinly/fit-check/join",
  siteName: "Kinly by MakingLifeEasie",
  index: false,
  follow: false,
});

type Props = {
  params: Promise<{ shareToken: string }>;
};

export default async function FitCheckJoinPage({ params }: Props) {
  const detectedCountryCode = await getDetectedCountryCode();
  const { shareToken } = await params;

  return <CandidateJoinClient shareToken={shareToken} detectedCountryCode={detectedCountryCode} />;
}
