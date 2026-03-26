import type { Metadata } from "next";

import { KinlyButton, KinlyCard, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../components";
import { buildPublicMetadata } from "../lib/publicMetadata";
import {
  createOrganizationStructuredData,
  createSoftwareApplicationStructuredData,
  createWebSiteStructuredData,
  StructuredDataScript,
} from "../lib/structuredData";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "MakingLifeEasie | Kinly and calm shared living tools" },
  description: "MakingLifeEasie builds Kinly, a shared living app designed to make shared homes feel lighter.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredDataScript
        data={[
          createOrganizationStructuredData(),
          createWebSiteStructuredData(),
          createSoftwareApplicationStructuredData(),
        ]}
      />
      <main>
        <KinlyShell as="section">
          <KinlyStack direction="vertical" gap="l">
            <KinlyStack direction="vertical" gap="xs">
              <KinlyHeading level={1}>MakingLifeEasie</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                We build Kinly and other calm, human-paced tools for shared living.
              </KinlyText>
            </KinlyStack>

            <KinlyCard variant="surface">
              <KinlyStack direction="vertical" gap="s">
                <KinlyHeading level={2}>Kinly</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  Kinly is our shared living app, designed to make shared homes feel lighter before anyone has to push.
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
    </>
  );
}
