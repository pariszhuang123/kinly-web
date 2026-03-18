import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { lowTalkConfig } from "../configs/lowTalk";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | Signals over speeches",
  description:
    "Clarity without long conversations. See what needs doing without group-chat essays. Kinly gives calm signals, not pressure.",
};

export default async function LowTalkPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={lowTalkConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={lowTalkConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
