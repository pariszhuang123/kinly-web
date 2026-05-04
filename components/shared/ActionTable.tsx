import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyText } from "../primitives/text/KinlyText";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type ActionTableProps = {
  title: string;
  subtitle: string;
  columns: string[];
  rows: Array<Array<React.ReactNode>>;
};

export function ActionTable({ title, subtitle, columns, rows }: ActionTableProps) {
  return (
    <KinlyCard variant="surfaceContainer">
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <KinlyHeading level={3}>{title}</KinlyHeading>
          <KinlyText variant="bodySmall" tone="muted">
            {subtitle}
          </KinlyText>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`row-${rowIndex}-cell-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </KinlyCard>
  );
}
