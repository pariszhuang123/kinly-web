import type { Metadata } from "next";
import { Suspense } from "react";
import GetClient from "./GetClient";
import { KinlyShell, KinlyText } from "../../components";

export const metadata: Metadata = {
  title: "Get the app",
};

export default function GetPage() {
  return (
    <Suspense
      fallback={
        <KinlyShell>
          <KinlyText variant="bodyMedium">Loading…</KinlyText>
        </KinlyShell>
      }
    >
      <GetClient />
    </Suspense>
  );
}
