import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { familyTeensConfig } from "../configs/familyTeens";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | Stop repeating yourself to your teenagers",
  description:
    "Household expectations visible to everyone — so you stop being the nag and they start seeing what needs doing.",
};

export default async function FamilyTeensPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={familyTeensConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={familyTeensConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
