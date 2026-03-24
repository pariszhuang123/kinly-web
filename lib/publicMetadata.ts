import type { Metadata } from "next";

import { getPublicSiteBaseUrl } from "./publicRoutes";

type PublicMetadataInput = {
  title: Metadata["title"];
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
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
}: PublicMetadataInput): Metadata {
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
  };
}
