import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { lowTalkConfig } from "../configs/lowTalk";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Signals over speeches",
  description:
    "Clarity without long conversations. See what needs doing without group-chat essays. Kinly gives calm signals, not pressure.",
};

export default async function LowTalkPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={lowTalkConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
