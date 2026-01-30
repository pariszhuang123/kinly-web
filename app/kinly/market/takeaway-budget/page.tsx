import ScenarioLandingClient from "../ScenarioLandingClient";
import { takeawayBudgetConfig } from "../configs/takeawayBudget";

export default function TakeawayBudgetPage() {
  return <ScenarioLandingClient config={takeawayBudgetConfig} />;
}
