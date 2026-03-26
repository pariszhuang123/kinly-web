import type { Metadata } from "next";

import { Suspense } from "react";
import LandingClient from "./LandingClient";
import { getDetectedCountryCode } from "../../../lib/geo";
import { getDetectedPlatform } from "../../../lib/platform";
import ScenarioLandingClient from "../market/ScenarioLandingClient";
import ScenarioLandingContent from "../market/ScenarioLandingContent";
import { getScenarioConfig } from "../market/configs";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import { createSoftwareApplicationStructuredData, StructuredDataScript } from "../../../lib/structuredData";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly by MakingLifeEasie | Shared living gets lighter" },
  description:
    "Kinly is a shared living app from MakingLifeEasie. Notice what the home needs before anyone feels blamed. Private by default, no ads, no surveillance.",
  path: "/kinly/general",
  siteName: "Kinly by MakingLifeEasie",
});

type PageProps = {
  searchParams: Promise<{ entry?: string | string[] | null }>;
};

export default async function KinlyGeneralPage({ searchParams }: PageProps) {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  const params = await searchParams;
  const rawEntry = params?.entry ?? null;
  const entry = Array.isArray(rawEntry) ? rawEntry[0] ?? null : rawEntry;
  const scenarioConfig = getScenarioConfig(entry);

  if (scenarioConfig) {
    return (
      <>
        <StructuredDataScript data={createSoftwareApplicationStructuredData()} />
        <ScenarioLandingContent config={scenarioConfig} />
        <Suspense fallback={null}>
          <ScenarioLandingClient
            config={scenarioConfig}
            detectedCountryCode={detectedCountryCode}
            detectedPlatform={detectedPlatform}
          />
        </Suspense>
      </>
    );
  }

  return (
    <>
      <StructuredDataScript data={createSoftwareApplicationStructuredData()} />
      <LandingClient detectedCountryCode={detectedCountryCode} detectedPlatform={detectedPlatform} />
    </>
  );
}
