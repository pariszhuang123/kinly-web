import type { Metadata } from "next";
import { KinlyCard, KinlyHeading, KinlyStack, KinlyText, PageIntro } from "../../../../components";
import { buildPublicMetadata } from "../../../../lib/publicMetadata";
import {
  alignmentCards,
  ORDERS_TO_CAPACITY_BASE_PATH,
} from "../../../../lib/prototypes/ordersToCapacity/prototype";
import styles from "../../../../components/prototypes/ordersToCapacity/OrdersToCapacity.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Why Orders-to-Capacity Matters" },
  description: "Rationale for the orders-to-capacity manufacturing planning case study.",
  path: `${ORDERS_TO_CAPACITY_BASE_PATH}/why-this-prototype`,
  siteName: "Kinly by MakingLifeEasie",
});

export default function WhyOrdersToCapacityPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Rationale"
            title="Why Orders-to-Capacity Matters"
            subtitle="A concise rationale for the scope, measures, and reporting structure used in this case study."
            asideTitle="One-line positioning"
            asideBody="A first-version reporting model for a manufacturing planning environment, using mock data only."
          />

          <div className={styles.threeColumnGrid}>
            {alignmentCards.map((card) => (
              <KinlyCard key={card.title} variant="surfaceContainerHigh">
                <div className={styles.calloutCard}>
                  <KinlyHeading level={3}>{card.title}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{card.body}</KinlyText>
                </div>
              </KinlyCard>
            ))}
          </div>

          <div className={styles.twoColumnGrid}>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={2}>What this case study emphasises</KinlyHeading>
                <div className={styles.bulletList}>
                  <div className={styles.bulletRow}>
                    <div className={styles.bulletMarker} />
                    <KinlyText variant="bodyMedium">
                      A narrow first version with explicit management signals.
                    </KinlyText>
                  </div>
                  <div className={styles.bulletRow}>
                    <div className={styles.bulletMarker} />
                    <KinlyText variant="bodyMedium">
                      Variance analysis as a decision tool, not only descriptive reporting.
                    </KinlyText>
                  </div>
                  <div className={styles.bulletRow}>
                    <div className={styles.bulletMarker} />
                    <KinlyText variant="bodyMedium">
                      Reporting consistency across Sales, Finance, Inventory, and Production.
                    </KinlyText>
                  </div>
                </div>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={2}>What this is not claiming</KinlyHeading>
                <div className={styles.bulletList}>
                  <div className={styles.bulletRow}>
                    <div className={styles.bulletMarker} />
                    <KinlyText variant="bodyMedium">
                      It does not claim knowledge of any real manufacturer&apos;s internal systems, definitions, or
                      process constraints.
                    </KinlyText>
                  </div>
                  <div className={styles.bulletRow}>
                    <div className={styles.bulletMarker} />
                    <KinlyText variant="bodyMedium">
                      It is not a production-ready BI model or a replacement for stakeholder discovery.
                    </KinlyText>
                  </div>
                  <div className={styles.bulletRow}>
                    <div className={styles.bulletMarker} />
                    <KinlyText variant="bodyMedium">
                      It is a proposal for what a sensible first reporting layer could look like.
                    </KinlyText>
                  </div>
                </div>
              </div>
            </KinlyCard>
          </div>
        </KinlyStack>
      </div>
    </main>
  );
}
