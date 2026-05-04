export const EVNEX_BASE_PATH = "/portfolio/evnex-control-tower";

export const stageOrder = [
  "Quote sent awaiting decision",
  "Accepted quote invoice missing",
  "Invoice not paid",
  "Paid order missing",
  "Build/allocation backlog",
  "Shipping backlog",
  "Installation backlog",
  "Failed install",
  "Installed not active",
  "Active / working",
  "Closed lost/expired",
] as const;

export const funnelStageOrder = [
  "Quote sent",
  "Quote accepted",
  "Invoice paid",
  "Order released",
  "Built/allocated",
  "Shipped",
  "Installed",
  "Active",
] as const;

export const issueTypeLabels: Record<string, string> = {
  "accepted-quote-invoice-missing": "Accepted Quote Invoice Missing",
  "active-working": "Active / Working",
  "build-allocation-backlog": "Build / Allocation Backlog",
  "closed-lost-expired": "Closed Lost / Expired",
  "failed-install": "Failed Install",
  "installation-backlog": "Installation Backlog",
  "installed-not-active": "Installed Not Active",
  "invoice-not-paid": "Invoice Not Paid",
  "paid-order-missing": "Paid Order Missing",
  "quote-sent-awaiting-decision": "Quote Sent Awaiting Decision",
  "shipping-backlog": "Shipping Backlog",
};

export const ownerTeamOrder = [
  "Finance",
  "ERP Operations",
  "Operations / Manufacturing",
  "Logistics",
  "Install Coordination",
  "Technical Support",
  "Support / Device Ops",
  "Sales",
] as const;

export const severityRank: Record<string, number> = {
  Critical: 4,
  High: 3,
  Medium: 2,
  Low: 1,
};

export function getIssueTypeLabel(issueType: string) {
  return issueTypeLabels[issueType] ?? issueType;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

export function formatDays(value: number) {
  return `${Math.round(value)} days`;
}
