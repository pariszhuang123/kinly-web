import type { Metadata } from "next";

import { getPublicMetadataBase } from "./publicMetadata";

const DEFAULT_DESCRIPTION =
  "MakingLifeEasie builds Kinly and other calm, human-paced tools for shared living.";

export function buildSiteMetadata(): Metadata {
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

  return {
    metadataBase: getPublicMetadataBase(),
    title: {
      default: "MakingLifeEasie",
      template: "%s - MakingLifeEasie",
    },
    description: DEFAULT_DESCRIPTION,
    verification: googleVerification
      ? {
          google: googleVerification,
        }
      : undefined,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      siteName: "MakingLifeEasie",
      title: "MakingLifeEasie",
      description: DEFAULT_DESCRIPTION,
      url: "/",
    },
    twitter: {
      card: "summary",
      title: "MakingLifeEasie",
      description: DEFAULT_DESCRIPTION,
    },
  };
}
