import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { familyAdultsConfig } from "../configs/familyAdults";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/family-adults",
  "Kinly | When your adult children still live at home",
  "Shared household expectations without pulling rank. Kinly helps families with adult children set clear contributions without awkward conversations.",
);

export default async function FamilyAdultsPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={familyAdultsConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={familyAdultsConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
