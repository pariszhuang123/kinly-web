import ScenarioLandingClient from "../../ScenarioLandingClient";
import { takeawayBudgetConfig } from "../../configs/takeawayBudget";

type Props = {
  params: { locale: string };
};

export default function TakeawayBudgetLocalePage({ params }: Props) {
  return <ScenarioLandingClient config={takeawayBudgetConfig} localeOverride={params.locale} />;
}
