import ScenarioLandingClient from "../ScenarioLandingClient";
import { thriftFirstConfig } from "../configs/thriftFirst";

export default function ThriftFirstPage() {
  return <ScenarioLandingClient config={thriftFirstConfig} />;
}
