import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { takeawayBudgetFlatsConfig } from "../configs/takeawayBudget";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/takeaway-budget",
  "Kinly | Takeaway nights without awkwardness",
  "Take turns on dinner without tracking who owes what. Kinly shows who covers tonight and keeps things fair over time.",
);

export default async function TakeawayBudgetPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={takeawayBudgetFlatsConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={takeawayBudgetFlatsConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
