// app/get/page.tsx
"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { KinlyButton } from "../../components/button/KinlyButton";
import { KinlyCard } from "../../components/card/KinlyCard";

const STORAGE_INVITE_KEY = "kinly_invite_id";
const STORAGE_RETURN_KEY = "kinly_return_path";

// TODO: replace with your real links
const APP_STORE_URL = "https://apps.apple.com/app/kinly/id6756508378"; // put your Kinly App Store link
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly"; // put your Kinly Google Play link

// TODO: replace with your real deep link scheme (example only)
function buildDeepLink(inviteId?: string | null, returnPath?: string | null) {
  const base = "kinly://open";
  const params = new URLSearchParams();
  if (inviteId) params.set("i", inviteId);
  if (returnPath) params.set("r", returnPath);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

export default function GetPage() {
  const searchParams = useSearchParams();

  const inviteId = searchParams.get("i");
  const returnPath = searchParams.get("r");

  const deepLink = useMemo(
    () => buildDeepLink(inviteId, returnPath),
    [inviteId, returnPath]
  );

  useEffect(() => {
    // Persist invite/return so the app can resume after sign-in
    if (inviteId) localStorage.setItem(STORAGE_INVITE_KEY, inviteId);
    if (returnPath) localStorage.setItem(STORAGE_RETURN_KEY, returnPath);
  }, [inviteId, returnPath]);

  return (
    <main className="k-page">
      <section className="k-shell">
        <header className="k-hero">
          <p className="k-eyebrow">Kinly</p>
          <h1 className="k-h1">Get Kinly</h1>
          <p className="k-subtitle">
            If you have an invite, we’ll keep it ready for you after sign-in.
          </p>

          <div className="k-row">
            <KinlyButton variant="filled" href={deepLink}>
              Open Kinly
            </KinlyButton>

            <KinlyButton variant="outlined" href={APP_STORE_URL}>
              Get on iPhone
            </KinlyButton>

            <KinlyButton variant="outlined" href={PLAY_STORE_URL}>
              Get on Android
            </KinlyButton>
          </div>
        </header>

        <KinlyCard variant="section">
          <h2 className="k-h2">What happens next</h2>
          <ul className="k-list">
            <li>Download Kinly from your app store</li>
            <li>Sign in with Apple or Google</li>
            <li>Kinly will use your invite to join the right home</li>
          </ul>

          {inviteId ? (
            <p className="k-muted">Invite saved: {inviteId}</p>
          ) : (
            <p className="k-muted">No invite detected — you can still install Kinly.</p>
          )}
        </KinlyCard>
      </section>
    </main>
  );
}
