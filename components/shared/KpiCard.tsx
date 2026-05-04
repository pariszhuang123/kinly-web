import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyText } from "../primitives/text/KinlyText";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type KpiCardProps = {
  label: string;
  value: string;
  note: string;
};

export function KpiCard({ label, value, note }: KpiCardProps) {
  return (
    <KinlyCard variant="surfaceContainer">
      <div className={styles.kpiCard}>
        <KinlyText variant="labelMedium" tone="muted" as="div">
          {label}
        </KinlyText>
        <div className={styles.kpiValue}>{value}</div>
        <div className={styles.kpiLabel}>
          <KinlyText variant="bodySmall" tone="muted">
            {note}
          </KinlyText>
        </div>
      </div>
    </KinlyCard>
  );
}
