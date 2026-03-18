import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { internationalStartConfig } from "../configs/internationalStart";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | Clarity in a new place",
  description:
    "New place, unclear norms. See what the home needs before anyone has to explain it. Settle in calmly with shared clarity.",
};

export default async function NewPlacePage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={internationalStartConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={internationalStartConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
