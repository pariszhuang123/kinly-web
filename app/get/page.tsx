import type { Metadata } from "next";
import { Suspense } from "react";
import GetClient from "./GetClient";

export const metadata: Metadata = {
  title: "Get the app",
};

export default function GetPage() {
  return (
    <Suspense fallback={<div className="k-shell">Loading…</div>}>
      <GetClient />
    </Suspense>
  );
}
