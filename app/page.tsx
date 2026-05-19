import type { Metadata } from "next";
import Image from "next/image";

import { KinlyButton, KinlyCard, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../components";
import { quickLinkCards } from "../lib/navigationHubs";
import { buildPublicMetadata } from "../lib/publicMetadata";
import {
  createOrganizationStructuredData,
  createSoftwareApplicationStructuredData,
  createWebSiteStructuredData,
  StructuredDataScript,
} from "../lib/structuredData";
import styles from "./HomePage.module.css";

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
      <main className={styles.page}>
        <KinlyShell as="section">
          <KinlyStack direction="vertical" gap="l">
            <div className={styles.content}>
              <KinlyCard variant="surfaceContainerHigh">
                <div className={styles.heroCard}>
                  <div className={styles.heroContent}>
                    <KinlyText variant="labelSmall" tone="muted" as="span">
                      <span className={styles.eyebrow}>MakingLifeEasie</span>
                    </KinlyText>
                    <KinlyHeading level={1}>Quick links to the main public surfaces across MakingLifeEasie</KinlyHeading>
                    <KinlyText variant="bodyLarge">
                      This page explains the quick-link categories and points to the relevant landing pages,
                      directories, and case studies.
                    </KinlyText>
                  </div>
                </div>
              </KinlyCard>

              <div className={styles.primaryGrid}>
                {quickLinkCards.map((link) => (
                  <KinlyCard key={link.name} variant="surface">
                    <div className={styles.linkCard}>
                      <div className={styles.cardContent}>
                        <div className={styles.logoRow}>
                          {link.useLogo ? (
                            <span className={styles.brandMark}>
                              <Image src="/logo-kinly.svg" alt="Kinly logo" width={28} height={28} />
                            </span>
                          ) : (
                            <span className={styles.textMark} aria-hidden="true">
                              {link.mark}
                            </span>
                          )}
                          <div className={styles.brandMeta}>
                            <KinlyHeading level={2}>{link.name}</KinlyHeading>
                          </div>
                        </div>
                        <KinlyText variant="bodyMedium">{link.description}</KinlyText>
                        <div className={styles.cardActions}>
                          <KinlyButton href={link.href}>{link.cta}</KinlyButton>
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
    </>
  );
}
