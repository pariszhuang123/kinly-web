import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { thriftFirstConfig } from "../configs/thriftFirst";

export default function ThriftFirstPage() {
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={thriftFirstConfig} />
    </Suspense>
  );
}
