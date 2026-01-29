import type { Metadata } from "next";

import LandingClient from "./LandingClient";
import { getDetectedCountryCode } from "../../../lib/geo";

export const metadata: Metadata = {
  title: { absolute: "Kinly | Shared living gets lighter" },
  description: "Recognition-first marketing surface for Kinly.",
};

export default async function KinlyGeneralPage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return <LandingClient detectedCountryCode={detectedCountryCode} />;
}
