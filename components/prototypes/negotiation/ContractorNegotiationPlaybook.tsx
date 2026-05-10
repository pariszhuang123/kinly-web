import { PageIntro } from "../../shared/PageIntro";
import { KinlyButton } from "../../primitives/button/KinlyButton";
import { KinlyCard } from "../../primitives/card/KinlyCard";
import { KinlyHeading } from "../../primitives/heading/KinlyHeading";
import { KinlyShell } from "../../primitives/shell/KinlyShell";
import { KinlyStack } from "../../primitives/stack/KinlyStack";
import { KinlyText } from "../../primitives/text/KinlyText";
import {
  closeScripts,
  commercialLevers,
  controlBar,
  depthRows,
  indicativeRanges,
  phaseCards,
  playbookSections,
  privateGuardrails,
  questionCards,
  recommendedPosition,
  structureOptions,
} from "../../../lib/prototypes/negotiation/playbook";
import styles from "./ContractorNegotiationPlaybook.module.css";

export function ContractorNegotiationPlaybook() {
  return (
    <main className={styles.page}>
      <KinlyShell as="div">
        <div className={styles.wideShell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Private negotiation playbook"
            title="Kelford Reporting Negotiation Console"
            subtitle="Use this to keep the conversation focused on one practical outcome: getting the reporting landscape into one place first, then deepening automation and drill-through sensibly."
            asideTitle="Main framing"
            asideBody="Everything visible first. Not everything equally mature first."
            actions={
              <>
                <KinlyButton href="#position">Open Position</KinlyButton>
                <KinlyButton href="#questions" variant="outlined">
                  Open CEO Questions
                </KinlyButton>
                <KinlyButton href="#close" variant="ghost">
                  Jump to Close
                </KinlyButton>
              </>
            }
          />

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.controlBar}>
              <div className={styles.controlPanel}>
                <KinlyText variant="labelMedium" tone="muted" as="div">
                  Preferred
                </KinlyText>
                <KinlyHeading level={3}>{controlBar.preferredStructure}</KinlyHeading>
              </div>
              <div className={styles.controlPanel}>
                <KinlyText variant="labelMedium" tone="muted" as="div">
                  Fallback
                </KinlyText>
                <KinlyText variant="bodyMedium">{controlBar.fallbackStructure}</KinlyText>
              </div>
              <div className={styles.controlPanel}>
                <KinlyText variant="labelMedium" tone="muted" as="div">
                  Core line
                </KinlyText>
                <KinlyText variant="bodyMedium">{controlBar.steeringLine}</KinlyText>
              </div>
              <div className={styles.controlPanel}>
                <KinlyText variant="labelMedium" tone="muted" as="div">
                  CEO goal
                </KinlyText>
                <KinlyText variant="bodyMedium">{controlBar.ceoGoal}</KinlyText>
              </div>
            </div>
          </KinlyCard>

          <nav className={styles.jumpNav} aria-label="Playbook sections">
            {playbookSections.map((section) => (
              <KinlyButton key={section.id} href={`#${section.id}`} variant="ghost">
                {section.label}
              </KinlyButton>
            ))}
          </nav>

          <section id="position" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>What this conversation is really about</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                The CEO&apos;s main goal is to be able to look at the dashboards and reports in one place.
              </KinlyText>
            </div>
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.questionCard}>
                <KinlyText variant="bodyMedium">
                  The first commitment is centralised visibility. Automation and drill-through should then be taken as far
                  as practical based on the maturity of each domain.
                </KinlyText>
              </div>
            </KinlyCard>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>My recommended position</KinlyHeading>
            </div>
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.questionCard}>
                <KinlyText variant="bodyMedium">{recommendedPosition.summary}</KinlyText>
                <div className={styles.redirectBlock}>
                  <KinlyText variant="labelMedium" tone="muted" as="div">
                    Core idea
                  </KinlyText>
                  <KinlyText variant="bodyMedium">{recommendedPosition.callout}</KinlyText>
                </div>
              </div>
            </KinlyCard>
          </section>

          <section id="phases" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>How phases 2 to 5 tie in</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                Phases 2 to 5 are broader domain coverage, not simply later dashboards.
              </KinlyText>
            </div>
            <div className={styles.optionGrid}>
              {phaseCards.map((card) => (
                <KinlyCard key={card.title} variant="surfaceContainer">
                  <div className={styles.optionCard}>
                    <KinlyHeading level={3}>{card.title}</KinlyHeading>
                    <KinlyText variant="bodyMedium">{card.body}</KinlyText>
                  </div>
                </KinlyCard>
              ))}
            </div>
          </section>

          <section id="ranges" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Indicative later-phase ranges</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                These ranges are indicative only. Variability increases as the work moves further into operational logic,
                reconciliation, and process-level consistency.
              </KinlyText>
            </div>
            <div className={styles.optionGrid}>
              {indicativeRanges.map((item) => (
                <KinlyCard key={item.phase} variant="surfaceContainerHigh">
                  <div className={styles.optionCard}>
                    <KinlyText variant="labelMedium" tone="muted" as="div">
                      {item.phase}
                    </KinlyText>
                    <KinlyHeading level={3}>{item.name}</KinlyHeading>
                    <KinlyText variant="bodyLarge">{item.range}</KinlyText>
                  </div>
                </KinlyCard>
              ))}
            </div>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.questionCard}>
                <KinlyText variant="bodyMedium">
                  The key variable is not whether these domains appear. The key variable is how far automation and
                  drill-through go in each one.
                </KinlyText>
              </div>
            </KinlyCard>
          </section>

          <section id="depth" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Depth by domain</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                Use this to stay honest in the meeting.
              </KinlyText>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Visible in first 3 months</th>
                    <th>Automated in first 3 months</th>
                    <th>Drillable in first 3 months</th>
                  </tr>
                </thead>
                <tbody>
                  {depthRows.map((row) => (
                    <tr key={row.domain}>
                      <td>{row.domain}</td>
                      <td>{row.visible}</td>
                      <td>{row.automated}</td>
                      <td>{row.drillable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.questionCard}>
                <KinlyText variant="bodyMedium">
                  The first commitment is visibility across the reporting landscape. Maturity depth varies by domain.
                </KinlyText>
              </div>
            </KinlyCard>
          </section>

          <section id="questions" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Key CEO questions</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                Keep the answer short first, then expand only if he wants the reasoning.
              </KinlyText>
            </div>
            <div className={styles.questionGrid}>
              {questionCards.map((card) => (
                <KinlyCard key={card.question} variant="surfaceContainer">
                  <div className={styles.questionCard}>
                    <KinlyHeading level={3}>{card.question}</KinlyHeading>
                    <div className={styles.answerPane}>
                      <KinlyText variant="labelMedium" tone="muted" as="div">
                        Short answer
                      </KinlyText>
                      <KinlyText variant="bodyMedium">{card.shortAnswer}</KinlyText>
                    </div>
                    <details className={styles.disclosure}>
                      <summary className={styles.disclosureSummary}>
                        <span className={styles.disclosureTitle}>Why and commercial meaning</span>
                        <span className={styles.disclosureToggle} aria-hidden="true" />
                      </summary>
                      <div className={styles.disclosureBody}>
                        <div className={styles.answerBlock}>
                          <KinlyText variant="labelMedium" tone="muted" as="div">
                            Why this is true
                          </KinlyText>
                          <KinlyText variant="bodyMedium">{card.why}</KinlyText>
                        </div>
                        <div className={styles.answerBlock}>
                          <KinlyText variant="labelMedium" tone="muted" as="div">
                            Commercial meaning
                          </KinlyText>
                          <KinlyText variant="bodyMedium">{card.commercialMeaning}</KinlyText>
                        </div>
                      </div>
                    </details>
                    <div className={styles.redirectBlock}>
                      <KinlyText variant="labelMedium" tone="muted" as="div">
                        Redirect question
                      </KinlyText>
                      <KinlyText variant="bodyMedium">{card.redirect}</KinlyText>
                    </div>
                  </div>
                </KinlyCard>
              ))}
            </div>
          </section>

          <section id="options" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Structure Options</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                Offer three choices only. More than that creates noise.
              </KinlyText>
            </div>
            <div className={styles.optionGrid}>
              {structureOptions.map((option, index) => (
                <KinlyCard key={option.name} variant="surfaceContainerHigh">
                  <div className={index === 1 ? styles.optionCardRecommended : styles.optionCard}>
                    <KinlyText variant="labelMedium" tone="muted" as="div">
                      {index === 1 ? "Recommended" : "Option"}
                    </KinlyText>
                    <KinlyHeading level={3}>{option.name}</KinlyHeading>
                    <KinlyText variant="bodyMedium">{option.body}</KinlyText>
                  </div>
                </KinlyCard>
              ))}
            </div>
          </section>

          <section id="levers" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Commercial Levers</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                If budget pressure comes up, trade through depth and sequencing before you trade away protection.
              </KinlyText>
            </div>
            <div className={styles.twoColumnGrid}>
              <KinlyCard variant="surfaceContainer">
                <div className={styles.listCard}>
                  <KinlyHeading level={3}>Trade these first</KinlyHeading>
                  <div className={styles.bulletList}>
                    {commercialLevers.tradeFirst.map((item) => (
                      <div key={item} className={styles.bulletItem}>
                        <span className={styles.bullet} aria-hidden="true" />
                        <KinlyText variant="bodyMedium">{item}</KinlyText>
                      </div>
                    ))}
                  </div>
                </div>
              </KinlyCard>
              <KinlyCard variant="surfaceContainer">
                <div className={styles.listCard}>
                  <KinlyHeading level={3}>Do not trade these first</KinlyHeading>
                  <div className={styles.bulletList}>
                    {commercialLevers.doNotTradeFirst.map((item) => (
                      <div key={item} className={styles.bulletItem}>
                        <span className={styles.bulletDanger} aria-hidden="true" />
                        <KinlyText variant="bodyMedium">{item}</KinlyText>
                      </div>
                    ))}
                  </div>
                </div>
              </KinlyCard>
            </div>
          </section>

          <section id="guardrails" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Private Guardrails</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                Fill these in privately before the meeting.
              </KinlyText>
            </div>
            <KinlyCard variant="surfaceContainerHigh">
              <div className={styles.guardrailCard}>
                <div className={styles.promptGrid}>
                  {privateGuardrails.map((prompt) => (
                    <div key={prompt} className={styles.promptCard}>
                      <KinlyText variant="labelMedium" tone="muted" as="div">
                        Fill in privately
                      </KinlyText>
                      <KinlyText variant="bodyMedium">{prompt}</KinlyText>
                    </div>
                  ))}
                </div>
              </div>
            </KinlyCard>
          </section>

          <section id="close" className={styles.section}>
            <div className={styles.sectionHeader}>
              <KinlyHeading level={2}>Close Scripts</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                End by recommending a structure and a next step.
              </KinlyText>
            </div>
            <div className={styles.closeGrid}>
              {closeScripts.map((item) => (
                <KinlyCard key={item.title} variant="surfaceContainer">
                  <div className={styles.closeCard}>
                    <KinlyHeading level={3}>{item.title}</KinlyHeading>
                    <KinlyText variant="bodyMedium">{item.script}</KinlyText>
                  </div>
                </KinlyCard>
              ))}
            </div>
          </section>

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.questionCard}>
              <KinlyHeading level={2}>One-line anchor</KinlyHeading>
              <KinlyText variant="bodyMedium">
                His real goal is to see the dashboards in one place. My job is to separate domain visibility from
                maturity depth.
              </KinlyText>
            </div>
          </KinlyCard>
        </KinlyStack>
        </div>
      </KinlyShell>
    </main>
  );
}
