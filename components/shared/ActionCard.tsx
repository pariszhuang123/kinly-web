import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyLink } from "../primitives/link/KinlyLink";
import { KinlyText } from "../primitives/text/KinlyText";
import { formatCurrency } from "../../lib/prototypes/evnex/lifecycle";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type ActionCardProps = {
  label: string;
  ownerTeam: string;
  count: number;
  valueAtRisk: number;
  href: string;
};

export function ActionCard({ label, ownerTeam, count, valueAtRisk, href }: ActionCardProps) {
  return (
    <KinlyCard variant="surfaceContainer">
      <div className={styles.actionCard}>
        <KinlyHeading level={3}>{label}</KinlyHeading>
        <KinlyText variant="bodySmall" tone="muted">
          {ownerTeam}
        </KinlyText>
        <KinlyText variant="bodyMedium">
          {count} records are open with {formatCurrency(valueAtRisk)} at risk.
        </KinlyText>
        <div className={styles.linkLine}>
          <KinlyLink href={href}>Open action list</KinlyLink>
        </div>
      </div>
    </KinlyCard>
  );
}
