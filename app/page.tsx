// app/page.tsx
import { KinlyButton } from "../components/button/KinlyButton";
import { KinlyCard } from "../components/card/KinlyCard";

export default function HomePage() {
  return (
    <main className="k-page">
      <section className="k-shell">
        <header className="k-hero">
          <p className="k-eyebrow">Kinly</p>
          <h1 className="k-h1">Living together feels lighter.</h1>
          <p className="k-subtitle">
            A calm place for house norms, invites, and shared home pages.
          </p>

          <div className="k-row">
            <KinlyButton variant="filled" href="/get">
              Get the app
            </KinlyButton>

            <KinlyButton variant="outlined" href="/h/demo">
              View a demo house norms page
            </KinlyButton>
          </div>
        </header>

        <KinlyCard variant="section">
          <h2 className="k-h2">What this site does</h2>
          <ul className="k-list">
            <li>Opens the right app store for your device</li>
            <li>Holds an invite link so you can join after sign-in</li>
            <li>Shows public house norms pages (when a home publishes)</li>
          </ul>
          <p className="k-muted">
            If you’re already in a Kinly home, open the Kinly app to continue.
          </p>
        </KinlyCard>
      </section>
    </main>
  );
}
