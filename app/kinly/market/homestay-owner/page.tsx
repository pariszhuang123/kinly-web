import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { homestayOwnerConfig } from "../configs/homestayOwner";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | A gentler welcome for homestay families",
  description:
    "Reduce emotional labour while keeping family rhythms clear. Kinly supports calm, caring homestays without monitoring or scoring.",
};

export default async function HomestayOwnerPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={homestayOwnerConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
