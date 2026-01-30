import ScenarioLandingClient from "../../ScenarioLandingClient";
import { freshersConfig } from "../../configs/freshers";

type Props = {
  params: { locale: string };
};

export default function FreshersLocalePage({ params }: Props) {
  return <ScenarioLandingClient config={freshersConfig} localeOverride={params.locale} />;
}
