import type { Metadata } from "next";
import { EvnexLifecycleSummary, KinlyStack, PageIntro } from "../../../../components";
import { buildPublicMetadata } from "../../../../lib/publicMetadata";
import { getEvnexRecords } from "../../../../lib/prototypes/evnex/data";
import { EVNEX_BASE_PATH } from "../../../../lib/prototypes/evnex/lifecycle";
import { buildEvnexSummary } from "../../../../lib/prototypes/evnex/summary";
import styles from "../../../../components/prototypes/evnex/EvnexControlTower.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Quote-to-Active Summary" },
  description: "Management summary of the Evnex quote-to-active control tower prototype.",
  path: `${EVNEX_BASE_PATH}/summary`,
  siteName: "Kinly by MakingLifeEasie",
});

export default async function EvnexSummaryPage() {
  const records = await getEvnexRecords();
  const summary = buildEvnexSummary(records);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Management view"
            title="Quote-to-Active Summary"
            subtitle="This page is now ordered around what is critical first: open exceptions, value at risk, the top operating story, and the actions that unblock the flow."
            asideTitle="Default lens"
            asideBody="Current 12-month mock dataset with exceptions surfaced before healthy flow."
          />
          <EvnexLifecycleSummary data={summary} />
        </KinlyStack>
      </div>
    </main>
  );
}
