import type { Metadata } from "next";

import { FallbackClient } from "./FallbackClient";
import { buildPublicMetadata } from "../../lib/publicMetadata";

export const metadata: Metadata = buildPublicMetadata({
  title: "Fallback | Kinly",
  description: "Fallback help for Kinly links when the requested destination is unavailable.",
  path: "/fallback",
});

export default function FallbackPage() {
  return <FallbackClient />;
}
