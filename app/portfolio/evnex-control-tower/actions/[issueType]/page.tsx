import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EvnexIssueDetail, KinlyStack, PageIntro } from "../../../../../components";
import { buildPublicMetadata } from "../../../../../lib/publicMetadata";
import { buildIssueDetailData } from "../../../../../lib/prototypes/evnex/actions";
import { getEvnexRecords } from "../../../../../lib/prototypes/evnex/data";
import { parseActionFilters } from "../../../../../lib/prototypes/evnex/filters";
import { EVNEX_BASE_PATH, getIssueTypeLabel } from "../../../../../lib/prototypes/evnex/lifecycle";
import styles from "../../../../../components/prototypes/evnex/EvnexControlTower.module.css";

type PageProps = {
  params: Promise<{ issueType: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { issueType } = await params;

  return buildPublicMetadata({
    title: { absolute: `Kinly | ${getIssueTypeLabel(issueType)}` },
    description: `Record-level action detail for ${getIssueTypeLabel(issueType)} in the Evnex control tower prototype.`,
    path: `${EVNEX_BASE_PATH}/actions/${issueType}`,
    siteName: "Kinly by MakingLifeEasie",
  });
}

export default async function EvnexIssueTypePage({ params, searchParams }: PageProps) {
  const [{ issueType }, resolvedSearchParams, records] = await Promise.all([params, searchParams, getEvnexRecords()]);

  if (!records.some((record) => record.issueType === issueType)) {
    notFound();
  }

  const filters = parseActionFilters(resolvedSearchParams);
  const data = buildIssueDetailData(records, issueType, filters);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Issue drill-down"
            title={data.issueLabel}
            subtitle="The detail page shows the exact records that need action, the context around the delay, and the recommended next step for each item."
            asideTitle="Recommended next action"
            asideBody={data.recommendedNextAction}
          />
          <EvnexIssueDetail data={data} />
        </KinlyStack>
      </div>
    </main>
  );
}
