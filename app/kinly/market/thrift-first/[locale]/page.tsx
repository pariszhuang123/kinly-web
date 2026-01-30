import { Suspense } from "react";
import ScenarioLandingClient from "../../ScenarioLandingClient";
import { thriftFirstConfig } from "../../configs/thriftFirst";

type Props = {
  params: { locale: string };
};

export default function ThriftFirstLocalePage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={thriftFirstConfig} localeOverride={params.locale} />
    </Suspense>
  );
}
