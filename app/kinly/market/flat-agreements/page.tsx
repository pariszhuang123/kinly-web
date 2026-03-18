import type { Metadata } from "next";
import { Suspense } from "react";
import ScenarioLandingContent from "../ScenarioLandingContent";
import ScenarioLandingClient from "../ScenarioLandingClient";
import { flatAgreementsConfig } from "../configs/flatAgreements";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

export const metadata: Metadata = {
  title: "Kinly | Know what your housemates agree on",
  description:
    "Make shared expectations visible without house politics. Kinly keeps shared homes fair and predictable.",
};

export default async function FlatAgreementsPage() {
  const [detectedCountryCode, detectedPlatform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);
  return (
    <>
      <ScenarioLandingContent config={flatAgreementsConfig} />
      <Suspense fallback={null}>
        <ScenarioLandingClient
          config={flatAgreementsConfig}
          detectedCountryCode={detectedCountryCode}
          detectedPlatform={detectedPlatform}
        />
      </Suspense>
    </>
  );
}
