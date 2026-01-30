import { Suspense } from "react";
import ScenarioLandingClient from "../../ScenarioLandingClient";
import { takeawayBudgetConfig } from "../../configs/takeawayBudget";

type Props = {
  params: { locale: string };
};

export default function TakeawayBudgetLocalePage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={takeawayBudgetConfig} localeOverride={params.locale} />
    </Suspense>
  );
}
