import type { Metadata } from "next";
import { KinlyCard, KinlyHeading, KinlyStack, KinlyText, PageIntro } from "../../../../components";
import { buildPublicMetadata } from "../../../../lib/publicMetadata";
import { EVNEX_BASE_PATH } from "../../../../lib/prototypes/evnex/lifecycle";
import styles from "../../../../components/prototypes/evnex/EvnexControlTower.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Why Quote-to-Active Matters" },
  description: "Why the Evnex quote-to-active lifecycle was chosen as an operational intelligence prototype.",
  path: `${EVNEX_BASE_PATH}/why-this-prototype`,
  siteName: "Kinly by MakingLifeEasie",
});

const proofCards = [
  "Understands ERP/CRM handoffs",
  "Understands operational bottlenecks",
  "Understands revenue leakage",
  "Understands customer activation",
  "Understands action-oriented reporting",
];

const lifecycle = [
  "Quote accepted",
  "Invoice paid",
  "Order released",
  "Charger built or allocated",
  "Charger shipped",
  "Technician scheduled",
  "Installation completed",
  "Device active",
];

export default function WhyThisPrototypePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Prototype rationale"
            title="Why Quote-to-Active Matters"
            subtitle="This is an operational intelligence prototype, not just a dashboard."
            asideTitle="One-line positioning"
            asideBody="This prototype turns quote-to-installation data into a daily operating story the business can act on."
          />

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.sectionCard}>
              <KinlyHeading level={2}>Business context</KinlyHeading>
              <KinlyText variant="bodyMedium">
                EV charger companies are not only selling hardware. They manage a connected journey across sales,
                finance, operations, logistics, installation, and device activation. The customer does not experience
                these as separate systems. They experience one promise: I paid for a charger, and I expect it to work.
              </KinlyText>
            </div>
          </KinlyCard>

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.sectionCard}>
              <KinlyHeading level={2}>Why this flow was chosen</KinlyHeading>
              <div className={styles.lifecycleChain}>
                {lifecycle.map((step, index) => (
                  <div key={step} className={styles.lifecycleChain}>
                    <div className={styles.pill}>{step}</div>
                    {index < lifecycle.length - 1 ? <span className={styles.arrow}>→</span> : null}
                  </div>
                ))}
              </div>
              <KinlyText variant="bodyMedium">
                This flow was chosen because it connects revenue, customer experience, and operational delivery. If any
                stage breaks, the company may have revenue blocked, customer frustration, delayed installs, or support
                issues.
              </KinlyText>
            </div>
          </KinlyCard>

          <div className={styles.twoColumnGrid}>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={3}>Why not just a sales dashboard?</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  A sales dashboard shows what was sold. This prototype shows whether the company actually delivered the
                  promise after the sale.
                </KinlyText>
              </div>
            </KinlyCard>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={3}>Why not just Power BI?</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  Power BI is excellent for governed reporting. This prototype demonstrates the business logic before
                  reporting: exception detection, ownership mapping, and action prioritisation. Once the logic is
                  validated, it could be implemented in Power BI, Microsoft Fabric, Dynamics Business Central
                  reporting, or an internal operations app.
                </KinlyText>
              </div>
            </KinlyCard>
          </div>

          <section className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>What this proves</KinlyHeading>
              <KinlyText variant="bodySmall" tone="muted">
                The prototype shows the business thinking behind the interface, not just the interface itself.
              </KinlyText>
            </div>
            <div className={styles.proofGrid}>
              {proofCards.map((card) => (
                <KinlyCard key={card} variant="surfaceContainer">
                  <div className={styles.proofCard}>
                    <KinlyText variant="labelMedium" tone="muted" as="div">
                      Proof point
                    </KinlyText>
                    <KinlyHeading level={3}>{card}</KinlyHeading>
                  </div>
                </KinlyCard>
              ))}
            </div>
          </section>
        </KinlyStack>
      </div>
    </main>
  );
}
