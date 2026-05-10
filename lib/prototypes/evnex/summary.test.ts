import { describe, expect, test } from "vitest";

import type { EvnexRecord } from "./data";
import { buildEvnexSummary } from "./summary";

function makeRecord(overrides: Partial<EvnexRecord> = {}): EvnexRecord {
  return {
    leadId: "EVX-1",
    customer: "Customer",
    country: "NZ",
    city: "Christchurch",
    salesRep: "Ava",
    technician: "Mia",
    product: "E2 Core",
    quoteValue: 1000,
    quoteStatus: "ACCEPTED",
    leadCreatedDate: "2025-01-01",
    quoteSentDate: "2025-01-02",
    quoteAcceptedDate: "2025-01-03",
    invoiceDate: "2025-01-04",
    paymentDate: "2025-01-05",
    orderReleaseDate: "2025-01-06",
    buildDate: "2025-01-07",
    shipDate: "2025-01-08",
    scheduledDate: "2025-01-09",
    installDate: "",
    activationDate: "",
    lifecycleStage: "Installation backlog",
    issueType: "installation-backlog",
    ownerTeam: "Install Coordination",
    severity: "Critical",
    recommendedAction: "Call customer",
    isException: true,
    valueAtRisk: 1000,
    daysDelayed: 10,
    daysLeadToQuote: 1,
    daysQuoteToPayment: 2,
    daysPaymentToInstall: 3,
    daysInstallToActive: 0,
    daysLeadToActive: 0,
    ...overrides,
  };
}

describe("buildEvnexSummary", () => {
  test("builds metrics, rankings, and default decision copy from mixed records", () => {
    const summary = buildEvnexSummary([
      makeRecord({
        leadId: "EVX-1",
        city: "Christchurch",
        valueAtRisk: 3000,
        daysDelayed: 20,
      }),
      makeRecord({
        leadId: "EVX-2",
        city: "Christchurch",
        valueAtRisk: 2000,
        daysDelayed: 15,
        salesRep: "Noah",
      }),
      makeRecord({
        leadId: "EVX-3",
        issueType: "invoice-not-paid",
        ownerTeam: "Finance",
        lifecycleStage: "Invoice not paid",
        valueAtRisk: 5000,
        daysDelayed: 40,
        paymentDate: "",
        orderReleaseDate: "",
        buildDate: "",
        shipDate: "",
        scheduledDate: "",
        salesRep: "Ava",
      }),
      makeRecord({
        leadId: "EVX-4",
        issueType: "shipping-backlog",
        ownerTeam: "Logistics",
        lifecycleStage: "Shipping backlog",
        valueAtRisk: 1500,
        city: "Auckland",
        salesRep: "Noah",
      }),
      makeRecord({
        leadId: "EVX-5",
        issueType: "active-working",
        ownerTeam: "Support / Device Ops",
        lifecycleStage: "Active / working",
        isException: false,
        valueAtRisk: 0,
        activationDate: "2025-01-10",
        installDate: "2025-01-09",
        daysInstallToActive: 1,
        daysLeadToActive: 9,
      }),
      makeRecord({
        leadId: "EVX-6",
        issueType: "closed-lost-expired",
        ownerTeam: "Sales",
        lifecycleStage: "Closed lost/expired",
        quoteStatus: "EXPIRED",
        isException: false,
        valueAtRisk: 0,
        paymentDate: "",
        orderReleaseDate: "",
        buildDate: "",
        shipDate: "",
        scheduledDate: "",
      }),
    ]);

    expect(summary.metrics[0]).toMatchObject({ label: "Total leads", value: "6" });
    expect(summary.metrics[5].value).toBe("NZ$11,500");
    expect(summary.priorityHeadline).toMatchObject({
      issueType: "installation-backlog",
      ownerTeam: "Install Coordination",
      openCount: 2,
      topCity: "Christchurch",
    });
    expect(summary.decisionRequired.title).toContain("Approve temporary install capacity");
    expect(summary.decisionRequired.href).toContain("/portfolio/evnex-control-tower/actions/installation-backlog");
    expect(summary.topActions[0]).toMatchObject({ issueType: "installation-backlog", count: 2 });
    expect(summary.regionalBreakdown[0]).toMatchObject({ city: "Christchurch", openExceptions: 3 });
    expect(summary.salesPerformance).toHaveLength(2);
    expect(summary.todayStory).toContain("Christchurch has the highest installation backlog");
  });

  test("uses issue-specific decision copy for finance and activation scenarios", () => {
    const financeSummary = buildEvnexSummary([
      makeRecord({
        issueType: "invoice-not-paid",
        ownerTeam: "Finance",
        lifecycleStage: "Invoice not paid",
        valueAtRisk: 7000,
        paymentDate: "",
        orderReleaseDate: "",
        buildDate: "",
        shipDate: "",
        scheduledDate: "",
      }),
    ]);
    expect(financeSummary.decisionRequired.title).toBe("Escalate overdue invoice recovery this week");
    expect(financeSummary.decisionRequired.summary).toContain("unpaid invoice items are blocking");

    const activationSummary = buildEvnexSummary([
      makeRecord({
        issueType: "installed-not-active",
        ownerTeam: "Support / Device Ops",
        lifecycleStage: "Installed not active",
        valueAtRisk: 4200,
        installDate: "2025-01-09",
        activationDate: "",
      }),
    ]);
    expect(activationSummary.decisionRequired.title).toBe("Prioritise activation recovery for installed devices");
    expect(activationSummary.decisionRequired.summary).toContain("installed chargers are not yet active");
  });
});
