import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { freshersConfig } from "../configs/freshers";

export default function FreshersPage() {
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={freshersConfig} />
    </Suspense>
  );
}
