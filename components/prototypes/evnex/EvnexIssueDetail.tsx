import { ActionTable, FilterBar } from "../../shared";
import { KinlyHeading } from "../../primitives/heading/KinlyHeading";
import { KinlyText } from "../../primitives/text/KinlyText";
import type { IssueDetailData } from "../../../lib/prototypes/evnex/actions";
import { EVNEX_BASE_PATH, formatCurrency } from "../../../lib/prototypes/evnex/lifecycle";
import styles from "./EvnexControlTower.module.css";

type EvnexIssueDetailProps = {
  data: IssueDetailData;
};

function severityClassName(severity: string) {
  if (severity === "Critical") return `${styles.pill} ${styles.critical}`;
  if (severity === "High") return `${styles.pill} ${styles.high}`;
  if (severity === "Medium") return `${styles.pill} ${styles.medium}`;
  return `${styles.pill} ${styles.low}`;
}

export function EvnexIssueDetail({ data }: EvnexIssueDetailProps) {
  return (
    <div className={styles.sectionGrid}>
      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <KinlyHeading level={2}>{data.issueLabel}</KinlyHeading>
          <KinlyText variant="bodyMedium">
            There are {data.recordCount} {data.issueLabel.toLowerCase()} items representing {formatCurrency(data.totalValueAtRisk)} in value at risk. The highest concentration is in {data.topAffectedCity}. {data.ownerTeam} should {data.recommendedNextAction.toLowerCase()}.
          </KinlyText>
        </div>
        <div className={styles.summaryHeaderGrid}>
          <div className={styles.summaryStat}>
            <KinlyText variant="labelMedium" tone="muted" as="div">
              Issue type
            </KinlyText>
            <KinlyText variant="bodyLarge">{data.issueLabel}</KinlyText>
          </div>
          <div className={styles.summaryStat}>
            <KinlyText variant="labelMedium" tone="muted" as="div">
              Owner team
            </KinlyText>
            <KinlyText variant="bodyLarge">{data.ownerTeam}</KinlyText>
          </div>
          <div className={styles.summaryStat}>
            <KinlyText variant="labelMedium" tone="muted" as="div">
              Number of records
            </KinlyText>
            <KinlyText variant="bodyLarge">{data.recordCount}</KinlyText>
          </div>
          <div className={styles.summaryStat}>
            <KinlyText variant="labelMedium" tone="muted" as="div">
              Total value at risk
            </KinlyText>
            <KinlyText variant="bodyLarge">{formatCurrency(data.totalValueAtRisk)}</KinlyText>
          </div>
          <div className={styles.summaryStat}>
            <KinlyText variant="labelMedium" tone="muted" as="div">
              Oldest unresolved item
            </KinlyText>
            <KinlyText variant="bodyLarge">{data.oldestUnresolvedItem} days</KinlyText>
          </div>
          <div className={styles.summaryStat}>
            <KinlyText variant="labelMedium" tone="muted" as="div">
              Top affected city
            </KinlyText>
            <KinlyText variant="bodyLarge">{data.topAffectedCity}</KinlyText>
          </div>
        </div>
      </section>

      <FilterBar
        title="Detail filters"
        filters={data.filters}
        selectedFilters={data.selectedFilters}
        actionPath={`${EVNEX_BASE_PATH}/actions/${data.issueType}`}
      />

      <ActionTable
        title="Exact records needing action"
        subtitle="Each row keeps the operational context next to the recommended next step."
        columns={[
          "Lead ID",
          "Customer",
          "City",
          "Country",
          "Sales rep",
          "Product",
          "Quote value",
          "Payment date",
          "Ship date",
          "Scheduled date",
          "Technician",
          "Days waiting",
          "Severity",
          "Recommended action",
        ]}
        rows={data.rows.map((row) => [
          row.leadId,
          row.customer,
          row.city,
          row.country,
          row.salesRep,
          row.product,
          formatCurrency(row.quoteValue),
          row.paymentDate,
          row.shipDate,
          row.scheduledDate,
          row.technician,
          `${row.daysDelayed} days`,
          <span key={`${row.leadId}-severity`} className={severityClassName(row.severity)}>
            {row.severity}
          </span>,
          row.recommendedAction,
        ])}
      />
    </div>
  );
}
