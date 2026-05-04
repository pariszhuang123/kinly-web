import { KpiCard, LifecycleFunnel, RegionalBreakdown, SalesPerformanceTable, ActionCard } from "../../shared";
import { KinlyCard } from "../../primitives/card/KinlyCard";
import { KinlyHeading } from "../../primitives/heading/KinlyHeading";
import { KinlyLink } from "../../primitives/link/KinlyLink";
import { KinlyText } from "../../primitives/text/KinlyText";
import type { EvnexSummaryData } from "../../../lib/prototypes/evnex/summary";
import { EVNEX_BASE_PATH } from "../../../lib/prototypes/evnex/lifecycle";
import styles from "./EvnexControlTower.module.css";

type EvnexLifecycleSummaryProps = {
  data: EvnexSummaryData;
};

export function EvnexLifecycleSummary({ data }: EvnexLifecycleSummaryProps) {
  const whyItMattersMetrics = data.metrics.filter((metric) =>
    ["Open exceptions", "Value at risk", "Activation success rate"].includes(metric.label),
  );
  const secondaryMetrics = data.metrics.filter(
    (metric) => !["Open exceptions", "Value at risk", "Activation success rate"].includes(metric.label),
  );

  return (
    <div className={styles.sectionGrid}>
      <KinlyCard variant="surfaceContainerHigh">
        <div className={`${styles.spotlightCard} ${styles.decisionCard} ${styles.decisionHero}`}>
          <KinlyText variant="labelMedium" tone="muted" as="div">
            Decision required
          </KinlyText>
          <KinlyHeading level={1}>{data.decisionRequired.title}</KinlyHeading>
          <KinlyText variant="bodyLarge">{data.decisionRequired.summary}</KinlyText>
          <KinlyText variant="bodySmall" tone="muted">
            {data.todayStory}
          </KinlyText>
          <div className={styles.decisionMeta}>
            <div className={styles.pill}>Owner team: {data.decisionRequired.ownerTeam}</div>
            <div className={styles.pill}>Priority exception: {data.priorityHeadline.title}</div>
          </div>
          {data.decisionRequired.href ? (
            <KinlyLink href={data.decisionRequired.href}>Review the affected records</KinlyLink>
          ) : null}
        </div>
      </KinlyCard>

      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <KinlyHeading level={2}>Actions to be taken</KinlyHeading>
          <KinlyText variant="bodySmall" tone="muted">
            Ranked operational queues that teams should work through after the leadership decision is set.
          </KinlyText>
        </div>
        <div className={styles.topActionGrid}>
          {data.topActions.map((action) => (
            <ActionCard
              key={action.issueType}
              label={action.label}
              ownerTeam={action.ownerTeam}
              count={action.count}
              valueAtRisk={action.valueAtRisk}
              href={`${EVNEX_BASE_PATH}/actions/${action.issueType}`}
            />
          ))}
        </div>
      </section>

      <details className={styles.disclosure}>
        <summary className={styles.disclosureSummary}>
          <div className={styles.disclosureSummaryCopy}>
            <KinlyHeading level={2}>Business impact</KinlyHeading>
            <KinlyText variant="bodySmall" tone="muted">
              The three numbers that show the scale, financial exposure, and downstream delivery risk behind the decision.
            </KinlyText>
          </div>
          <span className={styles.disclosureToggle}>Expand</span>
        </summary>
        <div className={styles.disclosureBody}>
          <div className={styles.kpiGridPrimary}>
            {whyItMattersMetrics.map((metric) => (
              <KpiCard key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
            ))}
          </div>
          <div className={styles.kpiGridSecondary}>
            {secondaryMetrics.map((metric) => (
              <KpiCard key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
            ))}
          </div>
        </div>
      </details>

      <details className={styles.disclosure}>
        <summary className={styles.disclosureSummary}>
          <div className={styles.disclosureSummaryCopy}>
            <KinlyHeading level={2}>Where the backlog sits</KinlyHeading>
            <KinlyText variant="bodySmall" tone="muted">
              Lifecycle, location, and rep context for follow-up discussion if someone asks where the pressure is coming from.
            </KinlyText>
          </div>
          <span className={styles.disclosureToggle}>Expand</span>
        </summary>
        <div className={styles.disclosureBody}>
          <div className={styles.twoColumnGrid}>
            <LifecycleFunnel
              title="Lifecycle funnel"
              subtitle="Stage counts from quote creation to active charger."
              items={data.funnel}
            />
            <LifecycleFunnel
              title="Exceptions by stage"
              subtitle="Open backlog pressure across the lifecycle."
              items={data.exceptionsByStage}
            />
          </div>

          <div className={styles.twoColumnGrid}>
            <RegionalBreakdown rows={data.regionalBreakdown} />
            <SalesPerformanceTable rows={data.salesPerformance} />
          </div>
        </div>
      </details>
    </div>
  );
}
