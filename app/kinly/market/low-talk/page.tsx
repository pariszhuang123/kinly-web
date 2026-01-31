import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { lowTalkConfig } from "../configs/lowTalk";
import { getDetectedCountryCode } from "../../../../lib/geo";

export default async function LowTalkPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={lowTalkConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
