import { FilterBar } from "../../shared";
import { KinlyCard } from "../../primitives/card/KinlyCard";
import { KinlyHeading } from "../../primitives/heading/KinlyHeading";
import { KinlyLink } from "../../primitives/link/KinlyLink";
import { KinlyText } from "../../primitives/text/KinlyText";
import type { ActionCentreData } from "../../../lib/prototypes/evnex/actions";
import { EVNEX_BASE_PATH, formatCurrency } from "../../../lib/prototypes/evnex/lifecycle";
import styles from "./EvnexControlTower.module.css";

type EvnexActionCentreProps = {
  data: ActionCentreData;
};

function severityClassName(severity: string) {
  if (severity === "Critical") return `${styles.pill} ${styles.critical}`;
  if (severity === "High") return `${styles.pill} ${styles.high}`;
  if (severity === "Medium") return `${styles.pill} ${styles.medium}`;
  return `${styles.pill} ${styles.low}`;
}

export function EvnexActionCentre({ data }: EvnexActionCentreProps) {
  return (
    <div className={styles.sectionGrid}>
      <FilterBar title="Action filters" filters={data.filters} selectedFilters={data.selectedFilters} actionPath={`${EVNEX_BASE_PATH}/actions`} />

      {data.groups.map((group) => (
        <KinlyCard key={group.ownerTeam} variant="surfaceContainerHigh">
          <div className={styles.groupCard}>
            <div className={styles.groupHeader}>
              <div className={styles.sectionHeader}>
                <KinlyHeading level={2}>{group.ownerTeam}</KinlyHeading>
                <KinlyText variant="bodySmall" tone="muted">
                  {group.totalRecords} open records with {formatCurrency(group.totalValueAtRisk)} at risk.
                </KinlyText>
              </div>
              <div className={styles.groupStats}>
                <div className={styles.pill}>Oldest delay {group.oldestDelay} days</div>
              </div>
            </div>
            <div className={styles.topActionGrid}>
              {group.issueCards.map((issueCard) => (
                <KinlyCard key={issueCard.issueType} variant="surfaceContainer">
                  <div className={styles.issueIndexCard}>
                    <div className={styles.issueIndexHeader}>
                      <KinlyHeading level={3}>{issueCard.label}</KinlyHeading>
                      <div className={severityClassName(issueCard.severity)}>{issueCard.severity}</div>
                    </div>
                    <KinlyText variant="bodyMedium">
                      {issueCard.count} records are waiting with {formatCurrency(issueCard.valueAtRisk)} at risk.
                    </KinlyText>
                    <KinlyLink href={issueCard.href}>Open record list</KinlyLink>
                  </div>
                </KinlyCard>
              ))}
            </div>
          </div>
        </KinlyCard>
      ))}
    </div>
  );
}
