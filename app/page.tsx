import type { Metadata } from "next";
import LandingClient from "./LandingClient";
import { getDetectedCountryCode } from "../lib/geo";

export const metadata: Metadata = {
  title: "Kinly",
  description: "Recognition-first landing page for Kinly.",
};

export default async function HomePage() {
  const detectedCountryCode = await getDetectedCountryCode();
  return <LandingClient detectedCountryCode={detectedCountryCode} />;
}
