import type { Metadata } from "next";
import { KinlyButton, KinlyCard, KinlyHeading, KinlyStack, KinlyText, PageIntro } from "../../../components";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import {
  landingProofPoints,
  ORDERS_TO_CAPACITY_BASE_PATH,
} from "../../../lib/prototypes/ordersToCapacity/prototype";
import styles from "../../../components/prototypes/ordersToCapacity/OrdersToCapacity.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Orders-to-Capacity Manufacturing Reporting Case Study" },
  description:
    "A case study for a first-version manufacturing planning and reporting view.",
  path: ORDERS_TO_CAPACITY_BASE_PATH,
  siteName: "Kinly by MakingLifeEasie",
});

export default function OrdersToCapacityLandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Case study"
            title="From Orders to Capacity"
            subtitle="A manufacturing planning reporting view focused on capacity, inventory, forecast variance, and management action."
            asideTitle="Key questions"
            asideBody="What demand is exposed, where capacity is constrained, which inventory signals matter, and what needs attention now."
            actions={
              <>
                <KinlyButton href={`${ORDERS_TO_CAPACITY_BASE_PATH}/summary`}>Open Summary</KinlyButton>
                <KinlyButton href={`${ORDERS_TO_CAPACITY_BASE_PATH}/why-this-prototype`} variant="outlined">
                  Rationale
                </KinlyButton>
              </>
            }
          />

          <div className={styles.twoColumnGrid}>
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.sectionCard}>
                <KinlyHeading level={2}>Problem statement</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  Manufacturing planning teams rarely struggle because they have no reports. They struggle because
                  Sales, Finance, Inventory, and Production often describe the same reality differently. This prototype
                  proposes a shared reporting view rather than another disconnected dashboard.
                </KinlyText>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={2}>Scope note</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  This is a self-initiated portfolio prototype based on public role requirements only. All data is
                  fictional. It does not represent any real company&apos;s customers, capacity, financials, or
                  operational performance.
                </KinlyText>
              </div>
            </KinlyCard>
          </div>

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <KinlyHeading level={2}>What this shows</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                  The point is not breadth. The point is requirement interpretation, metric judgement, and action
                  framing.
                </KinlyText>
              </div>
              <div className={styles.heroList}>
                {landingProofPoints.map((point) => (
                  <div key={point} className={styles.proofLine}>
                    <div className={styles.proofDot} />
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </div>
                ))}
              </div>
            </div>
          </KinlyCard>

          <div className={styles.twoColumnGrid}>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={3}>Scope</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  The scope is narrow: one executive summary and one deeper capacity view. The aim is to define a small
                  set of measures management can use immediately before expanding the reporting surface.
                </KinlyText>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={3}>Reporting model</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  The website is the review surface. The underlying model is intended to translate cleanly into Power
                  BI, Excel, Jet Reports, Crystal Reports, or SQL-backed reporting.
                </KinlyText>
              </div>
            </KinlyCard>
          </div>
        </KinlyStack>
      </div>
    </main>
  );
}
