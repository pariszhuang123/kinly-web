import type { Metadata } from "next";

import { KinlyCard, KinlyHeading, KinlyLink, KinlyShell, KinlyStack, KinlyText } from "../../../components";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import { createCollectionPageStructuredData, StructuredDataScript } from "../../../lib/structuredData";
import { scenarioConfigs } from "./configs";
import styles from "./MarketIndexPage.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Shared living situations" },
  description:
    "Browse shared living situations where Kinly can help keep expectations visible, calm, and easier to revisit.",
  path: "/kinly/market",
  siteName: "Kinly by MakingLifeEasie",
});

const scenarioEntries = Object.entries(scenarioConfigs).sort(([left], [right]) => left.localeCompare(right));

export default function MarketIndexPage() {
  return (
    <>
      <StructuredDataScript data={createCollectionPageStructuredData()} />
      <main className={styles.page}>
        <KinlyShell as="section">
          <KinlyStack direction="vertical" gap="xl">
            <section className={styles.hero}>
              <KinlyStack direction="vertical" gap="s">
                <KinlyHeading level={1}>Shared living situations, made easier to find</KinlyHeading>
                <KinlyText variant="bodyMedium" tone="muted">
                  These pages describe the different kinds of shared homes Kinly is designed to support.
                </KinlyText>
                <KinlyText variant="bodyMedium">
                  Start with the situation that sounds closest to your place, or return to the main Kinly page first.
                </KinlyText>
                <div className={styles.linkRow}>
                  <KinlyLink href="/kinly/general">Read the main Kinly landing page</KinlyLink>
                  <KinlyLink href="/kinly/get">Go to Kinly app availability</KinlyLink>
                </div>
              </KinlyStack>
            </section>

            <section className={styles.section}>
              <KinlyStack direction="vertical" gap="m">
                <KinlyHeading level={2}>Browse by situation</KinlyHeading>
                <div className={styles.cardGrid}>
                  {scenarioEntries.map(([slug, config]) => (
                    <KinlyCard key={slug} variant="surfaceContainer">
                      <div className={styles.cardBody}>
                        <div className={styles.eyebrow}>
                          <KinlyText variant="labelMedium" tone="muted" as="div">
                            Shared living
                          </KinlyText>
                        </div>
                        <KinlyHeading level={3}>{config.hero.headline}</KinlyHeading>
                        <KinlyText variant="bodyMedium">{config.recognition.body}</KinlyText>
                        <KinlyLink href={`/kinly/market/${slug}`}>Read this situation</KinlyLink>
                      </div>
                    </KinlyCard>
                  ))}
                </div>
              </KinlyStack>
            </section>
          </KinlyStack>
        </KinlyShell>
      </main>
    </>
  );
}
