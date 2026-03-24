import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { liveInLandlordConfig } from "../configs/liveInLandlord";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/live-in-landlord",
  "Kinly | Calm shared living for live-in landlords",
  "Reduce emotional load and keep shared expectations clear without surveillance. Kinly keeps the home calm and responsible.",
);

export default async function LiveInLandlordPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={liveInLandlordConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={liveInLandlordConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
