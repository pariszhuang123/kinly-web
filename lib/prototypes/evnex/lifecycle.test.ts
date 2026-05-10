import { describe, expect, test } from "vitest";

import { EVNEX_BASE_PATH, formatCurrency, formatDays, formatPercent, getIssueTypeLabel } from "./lifecycle";

describe("evnex lifecycle helpers", () => {
  test("exposes labels and formatting helpers", () => {
    expect(EVNEX_BASE_PATH).toBe("/portfolio/evnex-control-tower");
    expect(getIssueTypeLabel("installation-backlog")).toBe("Installation Backlog");
    expect(getIssueTypeLabel("unknown-issue")).toBe("unknown-issue");
    expect(formatCurrency(75898)).toBe("$75,898");
    expect(formatPercent(27.63)).toBe("27.6%");
    expect(formatDays(28.6)).toBe("29 days");
  });
});
