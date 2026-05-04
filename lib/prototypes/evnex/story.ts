import type { EvnexRecord } from "./data";
import { formatCurrency } from "./lifecycle";

export function buildTodayStory(records: EvnexRecord[]) {
  const installationBacklog = records.filter((record) => record.issueType === "installation-backlog");

  if (installationBacklog.length === 0) {
    return "No installation backlog is open today. The operation can focus on keeping installed devices active.";
  }

  const cityGroups = new Map<string, { count: number; valueAtRisk: number; oldestDelay: number }>();

  for (const record of installationBacklog) {
    const current = cityGroups.get(record.city) ?? { count: 0, valueAtRisk: 0, oldestDelay: 0 };
    current.count += 1;
    current.valueAtRisk += record.valueAtRisk;
    current.oldestDelay = Math.max(current.oldestDelay, record.daysDelayed);
    cityGroups.set(record.city, current);
  }

  const [topCity, summary] = Array.from(cityGroups.entries()).sort((left, right) => {
    if (right[1].count !== left[1].count) return right[1].count - left[1].count;
    return right[1].valueAtRisk - left[1].valueAtRisk;
  })[0];

  return `${topCity} has the highest installation backlog with ${summary.count} orders waiting for technician completion. This represents ${formatCurrency(summary.valueAtRisk)} in value at risk and may delay customers from using their chargers. Install Coordination should prioritise the oldest scheduled jobs and check technician capacity this week.`;
}
