import { Suspense } from "react";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { thriftFirstConfig } from "../configs/thriftFirst";
import { getDetectedCountryCode } from "../../../../lib/geo";

export default async function ThriftFirstPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <Suspense fallback={null}>
      <ScenarioLandingClient config={thriftFirstConfig} detectedCountryCode={detectedCountryCode} />
    </Suspense>
  );
}
