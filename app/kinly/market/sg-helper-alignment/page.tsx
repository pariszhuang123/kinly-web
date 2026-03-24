import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { sgHouseOwnerHelperAlignmentConfig } from "../configs/sgHouseOwnerHelperAlignment";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/sg-helper-alignment",
  "Kinly | Calm alignment for SG homes with helpers",
  "Align expectations and feedback in a shared household without surveillance, scoring, or emotional escalation.",
);

export default async function SgHelperAlignmentPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={sgHouseOwnerHelperAlignmentConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={sgHouseOwnerHelperAlignmentConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
