import { describe, expect, test } from "vitest";

import type { EvnexRecord } from "./data";
import { buildActionCentreData, buildIssueDetailData } from "./actions";
import { emptyActionFilters } from "./filters";

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
    paymentDate: "",
    orderReleaseDate: "",
    buildDate: "",
    shipDate: "",
    scheduledDate: "",
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

describe("evnex actions", () => {
  test("groups exception rows by owner team and sorts rows by severity and value", () => {
    const data = buildActionCentreData(
      [
        makeRecord(),
        makeRecord({
          leadId: "EVX-2",
          issueType: "invoice-not-paid",
          ownerTeam: "Finance",
          severity: "High",
          valueAtRisk: 2000,
          customer: "Debtor",
          paymentDate: "",
          technician: "",
        }),
        makeRecord({
          leadId: "EVX-3",
          issueType: "installation-backlog",
          ownerTeam: "Install Coordination",
          severity: "Critical",
          valueAtRisk: 1500,
          daysDelayed: 30,
          scheduledDate: "",
        }),
        makeRecord({
          leadId: "EVX-4",
          isException: false,
          issueType: "active-working",
          ownerTeam: "Support / Device Ops",
          lifecycleStage: "Active / working",
        }),
      ],
      emptyActionFilters,
    );

    expect(data.groups.map((group) => group.ownerTeam)).toEqual(["Finance", "Install Coordination"]);
    expect(data.groups[1]).toMatchObject({
      ownerTeam: "Install Coordination",
      totalRecords: 2,
      oldestDelay: 30,
    });
    expect(data.rows[0]).toMatchObject({
      leadId: "EVX-3",
      issueType: "Installation Backlog",
      scheduledDate: "Not scheduled",
    });
    expect(data.rows[2]).toMatchObject({
      leadId: "EVX-2",
      technician: "Unassigned",
      paymentDate: "Not paid",
    });
  });

  test("builds issue detail data with defaults when no filtered rows remain", () => {
    const records = [
      makeRecord(),
      makeRecord({
        leadId: "EVX-2",
        city: "Auckland",
        valueAtRisk: 2200,
        daysDelayed: 25,
        recommendedAction: "Escalate install slot",
      }),
    ];

    const withRows = buildIssueDetailData(records, "installation-backlog", emptyActionFilters);
    expect(withRows).toMatchObject({
      issueLabel: "Installation Backlog",
      ownerTeam: "Install Coordination",
      recordCount: 2,
      totalValueAtRisk: 3200,
      oldestUnresolvedItem: 25,
      topAffectedCity: "Auckland",
    });

    const noRows = buildIssueDetailData(records, "installation-backlog", {
      ...emptyActionFilters,
      city: "Wellington",
    });
    expect(noRows).toMatchObject({
      recordCount: 0,
      totalValueAtRisk: 0,
      oldestUnresolvedItem: 0,
      topAffectedCity: "No city",
      recommendedNextAction: "No action available",
      ownerTeam: "Install Coordination",
    });
  });
});
