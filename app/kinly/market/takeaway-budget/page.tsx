import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { takeawayBudgetFlatsConfig } from "../configs/takeawayBudget";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Takeaway nights without awkwardness",
  description:
    "Take turns on dinner without tracking who owes what. Kinly shows who covers tonight and keeps things fair over time.",
};

export default async function TakeawayBudgetPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={takeawayBudgetFlatsConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
