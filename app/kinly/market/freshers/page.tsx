import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { freshersConfig } from "../configs/freshers";
import { getDetectedCountryCode } from "../../../../lib/geo";

export default async function FreshersPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={freshersConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
