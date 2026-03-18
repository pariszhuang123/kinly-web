import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { internationalStartConfig } from "../configs/internationalStart";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Clarity in a new place",
  description:
    "New place, unclear norms. See what the home needs before anyone has to explain it. Settle in calmly with shared clarity.",
};

export default async function NewPlacePage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <>
      <ScenarioLandingContent config={internationalStartConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient config={internationalStartConfig} detectedCountryCode={detectedCountryCode} />
      </Suspense>
    </>
  );
}
