import type { Metadata } from "next";
import PollClient from "./PollClient";
import { getDetectedCountryCode } from "../../../../lib/geo";

type PollPageParams = Promise<{
  slug: string;
}>;

type PollPageProps = {
  params: PollPageParams;
};

export const metadata: Metadata = {
  title: "Kinly | UC Poll",
  description: "Share your view in this quick UC poll and compare local responses.",
};

export default async function PollPage({ params }: PollPageProps) {
  const resolvedParams = await params;
  const detectedCountryCode = await getDetectedCountryCode();

  return (
    <PollClient
      slug={resolvedParams.slug}
      detectedCountryCode={detectedCountryCode}
    />
  );
}
