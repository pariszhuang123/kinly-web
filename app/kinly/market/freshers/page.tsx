import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { freshersConfig } from "../configs/freshers";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | First-year flat calm",
  description:
    "Move-in chaos without the tension. Keep the flat calm while everyone figures things out. Kinly makes norms visible so first-year flats stay kind.",
};

export default async function FreshersPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={freshersConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={freshersConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
