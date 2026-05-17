import type { Metadata } from "next";
import {
  KinlyCard,
  KinlyHeading,
  KinlyStack,
  KinlyText,
  KpiCard,
  PageIntro,
} from "../../../../components";
import { buildPublicMetadata } from "../../../../lib/publicMetadata";
import {
  dataModelCards,
  executiveMetrics,
  inventorySignals,
  ORDERS_TO_CAPACITY_BASE_PATH,
  recommendations,
  scenarioSignals,
  varianceRows,
  workCentreRows,
} from "../../../../lib/prototypes/ordersToCapacity/prototype";
import styles from "../../../../components/prototypes/ordersToCapacity/OrdersToCapacity.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Orders-to-Capacity Summary" },
  description: "Executive summary for the orders-to-capacity manufacturing reporting portfolio prototype.",
  path: `${ORDERS_TO_CAPACITY_BASE_PATH}/summary`,
  siteName: "Kinly by MakingLifeEasie",
});

export default function OrdersToCapacitySummaryPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Management view"
            title="Orders-to-Capacity Summary"
            subtitle="This mock operating view is ordered around the management questions first: where performance is off-plan, which work centre is constraining delivery, and what should happen next."
            asideTitle="Default lens"
            asideBody="Four-week fictional planning horizon with focus on variance, workload pressure, inventory exposure, and recommended action."
          />

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.recommendationCard}>
              <KinlyText variant="labelMedium" tone="muted" as="div">
                Management recommendation
              </KinlyText>
              <KinlyHeading level={2}>Stabilise machining before treating revenue variance as a demand problem</KinlyHeading>
              <KinlyText variant="bodyLarge">
                The headline shortfall in forecast revenue appears to be driven more by capacity execution and order
                timing than by weak demand. The first management decision should be whether to absorb overload through
                overtime, resequencing, or explicit delivery re-commitment.
              </KinlyText>
              <div className={styles.metaRow}>
                <div className={styles.pill}>Primary bottleneck: Machining</div>
                <div className={styles.pill}>Current risk: 17 orders</div>
                <div className={styles.pill}>Decision window: This week</div>
              </div>
              <div className={styles.bulletList}>
                {recommendations.map((item) => (
                  <div key={item.owner} className={styles.bulletRow}>
                    <div className={styles.bulletMarker} />
                    <KinlyText variant="bodyMedium">
                      <strong>{item.owner}:</strong> {item.action}
                    </KinlyText>
                  </div>
                ))}
              </div>
            </div>
          </KinlyCard>

          <section className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Executive signals</KinlyHeading>
              <KinlyText variant="bodySmall" tone="muted">
                A deliberately small KPI set focused on decision pressure rather than report volume.
              </KinlyText>
            </div>
            <div className={styles.kpiGrid}>
              {executiveMetrics.map((metric) => (
                <KpiCard key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
              ))}
            </div>
          </section>

          <div className={styles.twoColumnGrid}>
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <KinlyHeading level={2}>Capacity planning view</KinlyHeading>
                  <KinlyText variant="bodySmall" tone="muted">
                    The deeper operational lens focuses on where demand stops being deliverable.
                  </KinlyText>
                </div>
                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Work centre</th>
                        <th>Available hours</th>
                        <th>Planned hours</th>
                        <th>Utilisation</th>
                        <th>Gap</th>
                        <th>Current signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workCentreRows.map((row) => (
                        <tr key={row.workCentre}>
                          <td>{row.workCentre}</td>
                          <td>{row.availableHours}</td>
                          <td>{row.plannedHours}</td>
                          <td>{row.utilisation}</td>
                          <td>{row.variance}</td>
                          <td>{row.issue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <KinlyHeading level={2}>Inventory health view</KinlyHeading>
                  <KinlyText variant="bodySmall" tone="muted">
                    Inventory is shown here as a planning variable, not just a stockholding total.
                  </KinlyText>
                </div>
                <div className={styles.bulletList}>
                  {inventorySignals.map((signal) => (
                    <div key={signal} className={styles.bulletRow}>
                      <div className={styles.bulletMarker} />
                      <KinlyText variant="bodyMedium">{signal}</KinlyText>
                    </div>
                  ))}
                </div>
              </div>
            </KinlyCard>
          </div>

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <KinlyHeading level={2}>Variance analysis</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                  This is the part the original draft needed most. The role asks for variance that becomes management
                  recommendation, so the prototype makes that explicit.
                </KinlyText>
              </div>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Measure</th>
                      <th>Current</th>
                      <th>Plan</th>
                      <th>Variance</th>
                      <th>Management implication</th>
                    </tr>
                  </thead>
                  <tbody>
                    {varianceRows.map((row) => (
                      <tr key={row.measure}>
                        <td>{row.measure}</td>
                        <td>{row.current}</td>
                        <td>{row.plan}</td>
                        <td>{row.variance}</td>
                        <td>{row.implication}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </KinlyCard>

          <div className={styles.twoColumnGrid}>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <KinlyHeading level={2}>Scenario planning examples</KinlyHeading>
                  <KinlyText variant="bodySmall" tone="muted">
                    Enough to show thinking, not so much that it pretends to be an optimisation engine.
                  </KinlyText>
                </div>
                <div className={styles.bulletList}>
                  {scenarioSignals.map((signal) => (
                    <div key={signal} className={styles.bulletRow}>
                      <div className={styles.bulletMarker} />
                      <KinlyText variant="bodyMedium">{signal}</KinlyText>
                    </div>
                  ))}
                </div>
              </div>
            </KinlyCard>

            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <KinlyHeading level={2}>Power BI translation note</KinlyHeading>
                  <KinlyText variant="bodyMedium">
                    The website is only the review surface. The underlying model is designed around shared business
                    definitions so the same logic could later sit on top of SQL data sources and feed Power BI, Excel,
                    Jet Reports, or Crystal Reports with a more consistent reporting layer.
                  </KinlyText>
                </div>
              </div>
            </KinlyCard>
          </div>

          <section className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Mock data model</KinlyHeading>
              <KinlyText variant="bodySmall" tone="muted">
                The model is intentionally simple, but it is shared across departments rather than built as isolated
                report extracts.
              </KinlyText>
            </div>
            <div className={styles.cardGrid}>
              {dataModelCards.map((card) => (
                <KinlyCard key={card.title} variant="surfaceContainer">
                  <div className={styles.dataCard}>
                    <KinlyHeading level={3}>{card.title}</KinlyHeading>
                    <KinlyText variant="bodyMedium">{card.body}</KinlyText>
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
