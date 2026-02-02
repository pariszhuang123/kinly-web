import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { studentWellbeingInfrastructureConfig } from "../configs/studentWellbeingInfrastructure";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Student wellbeing infrastructure",
  description:
    "Preventative wellbeing infrastructure for shared living. Kinly helps cohorts align expectations and reduce silent conflict.",
};

export default async function StudentWellbeingInfrastructurePage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={studentWellbeingInfrastructureConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
