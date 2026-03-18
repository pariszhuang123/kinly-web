import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { homestayOwnerConfig } from "../configs/homestayOwner";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | A gentler welcome for homestay families",
  description:
    "Reduce emotional labour while keeping family rhythms clear. Kinly supports calm, caring homestays without monitoring or scoring.",
};

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
