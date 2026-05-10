import { describe, expect, test } from "vitest";

import type { EvnexRecord } from "./data";
import { applyActionFilters, buildFilterDefinitions, emptyActionFilters, parseActionFilters } from "./filters";

function makeRecord(overrides: Partial<EvnexRecord> = {}): EvnexRecord {
  return {
    leadId: "EVX-1",
    customer: "Customer",
    country: "NZ",
    city: "Auckland",
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

describe("evnex filters", () => {
  test("parses search params and normalises missing values", () => {
    expect(
      parseActionFilters({
        country: ["NZ", "US"],
        city: "Auckland",
        severity: undefined,
      }),
    ).toEqual({
      ...emptyActionFilters,
      country: "NZ",
      city: "Auckland",
    });
  });

  test("applies every supported filter field", () => {
    const records = [
      makeRecord(),
      makeRecord({
        leadId: "EVX-2",
        country: "US",
        city: "Austin",
        ownerTeam: "Finance",
        severity: "High",
        lifecycleStage: "Invoice not paid",
        salesRep: "Noah",
        technician: "",
        product: "X22",
      }),
    ];

    expect(
      applyActionFilters(records, {
        country: "NZ",
        city: "Auckland",
        ownerTeam: "Install Coordination",
        severity: "Critical",
        lifecycleStage: "Installation backlog",
        salesRep: "Ava",
        technician: "Mia",
        product: "E2 Core",
      }),
    ).toEqual([records[0]]);
  });

  test("builds sorted unique filter definitions", () => {
    const records = [
      makeRecord({ city: "Wellington", technician: "" }),
      makeRecord({ leadId: "EVX-2", city: "Auckland", ownerTeam: "Finance", severity: "High" }),
      makeRecord({ leadId: "EVX-3", city: "Auckland", ownerTeam: "Finance", severity: "High" }),
    ];

    expect(buildFilterDefinitions(records)).toEqual([
      { key: "country", label: "Country", options: ["NZ"] },
      { key: "city", label: "City", options: ["Auckland", "Wellington"] },
      { key: "ownerTeam", label: "Owner team", options: ["Finance", "Install Coordination"] },
      { key: "severity", label: "Severity", options: ["Critical", "High"] },
      { key: "lifecycleStage", label: "Lifecycle stage", options: ["Installation backlog"] },
      { key: "salesRep", label: "Sales rep", options: ["Ava"] },
      { key: "technician", label: "Technician", options: ["Mia"] },
      { key: "product", label: "Product", options: ["E2 Core"] },
    ]);
  });
});
