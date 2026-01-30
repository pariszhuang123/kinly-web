import { Suspense } from "react";
import ScenarioLandingClient from "../../ScenarioLandingClient";
import { freshersConfig } from "../../configs/freshers";

type Props = {
  params: { locale: string };
};

export default function FreshersLocalePage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={freshersConfig} localeOverride={params.locale} />
    </Suspense>
  );
}
