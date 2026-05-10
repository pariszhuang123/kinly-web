import { describe, expect, test } from "vitest";

import type { EvnexRecord } from "./data";
import { buildTodayStory } from "./story";

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

describe("buildTodayStory", () => {
  test("returns a calm message when no installation backlog exists", () => {
    expect(
      buildTodayStory([
        makeRecord({ issueType: "invoice-not-paid", city: "Auckland" }),
      ]),
    ).toContain("No installation backlog is open today");
  });

  test("summarises the top installation backlog city", () => {
    const story = buildTodayStory([
      makeRecord({ city: "Christchurch", valueAtRisk: 1200, daysDelayed: 14 }),
      makeRecord({ leadId: "EVX-2", city: "Christchurch", valueAtRisk: 900, daysDelayed: 28 }),
      makeRecord({ leadId: "EVX-3", city: "Auckland", valueAtRisk: 3000, daysDelayed: 5 }),
    ]);

    expect(story).toContain("Christchurch has the highest installation backlog");
    expect(story).toContain("$2,100");
    expect(story).toContain("Install Coordination should prioritise the oldest scheduled jobs");
  });
});
