import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { thriftFirstConfig } from "../configs/thriftFirst";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Thrift first without the mess",
  description:
    "Coordinate secondhand finds and pickups calmly. Kinly shows shared preferences so thrift finds work for everyone.",
};

export default async function ThriftFirstPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={thriftFirstConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
