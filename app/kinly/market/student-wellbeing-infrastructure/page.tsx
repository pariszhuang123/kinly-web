import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { studentWellbeingInfrastructureConfig } from "../configs/studentWellbeingInfrastructure";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";
import { buildScenarioMetadata } from "../pageMetadata";

export const metadata: Metadata = buildScenarioMetadata(
  "/kinly/market/student-wellbeing-infrastructure",
  "Kinly | Student wellbeing infrastructure",
  "Preventative wellbeing infrastructure for shared living. Kinly helps cohorts align expectations and reduce silent conflict.",
);

export default async function StudentWellbeingInfrastructurePage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={studentWellbeingInfrastructureConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={studentWellbeingInfrastructureConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
