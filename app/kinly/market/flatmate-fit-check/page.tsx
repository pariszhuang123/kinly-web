import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { flatmateFitCheckConfig } from "../configs/flatmateFitCheck";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/flatmate-fit-check",
  "Kinly | Anonymous flat vibe check before the interview",
  "Help head tenants and lived-in landlords spot likely day-to-day friction before move-in with an anonymous flatmate fit check.",
);

export default async function FlatmateFitCheckPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={flatmateFitCheckConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={flatmateFitCheckConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
