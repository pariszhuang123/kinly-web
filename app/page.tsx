import type { Metadata } from "next";

import { KinlyButton, KinlyCard, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../components";

export const metadata: Metadata = {
  title: { absolute: "MakingLifeEasie" },
  description: "Company home for MakingLifeEasie and its products.",
};

export default function HomePage() {
  return (
    <main>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <KinlyStack direction="vertical" gap="xs">
            <KinlyHeading level={1}>MakingLifeEasie</KinlyHeading>
            <KinlyText variant="bodyMedium" tone="muted">
              We build calm, human-paced tools for shared living and beyond.
            </KinlyText>
          </KinlyStack>

          <KinlyCard variant="surface">
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Kinly</KinlyHeading>
              <KinlyText variant="bodyMedium">
                Our first product, designed to make shared homes feel lighter before asking anyone to do more.
              </KinlyText>
              <KinlyButton variant="filled" href="/kinly/general">
                Explore Kinly
              </KinlyButton>
            </KinlyStack>
          </KinlyCard>

          <KinlyStack direction="vertical" gap="xs">
            <KinlyHeading level={2}>More to come</KinlyHeading>
            <KinlyText variant="bodyMedium" tone="muted">
              This space will grow as we share additional products and company updates.
            </KinlyText>
          </KinlyStack>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
