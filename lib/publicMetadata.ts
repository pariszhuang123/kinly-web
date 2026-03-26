import type { Metadata } from "next";

import { getPublicSiteBaseUrl } from "./publicRoutes";

type PublicMetadataInput = {
  title: Metadata["title"];
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
  siteName?: string;
};

export function getPublicMetadataBase(): URL {
  return new URL(getPublicSiteBaseUrl());
}

export function buildPublicMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
  siteName = "MakingLifeEasie",
}: PublicMetadataInput): Metadata {
  const socialTitle = resolveSocialTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow,
    },
    openGraph: {
      type: "website",
      siteName,
      title: socialTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}

function resolveSocialTitle(title: Metadata["title"]): string | undefined {
  if (typeof title === "string") return title;
  if (!title || typeof title !== "object") return undefined;
  if ("absolute" in title && typeof title.absolute === "string") return title.absolute;
  if ("default" in title && typeof title.default === "string") return title.default;
  return undefined;
}
