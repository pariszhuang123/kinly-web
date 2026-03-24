import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { sgHelperOnboardingConfig } from "../configs/sgHelperOnboarding";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/sg-helper-onboarding",
  "Kinly | Welcome a new helper with visible expectations",
  "Your home runs on hundreds of routines. Give your new helper a visible reference from day one - not just your memory.",
);

export default async function SgHelperOnboardingPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={sgHelperOnboardingConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={sgHelperOnboardingConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
