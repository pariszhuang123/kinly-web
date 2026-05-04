import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyText } from "../primitives/text/KinlyText";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type SalesRow = {
  salesRep: string;
  acceptedQuotes: number;
  activeDevices: number;
  openExceptions: number;
  completionRate: number;
};

type SalesPerformanceTableProps = {
  rows: SalesRow[];
};

export function SalesPerformanceTable({ rows }: SalesPerformanceTableProps) {
  return (
    <KinlyCard variant="surfaceContainer">
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <KinlyHeading level={3}>Sales performance</KinlyHeading>
          <KinlyText variant="bodySmall" tone="muted">
            Which reps are converting accepted quotes into active devices with the least rework.
          </KinlyText>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sales rep</th>
                <th>Accepted quotes</th>
                <th>Active devices</th>
                <th>Open exceptions</th>
                <th>Completion rate</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.salesRep}>
                  <td>{row.salesRep}</td>
                  <td>{row.acceptedQuotes}</td>
                  <td>{row.activeDevices}</td>
                  <td>{row.openExceptions}</td>
                  <td>{row.completionRate.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </KinlyCard>
  );
}
