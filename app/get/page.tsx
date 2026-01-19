import { Suspense } from "react";
import GetClient from "./GetClient";

export default function GetPage() {
  return (
    <Suspense fallback={<div className="k-shell">Loading…</div>}>
      <GetClient />
    </Suspense>
  );
}
