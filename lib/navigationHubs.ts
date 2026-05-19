export type QuickLinkCard = {
  name: string;
  description: string;
  href: string;
  cta: string;
  mark: string;
  useLogo?: boolean;
};

export type DirectoryCard = {
  name: string;
  description: string;
  href: string;
  cta: string;
};

export const quickLinkCards: readonly QuickLinkCard[] = [
  {
    name: "withYou",
    description: "Audio-based support flows and the main public withYou landing page.",
    href: "/withyou",
    cta: "Open withYou",
    mark: "wY",
  },
  {
    name: "Kinly",
    description: "A short directory for the Kinly app landing page and Kinly QR tools.",
    href: "/kinly/overview",
    cta: "Open Kinly",
    mark: "kinly",
    useLogo: true,
  },
  {
    name: "Portfolio",
    description: "A dedicated list of case studies and working prototypes.",
    href: "/portfolio",
    cta: "View portfolio",
    mark: "PF",
  },
] as const;

export const portfolioCaseStudies: readonly DirectoryCard[] = [
  {
    name: "Orders to Capacity",
    description: "Manufacturing planning case study covering capacity, inventory, forecast variance, and management action.",
    href: "/portfolio/orders-to-capacity",
    cta: "Open orders-to-capacity",
  },
  {
    name: "Evnex Control Tower",
    description: "Quote-to-active operational control prototype for pipeline visibility and action ownership.",
    href: "/portfolio/evnex-control-tower",
    cta: "Open Evnex case study",
  },
  {
    name: "Contractor Negotiation Playbook",
    description: "Decision-support prototype for negotiating scope, pricing, and contractor structure.",
    href: "/portfolio/contractor-negotiation-playbook",
    cta: "Open negotiation playbook",
  },
] as const;

export const kinlyDirectoryLinks: readonly DirectoryCard[] = [
  {
    name: "Kinly App",
    description: "The main Kinly landing page for shared living tools, scenarios, and store access.",
    href: "/kinly/general",
    cta: "Open Kinly app",
  },
  {
    name: "Kinly QR Code",
    description: "The QR generator hub for short links, cards, and share-ready QR outputs.",
    href: "/tools/qr",
    cta: "Open QR hub",
  },
] as const;
