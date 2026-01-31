import type { Metadata } from "next";

import { Suspense } from "react";
import LandingClient from "./LandingClient";
import { getDetectedCountryCode } from "../../../lib/geo";
import ScenarioLandingClient from "../market/ScenarioLandingClient";
import { getScenarioConfig } from "../market/configs";

export const metadata: Metadata = {
  title: { absolute: "Kinly | Shared living gets lighter" },
  description:
    "A calmer way to live together. Notice what the home needs before anyone feels blamed. Private by default, no ads, no surveillance.",
};

type PageProps = {
  searchParams: Promise<{ entry?: string | string[] | null }>;
};

export default async function KinlyGeneralPage({ searchParams }: PageProps) {
  const detectedCountryCode = await getDetectedCountryCode();
  const params = await searchParams;
  const rawEntry = params?.entry ?? null;
  const entry = Array.isArray(rawEntry) ? rawEntry[0] ?? null : rawEntry;
  const scenarioConfig = getScenarioConfig(entry);

  if (scenarioConfig) {
    return (
      <Suspense fallback={null}>
        <ScenarioLandingClient config={scenarioConfig} detectedCountryCode={detectedCountryCode} />
      </Suspense>
    );
  }

  return <LandingClient detectedCountryCode={detectedCountryCode} />;
}
