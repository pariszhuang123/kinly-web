"use client";

import { useSearchParams } from "next/navigation";
import { KinlyCard } from "../../components/card/KinlyCard";
import { KinlyButton } from "../../components/button/KinlyButton";

export default function GetClient() {
  const searchParams = useSearchParams();

  // Example usage (adjust to your needs)
  const code = searchParams.get("code");
  const home = searchParams.get("home");

  return (
    <main className="k-page">
      <section className="k-shell">
        <KinlyCard title="Get Kinly">
          <p className="k-muted">
            {code
              ? `Invite code: ${code}`
              : home
                ? `Home: ${home}`
                : "Open Kinly on your phone to continue."}
          </p>

          <div className="k-row">
            <KinlyButton variant="filled" href="#">
              Open the app
            </KinlyButton>

            <KinlyButton variant="outlined" href="/">
              Back to home
            </KinlyButton>
          </div>
        </KinlyCard>
      </section>
    </main>
  );
}
