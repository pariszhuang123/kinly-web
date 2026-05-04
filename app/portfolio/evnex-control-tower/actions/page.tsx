import type { Metadata } from "next";
import { EvnexActionCentre, KinlyStack, PageIntro } from "../../../../components";
import { buildPublicMetadata } from "../../../../lib/publicMetadata";
import { buildActionCentreData } from "../../../../lib/prototypes/evnex/actions";
import { getEvnexRecords } from "../../../../lib/prototypes/evnex/data";
import { parseActionFilters } from "../../../../lib/prototypes/evnex/filters";
import { EVNEX_BASE_PATH } from "../../../../lib/prototypes/evnex/lifecycle";
import styles from "../../../../components/prototypes/evnex/EvnexControlTower.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Evnex Action Centre" },
  description: "All actionable Evnex control tower issues grouped by owner team.",
  path: `${EVNEX_BASE_PATH}/actions`,
  siteName: "Kinly by MakingLifeEasie",
});

export default async function EvnexActionsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const records = await getEvnexRecords();
  const filters = parseActionFilters(resolvedSearchParams);
  const data = buildActionCentreData(records, filters);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Owner view"
            title="Action Centre"
            subtitle="Grouped by owner team so each function can see the exceptions it owns, the value exposed, and the exact issue clusters to open next."
            asideTitle="Default sorting"
            asideBody="Severity desc, value at risk desc, oldest delay desc."
          />
          <EvnexActionCentre data={data} />
        </KinlyStack>
      </div>
    </main>
  );
}
