import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { sgHouseOwnerHelperAlignmentConfig } from "../configs/sgHouseOwnerHelperAlignment";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Calm alignment for SG homes with helpers",
  description:
    "Align expectations and feedback in a shared household without surveillance, scoring, or emotional escalation.",
};

export default async function SgHelperAlignmentPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient
        config={sgHouseOwnerHelperAlignmentConfig}
        detectedCountryCode={detectedCountryCode}
      />
    </Suspense>
  );
}
