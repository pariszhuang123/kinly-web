import type { EvnexRecord } from "./data";
import type { ActionFilters, FilterDefinition } from "./filters";
import { applyActionFilters, buildFilterDefinitions } from "./filters";
import { EVNEX_BASE_PATH, getIssueTypeLabel, ownerTeamOrder, severityRank } from "./lifecycle";

export type ActionGroup = {
  ownerTeam: string;
  totalRecords: number;
  totalValueAtRisk: number;
  oldestDelay: number;
  issueCards: {
    issueType: string;
    label: string;
    count: number;
    valueAtRisk: number;
    severity: string;
    href: string;
  }[];
};

export type ActionTableRow = {
  leadId: string;
  issueSlug: string;
  customer: string;
  country: string;
  city: string;
  issueType: string;
  lifecycleStage: string;
  ownerTeam: string;
  severity: string;
  valueAtRisk: number;
  daysDelayed: number;
  recommendedAction: string;
  salesRep: string;
  technician: string;
  product: string;
  quoteValue: number;
  paymentDate: string;
  shipDate: string;
  scheduledDate: string;
};

export type ActionCentreData = {
  filters: FilterDefinition[];
  selectedFilters: ActionFilters;
  groups: ActionGroup[];
  rows: ActionTableRow[];
};

export type IssueDetailData = {
  filters: FilterDefinition[];
  selectedFilters: ActionFilters;
  issueType: string;
  issueLabel: string;
  ownerTeam: string;
  recordCount: number;
  totalValueAtRisk: number;
  oldestUnresolvedItem: number;
  topAffectedCity: string;
  recommendedNextAction: string;
  rows: ActionTableRow[];
};

function sortExceptionRows(records: EvnexRecord[]) {
  return [...records].sort((left, right) => {
    const severityDelta = severityRank[right.severity] - severityRank[left.severity];
    if (severityDelta !== 0) return severityDelta;
    if (right.valueAtRisk !== left.valueAtRisk) return right.valueAtRisk - left.valueAtRisk;
    return right.daysDelayed - left.daysDelayed;
  });
}

function toActionTableRow(record: EvnexRecord): ActionTableRow {
  return {
    leadId: record.leadId,
    issueSlug: record.issueType,
    customer: record.customer,
    country: record.country,
    city: record.city,
    issueType: getIssueTypeLabel(record.issueType),
    lifecycleStage: record.lifecycleStage,
    ownerTeam: record.ownerTeam,
    severity: record.severity,
    valueAtRisk: record.valueAtRisk,
    daysDelayed: record.daysDelayed,
    recommendedAction: record.recommendedAction,
    salesRep: record.salesRep,
    technician: record.technician || "Unassigned",
    product: record.product,
    quoteValue: record.quoteValue,
    paymentDate: record.paymentDate || "Not paid",
    shipDate: record.shipDate || "Not shipped",
    scheduledDate: record.scheduledDate || "Not scheduled",
  };
}

export function buildActionCentreData(records: EvnexRecord[], filters: ActionFilters): ActionCentreData {
  const exceptionRecords = sortExceptionRows(applyActionFilters(records.filter((record) => record.isException), filters));

  const groups: ActionGroup[] = [];

  for (const ownerTeam of ownerTeamOrder) {
    const ownerRecords = exceptionRecords.filter((record) => record.ownerTeam === ownerTeam);
    if (ownerRecords.length === 0) continue;

    const issueCards = Array.from(
      ownerRecords.reduce((map, record) => {
        const current = map.get(record.issueType) ?? {
          issueType: record.issueType,
          label: getIssueTypeLabel(record.issueType),
          count: 0,
          valueAtRisk: 0,
          severity: record.severity,
          href: `${EVNEX_BASE_PATH}/actions/${record.issueType}`,
        };

        current.count += 1;
        current.valueAtRisk += record.valueAtRisk;
        if (severityRank[record.severity] > severityRank[current.severity]) {
          current.severity = record.severity;
        }
        map.set(record.issueType, current);
        return map;
      }, new Map<string, ActionGroup["issueCards"][number]>())
    )
      .map(([, value]) => value)
      .sort((left, right) => {
        const severityDelta = severityRank[right.severity] - severityRank[left.severity];
        if (severityDelta !== 0) return severityDelta;
        return right.valueAtRisk - left.valueAtRisk;
      });

    groups.push({
      ownerTeam,
      totalRecords: ownerRecords.length,
      totalValueAtRisk: ownerRecords.reduce((sum, record) => sum + record.valueAtRisk, 0),
      oldestDelay: Math.max(...ownerRecords.map((record) => record.daysDelayed)),
      issueCards,
    });
  }

  return {
    filters: buildFilterDefinitions(records.filter((record) => record.isException)),
    selectedFilters: filters,
    groups,
    rows: exceptionRecords.map(toActionTableRow),
  };
}

export function buildIssueDetailData(records: EvnexRecord[], issueType: string, filters: ActionFilters): IssueDetailData {
  const baseRecords = records.filter((record) => record.issueType === issueType);
  const issueRecords = sortExceptionRows(applyActionFilters(baseRecords, filters));

  const topCity = Array.from(
    issueRecords.reduce((map, record) => {
      const current = map.get(record.city) ?? { city: record.city, count: 0 };
      current.count += 1;
      map.set(record.city, current);
      return map;
    }, new Map<string, { city: string; count: number }>())
  )
    .map(([, value]) => value)
    .sort((left, right) => right.count - left.count)[0];

  return {
    filters: buildFilterDefinitions(baseRecords),
    selectedFilters: filters,
    issueType,
    issueLabel: getIssueTypeLabel(issueType),
    ownerTeam: issueRecords[0]?.ownerTeam ?? baseRecords[0]?.ownerTeam ?? "Unassigned",
    recordCount: issueRecords.length,
    totalValueAtRisk: issueRecords.reduce((sum, record) => sum + record.valueAtRisk, 0),
    oldestUnresolvedItem: Math.max(0, ...issueRecords.map((record) => record.daysDelayed)),
    topAffectedCity: topCity?.city ?? "No city",
    recommendedNextAction: issueRecords[0]?.recommendedAction ?? "No action available",
    rows: issueRecords.map(toActionTableRow),
  };
}
