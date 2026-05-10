import type { Metadata } from "next";

import { ContractorNegotiationPlaybook } from "../../../components";
import { buildPublicMetadata } from "../../../lib/publicMetadata";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "MakingLifeEasie | Contractor Negotiation Playbook" },
  description:
    "A private-use portfolio prototype for handling CEO negotiation questions about scope, pricing, and structure.",
  path: "/portfolio/contractor-negotiation-playbook",
  index: false,
  follow: false,
});

export default function ContractorNegotiationPlaybookPage() {
  return <ContractorNegotiationPlaybook />;
}
