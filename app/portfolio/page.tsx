import type { Metadata } from "next";

import { KinlyButton, KinlyCard, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../../components";
import { portfolioCaseStudies } from "../../lib/navigationHubs";
import { buildPublicMetadata } from "../../lib/publicMetadata";
import styles from "../HomePage.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "MakingLifeEasie | Portfolio" },
  description: "Browse case studies and working portfolio examples.",
  path: "/portfolio",
});

export default function PortfolioIndexPage() {
  return (
    <main className={styles.page}>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <div className={styles.content}>
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.heroCard}>
                <div className={styles.heroContent}>
                  <KinlyText variant="labelSmall" tone="muted" as="span">
                    <span className={styles.eyebrow}>Portfolio</span>
                  </KinlyText>
                  <KinlyHeading level={1}>Portfolio case studies</KinlyHeading>
                  <KinlyText variant="bodyLarge">
                    A directory of case studies and working prototypes across operations, reporting, and decision
                    support.
                  </KinlyText>
                </div>
              </div>
            </KinlyCard>

            <div className={styles.portfolioGrid}>
              {portfolioCaseStudies.map((entry) => (
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
