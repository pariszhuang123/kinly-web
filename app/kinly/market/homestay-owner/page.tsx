import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { homestayOwnerConfig } from "../configs/homestayOwner";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/homestay-owner",
  "Kinly | A gentler welcome for homestay families",
  "Reduce emotional labour while keeping family rhythms clear. Kinly supports calm, caring homestays without monitoring or scoring.",
);

export default async function HomestayOwnerPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={homestayOwnerConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={homestayOwnerConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
