import ScenarioLandingClient from "../../ScenarioLandingClient";
import { thriftFirstConfig } from "../../configs/thriftFirst";

type Props = {
  params: { locale: string };
};

export default function ThriftFirstLocalePage({ params }: Props) {
  return <ScenarioLandingClient config={thriftFirstConfig} localeOverride={params.locale} />;
}
