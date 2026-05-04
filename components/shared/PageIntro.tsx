import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyText } from "../primitives/text/KinlyText";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  asideTitle?: string;
  asideBody?: string;
  actions?: React.ReactNode;
};

export function PageIntro({ eyebrow, title, subtitle, asideTitle, asideBody, actions }: PageIntroProps) {
  return (
    <KinlyCard variant="surfaceContainerHigh">
      <div className={`${styles.heroBody} ${styles.heroCard}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroSummary}>
            <div className={styles.eyebrow}>
              <KinlyText variant="labelMedium" tone="muted" as="div">
                {eyebrow}
              </KinlyText>
            </div>
            <KinlyHeading level={1}>{title}</KinlyHeading>
            <KinlyText variant="bodyLarge">{subtitle}</KinlyText>
            {actions ? <div className={styles.actionRow}>{actions}</div> : null}
          </div>
          {asideTitle || asideBody ? (
            <div className={styles.heroAside}>
              {asideTitle ? <KinlyHeading level={3}>{asideTitle}</KinlyHeading> : null}
              {asideBody ? <KinlyText variant="bodyMedium">{asideBody}</KinlyText> : null}
            </div>
          ) : null}
        </div>
      </div>
    </KinlyCard>
  );
}
