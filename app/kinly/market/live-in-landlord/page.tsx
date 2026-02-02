import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { liveInLandlordConfig } from "../configs/liveInLandlord";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Calm shared living for live-in landlords",
  description:
    "Reduce emotional load and keep shared expectations clear without surveillance. Kinly keeps the home calm and responsible.",
};

export default async function LiveInLandlordPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={liveInLandlordConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
