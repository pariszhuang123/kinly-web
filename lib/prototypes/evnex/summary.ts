import type { EvnexRecord } from "./data";
import { getIssueTypeLabel } from "./lifecycle";
import { buildTodayStory } from "./story";

type KpiMetric = {
  label: string;
  value: string;
  note: string;
};

type ChartItem = {
  label: string;
  count: number;
  value?: number;
};

type RegionalRow = {
  country: string;
  city: string;
  openExceptions: number;
  valueAtRisk: number;
  averageDelay: number;
};

type SalesRow = {
  salesRep: string;
  acceptedQuotes: number;
  activeDevices: number;
  openExceptions: number;
  completionRate: number;
};

type TopAction = {
  issueType: string;
  label: string;
  count: number;
  ownerTeam: string;
  valueAtRisk: number;
};

type PriorityHeadline = {
  title: string;
  issueType: string;
  ownerTeam: string;
  valueAtRisk: number;
  openCount: number;
  topCity: string;
};

type DecisionRequired = {
  title: string;
  summary: string;
  ownerTeam: string;
  href: string;
};

export type EvnexSummaryData = {
  metrics: KpiMetric[];
  funnel: ChartItem[];
  exceptionsByStage: ChartItem[];
  regionalBreakdown: RegionalRow[];
  salesPerformance: SalesRow[];
  todayStory: string;
  topActions: TopAction[];
  priorityHeadline: PriorityHeadline;
  decisionRequired: DecisionRequired;
};

function average(numbers: number[]) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

function countWhen(records: EvnexRecord[], predicate: (record: EvnexRecord) => boolean) {
  return records.reduce((sum, record) => sum + (predicate(record) ? 1 : 0), 0);
}

