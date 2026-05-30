import type { Metadata } from "next";
import { Suspense } from "react";
import { KinlyShell, KinlyText } from "../../components";
import { getPianoLandingVideos } from "../../lib/pianoLanding";
import { buildPublicMetadata } from "../../lib/publicMetadata";
import PianoLandingClient from "./PianoLandingClient";

export const metadata: Metadata = buildPublicMetadata({
  title: "Piano Lessons | Fun first, creativity always",
  description:
    "A piano teaching page focused on making music fun, building practice at home, and helping children grow into creativity before formal classical study.",
  path: "/piano",
  siteName: "MakingLifeEasie",
});

export default async function PianoPage() {
  const videos = getPianoLandingVideos();

  return (
    <Suspense
      fallback={
        <KinlyShell>
          <KinlyText variant="bodyMedium">Loading...</KinlyText>
        </KinlyShell>
      }
    >
      <PianoLandingClient videos={videos} />
    </Suspense>
  );
}
