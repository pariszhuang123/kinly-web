import type { Metadata } from "next";

import { KinlyButton, KinlyCard, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../../../components";
import { kinlyDirectoryLinks } from "../../../lib/navigationHubs";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import styles from "../../HomePage.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "MakingLifeEasie | Kinly Overview" },
  description: "A short directory for Kinly app and QR surfaces.",
  path: "/kinly/overview",
});

export default function KinlyOverviewPage() {
  return (
    <main className={styles.page}>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <div className={styles.content}>
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.heroCard}>
                <div className={styles.heroContent}>
                  <KinlyText variant="labelSmall" tone="muted" as="span">
                    <span className={styles.eyebrow}>Kinly</span>
                  </KinlyText>
                  <KinlyHeading level={1}>Kinly quick links</KinlyHeading>
                  <KinlyText variant="bodyLarge">
                    A short directory for the main Kinly public landing page and the Kinly QR generator hub.
                  </KinlyText>
                </div>
              </div>
            </KinlyCard>

            <div className={styles.portfolioGrid}>
              {kinlyDirectoryLinks.map((entry) => (
                <KinlyCard key={entry.name} variant="surface">
                  <div className={styles.linkCard}>
                    <div className={styles.cardContent}>
                      <div className={styles.prototypeMeta}>
                        <KinlyHeading level={2}>{entry.name}</KinlyHeading>
                        <KinlyText variant="bodyMedium">{entry.description}</KinlyText>
                      </div>
                      <div className={styles.cardActions}>
                        <KinlyButton href={entry.href} variant="outlined">
                          {entry.cta}
                        </KinlyButton>
                      </div>
                    </div>
                  </div>
                </KinlyCard>
              ))}
            </div>
          </div>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
