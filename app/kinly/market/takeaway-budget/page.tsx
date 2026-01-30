import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { takeawayBudgetConfig } from "../configs/takeawayBudget";

export default function TakeawayBudgetPage() {
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={takeawayBudgetConfig} />
    </Suspense>
  );
}
