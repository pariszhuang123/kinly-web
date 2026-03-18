import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { liveInLandlordConfig } from "../configs/liveInLandlord";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | Calm shared living for live-in landlords",
  description:
    "Reduce emotional load and keep shared expectations clear without surveillance. Kinly keeps the home calm and responsible.",
};

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
