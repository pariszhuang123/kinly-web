import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyText } from "../primitives/text/KinlyText";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type FunnelItem = {
  label: string;
  count: number;
};

type LifecycleFunnelProps = {
  title: string;
  subtitle: string;
  items: FunnelItem[];
};

export function LifecycleFunnel({ title, subtitle, items }: LifecycleFunnelProps) {
  const maxCount = Math.max(...items.map((item) => item.count), 1);

  return (
    <KinlyCard variant="surfaceContainer">
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <KinlyHeading level={3}>{title}</KinlyHeading>
          <KinlyText variant="bodySmall" tone="muted">
            {subtitle}
          </KinlyText>
        </div>
        <div className={styles.chartGrid}>
          {items.map((item) => (
            <div key={item.label} className={styles.chartRow}>
              <KinlyText variant="bodySmall" as="div">
                {item.label}
              </KinlyText>
              <div className={styles.chartTrack} aria-hidden="true">
                <div className={styles.chartFill} style={{ width: `${(item.count / maxCount) * 100}%` }} />
              </div>
              <KinlyText variant="labelMedium" as="div">
                {item.count}
              </KinlyText>
            </div>
          ))}
        </div>
      </div>
    </KinlyCard>
  );
}
