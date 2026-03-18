import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { headTenantConfig } from "../configs/headTenant";
import { getDetectedCountryCode } from "../../../../lib/geo";

export const metadata: Metadata = {
  title: "Kinly | Share the load without being the boss",
  description:
    "Reduce the pressure of being the default organiser. Kinly keeps shared expectations clear without surveillance or reporting.",
};

export default async function HeadTenantPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return (
    <>
      <ScenarioLandingContent config={headTenantConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient config={headTenantConfig} detectedCountryCode={detectedCountryCode} />
      </Suspense>
    </>
  );
}
