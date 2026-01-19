import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../components";

export default function HomePage() {
  return (
    <main>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <header>
            <KinlyStack direction="vertical" gap="m" align="center">
              <KinlyText variant="labelMedium" tone="muted">
                Kinly
              </KinlyText>
              <KinlyHeading level={1}>
                Living together feels lighter.
              </KinlyHeading>
              <KinlyText variant="bodyLarge" tone="muted">
                A calm place for house norms, invites, and shared home pages.
              </KinlyText>

              <KinlyStack direction="horizontal" gap="m" justify="center" wrap>
                <KinlyButton variant="filled" href="/get">
                  Get the app
                </KinlyButton>
                <KinlyButton variant="outlined" href="/h/demo">
                  View a demo house norms page
                </KinlyButton>
              </KinlyStack>
            </KinlyStack>
          </header>

          <KinlyCard variant="surfaceContainerHigh">
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>What this site does</KinlyHeading>
              <ul>
                <li>
                  <KinlyText variant="bodyMedium" as="span">
                    Opens the right app store for your device
                  </KinlyText>
                </li>
                <li>
                  <KinlyText variant="bodyMedium" as="span">
                    Holds an invite link so you can join after sign-in
                  </KinlyText>
                </li>
                <li>
                  <KinlyText variant="bodyMedium" as="span">
                    Shows public house norms pages (when a home publishes)
                  </KinlyText>
                </li>
              </ul>
              <KinlyText variant="bodySmall" tone="muted">
                If you&apos;re already in a Kinly home, open the Kinly app to
                continue.
              </KinlyText>
            </KinlyStack>
          </KinlyCard>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
