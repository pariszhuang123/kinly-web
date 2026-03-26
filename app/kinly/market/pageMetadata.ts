import type { Metadata } from "next";

import { buildPublicMetadata } from "../../../lib/publicMetadata";

export function buildScenarioMetadata(path: string, title: string, description: string): Metadata {
  return buildPublicMetadata({
    title,
    description,
    path,
    siteName: "Kinly by MakingLifeEasie",
  });
}
