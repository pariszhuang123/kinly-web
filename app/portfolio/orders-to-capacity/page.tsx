import type { Metadata } from "next";
import { KinlyButton, KinlyCard, KinlyHeading, KinlyStack, KinlyText, PageIntro } from "../../../components";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import {
  landingProofPoints,
  ORDERS_TO_CAPACITY_BASE_PATH,
} from "../../../lib/prototypes/ordersToCapacity/prototype";
import styles from "../../../components/prototypes/ordersToCapacity/OrdersToCapacity.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Orders-to-Capacity Manufacturing Reporting Prototype" },
  description:
    "A portfolio prototype showing how manufacturing reporting requirements can be translated into a first-version operating view.",
  path: ORDERS_TO_CAPACITY_BASE_PATH,
  siteName: "Kinly by MakingLifeEasie",
});

export default function OrdersToCapacityLandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Portfolio prototype"
            title="From Orders to Capacity"
            subtitle="A first-version manufacturing reporting prototype built to show how I would interpret a planning-focused data analyst role and turn it into a management-facing reporting model."
            asideTitle="What this prototype answers"
            asideBody="What demand is exposed, where capacity is constrained, which inventory signals matter, and how variance should translate into management action."
            actions={
              <>
                <KinlyButton href={`${ORDERS_TO_CAPACITY_BASE_PATH}/summary`}>View Summary</KinlyButton>
                <KinlyButton href={`${ORDERS_TO_CAPACITY_BASE_PATH}/why-this-prototype`} variant="outlined">
                  Why This Prototype
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
                  shows how I would propose a shared first reporting layer rather than another disconnected dashboard.
                </KinlyText>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={2}>Important disclaimer</KinlyHeading>
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
                <KinlyHeading level={2}>What this is intended to prove</KinlyHeading>
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
                <KinlyHeading level={3}>Scope choice</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  I narrowed the prototype to one executive summary and one deeper capacity view. That better reflects
                  how I would approach an actual first version: define the few measures management can use immediately,
                  then expand only after the logic is validated.
                </KinlyText>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={3}>Translation intent</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  The website format is simply the review surface. The underlying aim is to show the reporting model,
                  metric definitions, and management logic that could later be implemented in Power BI, Excel, Jet
                  Reports, Crystal Reports, or SQL-backed reporting.
                </KinlyText>
              </div>
            </KinlyCard>
          </div>
        </KinlyStack>
      </div>
    </main>
  );
}
