import ScenarioLandingClient from "../ScenarioLandingClient";
import { freshersConfig } from "../configs/freshers";

export default function FreshersPage() {
  return <ScenarioLandingClient config={freshersConfig} />;
}