export function buildEvnexSummary(records: EvnexRecord[]): EvnexSummaryData {
  const totalLeads = records.length;
  const acceptedQuotes = countWhen(records, (record) => record.quoteStatus === "ACCEPTED");
  const paidInvoices = countWhen(records, (record) => Boolean(record.paymentDate));
  const activeDevices = countWhen(records, (record) => record.lifecycleStage === "Active / working");
  const openExceptions = countWhen(records, (record) => record.isException);
  const valueAtRisk = records.reduce((sum, record) => sum + record.valueAtRisk, 0);
  const leadToActiveRecords = records.filter((record) => record.daysLeadToActive > 0);
  const averageLeadToActiveDays = average(leadToActiveRecords.map((record) => record.daysLeadToActive));
  const activationSuccessRate = paidInvoices === 0 ? 0 : (activeDevices / paidInvoices) * 100;

  const metrics: KpiMetric[] = [
    { label: "Total leads", value: String(totalLeads), note: "37 leads are in the current mock operating dataset" },
    { label: "Accepted quotes", value: String(acceptedQuotes), note: "35 quotes have converted into committed demand" },
    { label: "Paid invoices", value: String(paidInvoices), note: "29 orders are financially ready to fulfil" },
    { label: "Active devices", value: String(activeDevices), note: "8 customers have reached a working charger" },
    { label: "Open exceptions", value: String(openExceptions), note: "22 customer orders are currently stuck" },
    { label: "Value at risk", value: `NZ$${valueAtRisk.toLocaleString("en-NZ")}`, note: "NZ$75,898 of accepted revenue is delayed or at risk" },
    {
      label: "Average lead-to-active days",
      value: averageLeadToActiveDays.toFixed(0),
      note: "Completed activations took 29 days on average",
    },
    {
      label: "Activation success rate",
      value: `${activationSuccessRate.toFixed(1)}%`,
      note: "Only 27.6% of paid orders have reached active chargers",
    },
  ];

  const funnel: ChartItem[] = [
    { label: "Quote sent", count: countWhen(records, (record) => Boolean(record.quoteSentDate)) },
    { label: "Quote accepted", count: countWhen(records, (record) => Boolean(record.quoteAcceptedDate)) },
    { label: "Invoice paid", count: countWhen(records, (record) => Boolean(record.paymentDate)) },
    { label: "Order released", count: countWhen(records, (record) => Boolean(record.orderReleaseDate)) },
    { label: "Built/allocated", count: countWhen(records, (record) => Boolean(record.buildDate)) },
    { label: "Shipped", count: countWhen(records, (record) => Boolean(record.shipDate)) },
    { label: "Installed", count: countWhen(records, (record) => Boolean(record.installDate)) },
    { label: "Active", count: countWhen(records, (record) => record.lifecycleStage === "Active / working") },
  ];

  const exceptionIssueTypes = [
    "invoice-not-paid",
    "build-allocation-backlog",
    "shipping-backlog",
    "installation-backlog",
    "failed-install",
    "installed-not-active",
  ];

  const exceptionsByStage = exceptionIssueTypes.map((issueType) => ({
    label: getIssueTypeLabel(issueType),
    rows: records.filter((record) => record.issueType === issueType),
  })).map(({ label, rows }) => ({
    label,
    count: rows.length,
    value: rows.reduce((sum, record) => sum + record.valueAtRisk, 0),
  }));

  const regionalBreakdown: RegionalRow[] = Array.from(
    records.reduce((map, record) => {
      const key = `${record.country}::${record.city}`;
      const current = map.get(key) ?? {
        country: record.country,
        city: record.city,
        openExceptions: 0,
        valueAtRisk: 0,
        delays: [] as number[],
      };

      if (record.isException) {
        current.openExceptions += 1;
        current.valueAtRisk += record.valueAtRisk;
        if (record.daysDelayed > 0) {
          current.delays.push(record.daysDelayed);
        }
      }

      map.set(key, current);
      return map;
    }, new Map<string, { country: string; city: string; openExceptions: number; valueAtRisk: number; delays: number[] }>())
  ).map(([, value]) => ({
    country: value.country,
    city: value.city,
    openExceptions: value.openExceptions,
    valueAtRisk: value.valueAtRisk,
    averageDelay: average(value.delays),
  }));

  regionalBreakdown.sort((left, right) => {
    if (right.openExceptions !== left.openExceptions) return right.openExceptions - left.openExceptions;
    return right.valueAtRisk - left.valueAtRisk;
  });

  const salesPerformance: SalesRow[] = Array.from(
    records.reduce((map, record) => {
      const current = map.get(record.salesRep) ?? {
        salesRep: record.salesRep,
        acceptedQuotes: 0,
        activeDevices: 0,
        openExceptions: 0,
      };

      if (record.quoteStatus === "ACCEPTED") current.acceptedQuotes += 1;
      if (record.lifecycleStage === "Active / working") current.activeDevices += 1;
      if (record.isException) current.openExceptions += 1;

      map.set(record.salesRep, current);
      return map;
    }, new Map<string, { salesRep: string; acceptedQuotes: number; activeDevices: number; openExceptions: number }>())
  ).map(([, value]) => ({
    ...value,
    completionRate: value.acceptedQuotes === 0 ? 0 : (value.activeDevices / value.acceptedQuotes) * 100,
  }));

  salesPerformance.sort((left, right) => right.acceptedQuotes - left.acceptedQuotes);

  const topActions: TopAction[] = Array.from(
    records
      .filter((record) => record.isException)
      .reduce((map, record) => {
          const current = map.get(record.issueType) ?? {
            issueType: record.issueType,
            label: getIssueTypeLabel(record.issueType),
            count: 0,
          ownerTeam: record.ownerTeam,
          valueAtRisk: 0,
        };
        current.count += 1;
        current.valueAtRisk += record.valueAtRisk;
        map.set(record.issueType, current);
        return map;
      }, new Map<string, TopAction>())
  ).map(([, value]) => value);

  topActions.sort((left, right) => {
    if (right.count !== left.count) return right.count - left.count;
    return right.valueAtRisk - left.valueAtRisk;
  });

  const priorityIssue = topActions[0];
  const priorityRows = priorityIssue
    ? records.filter((record) => record.issueType === priorityIssue.issueType)
    : [];
  const priorityCity = Array.from(
    priorityRows.reduce((map, record) => {
      const current = map.get(record.city) ?? { city: record.city, count: 0 };
      current.count += 1;
      map.set(record.city, current);
      return map;
    }, new Map<string, { city: string; count: number }>())
  )
    .map(([, value]) => value)
    .sort((left, right) => right.count - left.count)[0];

  return {
    metrics,
    funnel,
    exceptionsByStage,
    regionalBreakdown: regionalBreakdown.filter((row) => row.openExceptions > 0).slice(0, 6),
    salesPerformance: salesPerformance.slice(0, 4),
    todayStory: buildTodayStory(records),
    topActions: topActions.slice(0, 3),
    priorityHeadline: {
      title: priorityIssue?.label ?? "No open issues",
      issueType: priorityIssue?.issueType ?? "",
      ownerTeam: priorityIssue?.ownerTeam ?? "No owner",
      valueAtRisk: priorityIssue?.valueAtRisk ?? 0,
      openCount: priorityIssue?.count ?? 0,
      topCity: priorityCity?.city ?? "No city",
    },
    decisionRequired: {
      title:
        priorityIssue?.issueType === "installation-backlog"
          ? `Approve temporary install capacity in ${priorityCity?.city ?? "the top backlog city"}`
          : priorityIssue?.issueType === "invoice-not-paid"
            ? "Escalate overdue invoice recovery this week"
            : priorityIssue?.issueType === "installed-not-active"
              ? "Prioritise activation recovery for installed devices"
              : `Escalate ${priorityIssue?.label ?? "the leading exception"} this week`,
      summary:
        priorityIssue?.issueType === "installation-backlog"
          ? `${priorityIssue.count} installation backlog items are open in ${priorityCity?.city ?? "the lead city"}, exposing ${`NZ$${priorityIssue.valueAtRisk.toLocaleString("en-NZ")}`}. Leadership should approve short-term technician capacity or reschedule lower-priority work.`
          : priorityIssue?.issueType === "invoice-not-paid"
            ? `${priorityIssue.count} unpaid invoice items are blocking ${`NZ$${priorityIssue.valueAtRisk.toLocaleString("en-NZ")}`} from progressing through the operating flow. Leadership should align Finance and Sales on an escalation path for overdue accounts.`
            : priorityIssue?.issueType === "installed-not-active"
              ? `${priorityIssue.count} installed chargers are not yet active, putting ${`NZ$${priorityIssue.valueAtRisk.toLocaleString("en-NZ")}`} at risk after installation spend has already been incurred. Leadership should prioritise device ops recovery this week.`
              : `${priorityIssue?.count ?? 0} records are open in the leading exception queue, exposing ${`NZ$${(priorityIssue?.valueAtRisk ?? 0).toLocaleString("en-NZ")}`}. Leadership should unblock the owner team before the backlog spreads further.`,
      ownerTeam: priorityIssue?.ownerTeam ?? "No owner",
      href: priorityIssue ? `/portfolio/evnex-control-tower/actions/${priorityIssue.issueType}` : "",
    },
  };
}
