import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyText } from "../primitives/text/KinlyText";
import { formatCurrency } from "../../lib/prototypes/evnex/lifecycle";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type RegionalRow = {
  country: string;
  city: string;
  openExceptions: number;
  valueAtRisk: number;
  averageDelay: number;
};

type RegionalBreakdownProps = {
  rows: RegionalRow[];
};

export function RegionalBreakdown({ rows }: RegionalBreakdownProps) {
  return (
    <KinlyCard variant="surfaceContainer">
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <KinlyHeading level={3}>Regional breakdown</KinlyHeading>
          <KinlyText variant="bodySmall" tone="muted">
            Country and city combinations with the highest open delivery pressure.
          </KinlyText>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Country</th>
                <th>City</th>
                <th>Open exceptions</th>
                <th>Value at risk</th>
                <th>Average delay</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.country}-${row.city}`}>
                  <td>{row.country}</td>
                  <td>{row.city}</td>
                  <td>{row.openExceptions}</td>
                  <td>{formatCurrency(row.valueAtRisk)}</td>
                  <td>{row.averageDelay.toFixed(0)} days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </KinlyCard>
  );
}
