import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "Kinly",
  description: "Recognition-first landing page for Kinly.",
};

export default function HomePage() {
  return <LandingClient />;
}
