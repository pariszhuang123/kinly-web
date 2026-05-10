import { beforeEach, describe, expect, test, vi } from "vitest";

describe("getEvnexRecords", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  test("maps CSV rows into records and caches the result", async () => {
    const loadCsv = vi.fn().mockResolvedValue([
      {
        lead_id: "EVX-1",
        customer: "Customer",
        country: "NZ",
        city: "Auckland",
        sales_rep: "Ava",
        technician: "",
        product: "E2 Core",
        quote_value: "1499",
        quote_status: "ACCEPTED",
        lead_created_date: "2025-01-01",
        quote_sent_date: "2025-01-02",
        quote_accepted_date: "2025-01-03",
        invoice_date: "2025-01-04",
        payment_date: "",
        order_release_date: "",
        build_date: "",
        ship_date: "",
        scheduled_date: "",
        install_date: "",
        activation_date: "",
        lifecycle_stage: "Installation backlog",
        issue_type: "installation-backlog",
        owner_team: "Install Coordination",
        severity: "Critical",
        recommended_action: "Call customer",
        is_exception: "YES",
        value_at_risk: "1499",
        days_delayed: "12",
        days_lead_to_quote: "1",
        days_quote_to_payment: "2",
        days_payment_to_install: "3",
        days_install_to_active: "bad-number",
        days_lead_to_active: "",
      },
    ]);

    vi.doMock("../../shared/csv-loader", () => ({ loadCsv }));

    const { getEvnexRecords } = await import("./data");
    const first = await getEvnexRecords();
    const second = await getEvnexRecords();

    expect(loadCsv).toHaveBeenCalledTimes(1);
    expect(first).toBe(second);
    expect(first[0]).toMatchObject({
      leadId: "EVX-1",
      quoteValue: 1499,
      isException: true,
      valueAtRisk: 1499,
      daysInstallToActive: 0,
      daysLeadToActive: 0,
    });
  });
});
