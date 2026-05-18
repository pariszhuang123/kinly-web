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
  description: "Executive summary for a manufacturing planning reporting case study.",
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
            subtitle="A management view focused on plan variance, capacity pressure, delivery risk, and recommended action."
            asideTitle="Planning window"
            asideBody="Four-week fictional planning horizon."
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
                overtime, resequencing, or delivery re-commitment.
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
                <KinlyHeading level={2}>Executive view</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                  A small KPI set focused on decision pressure rather than report volume.
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
                  <KinlyHeading level={2}>Capacity view</KinlyHeading>
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
                  <KinlyHeading level={2}>Inventory view</KinlyHeading>
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
                  This view links plan variance to management implication.
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
                <KinlyHeading level={2}>Scenario examples</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                    A small set of examples to show planning logic.
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
                  <KinlyHeading level={2}>Implementation note</KinlyHeading>
                  <KinlyText variant="bodyMedium">
                    The model is designed around shared business definitions so the same logic could later sit on top
                    of SQL data sources and feed Power BI, Excel, Jet Reports, or Crystal Reports.
                  </KinlyText>
                </div>
              </div>
            </KinlyCard>
          </div>

          <section className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <KinlyHeading level={2}>Data model</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                A simple shared model across Sales, Production, Inventory, and Finance.
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
