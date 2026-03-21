import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { sgHelperDriftConfig } from "../configs/sgHelperDrift";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | Reset expectations calmly with your long-term helper",
  description:
    "Expectations drift over years. Kinly helps you recalibrate together — without it feeling like a complaint.",
};

export default async function SgHelperDriftPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={sgHelperDriftConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={sgHelperDriftConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
