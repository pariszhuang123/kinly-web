import type { Metadata } from "next";
import Image from "next/image";

import { KinlyButton, KinlyCard, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../components";
import { buildPublicMetadata } from "../lib/publicMetadata";
import {
  createOrganizationStructuredData,
  createSoftwareApplicationStructuredData,
  createWebSiteStructuredData,
  StructuredDataScript,
} from "../lib/structuredData";
import styles from "./HomePage.module.css";

type PrimaryLink = {
  name: string;
  description: string;
  href: string;
  cta: string;
  mark: string;
  useLogo?: boolean;
};

type PortfolioLink = {
  name: string;
  description: string;
  href: string;
  cta: string;
};

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "MakingLifeEasie | Kinly and calm shared living tools" },
  description: "MakingLifeEasie builds Kinly, a shared living app designed to make shared homes feel lighter.",
  path: "/",
});

const primaryLinks: readonly PrimaryLink[] = [
  {
    name: "withYou app",
    description: "Open the withYou public landing page and audio-based support flows.",
    href: "/withyou",
    cta: "Open withYou",
    mark: "wY",
  },
  {
    name: "Kinly app",
    description: "Go to the main Kinly discovery page for shared living tools and store access.",
    href: "/kinly/general",
    cta: "Open Kinly",
    mark: "kinly",
    useLogo: true,
  },
  {
    name: "Kinly QR code",
    description: "Open the QR generator hub for short links, cards, and share-ready QR outputs.",
    href: "/tools/qr",
    cta: "Open QR hub",
    mark: "QR",
  },
  {
    name: "Portfolio",
    description: "Browse working prototypes and jump into specific portfolio examples.",
    href: "/portfolio/evnex-control-tower",
    cta: "View portfolio",
    mark: "PF",
  },
] as const;

const portfolioLinks: readonly PortfolioLink[] = [
  {
    name: "Evnex Control Tower",
    description: "Quote-to-active operational control prototype for pipeline visibility and action ownership.",
    href: "/portfolio/evnex-control-tower",
    cta: "Open Evnex prototype",
  },
  {
    name: "Contractor Negotiation Playbook",
    description: "Decision-support prototype for negotiating scope, pricing, and contractor structure.",
    href: "/portfolio/contractor-negotiation-playbook",
    cta: "Open negotiation playbook",
  },
] as const;

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
                    <KinlyHeading level={1}>Quick links to Kinly, withYou, QR tools, and portfolio prototypes</KinlyHeading>
                    <KinlyText variant="bodyLarge">
                      This page gives you one simple place to open the main public surfaces across the MakingLifeEasie
                      work.
                    </KinlyText>
                    <div className={styles.heroActions}>
                      <KinlyButton href="/kinly/general">Open Kinly</KinlyButton>
                      <KinlyButton href="/withyou" variant="outlined">
                        Open withYou
                      </KinlyButton>
                    </div>
                  </div>
                </div>
              </KinlyCard>

              <div className={styles.primaryGrid}>
                {primaryLinks.map((link) => (
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

              <KinlyCard variant="surfaceContainer">
                <div className={styles.sectionCard}>
                  <div className={styles.sectionContent}>
                    <KinlyHeading level={2}>Portfolio prototypes</KinlyHeading>
                    <KinlyText variant="bodyMedium">
                      The portfolio section can break down into individual prototype types so people can jump directly
                      to the example they need.
                    </KinlyText>
                    <div className={styles.portfolioGrid}>
                      {portfolioLinks.map((prototype) => (
                        <KinlyCard key={prototype.name} variant="surface">
                          <div className={styles.linkCard}>
                            <div className={styles.cardContent}>
                              <div className={styles.prototypeMeta}>
                                <KinlyHeading level={3}>{prototype.name}</KinlyHeading>
                                <KinlyText variant="bodyMedium">{prototype.description}</KinlyText>
                              </div>
                              <div className={styles.cardActions}>
                                <KinlyButton href={prototype.href} variant="outlined">
                                  {prototype.cta}
                                </KinlyButton>
                              </div>
                            </div>
                          </div>
                        </KinlyCard>
                      ))}
                    </div>
                  </div>
                </div>
              </KinlyCard>
            </div>
          </KinlyStack>
        </KinlyShell>
      </main>
    </>
  );
}
