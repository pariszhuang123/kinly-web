import { test, expect } from "@playwright/test";

const RPC_ROUTE = "**/rest/v1/rpc/leads_upsert_v1";

test.describe("Get Page Integration", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => window.localStorage.clear());
  });

  test("page loads with all form elements", async ({ page }) => {
    await page.goto("/kinly/get");

    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
    await expect(page.getByPlaceholder("Country code (e.g., US)")).toBeVisible();
    await expect(page.getByRole("button", { name: "Request access" })).toBeVisible();
  });

  test("email field validates format correctly", async ({ page }) => {
    await page.goto("/kinly/get");

    const emailInput = page.getByPlaceholder("you@example.com");
    const countryInput = page.getByPlaceholder("Country code (e.g., US)");
    const submit = page.getByRole("button", { name: "Request access" });

    await countryInput.fill("US");

    await emailInput.fill("invalid");
    await expect(submit).toBeDisabled();

    await emailInput.fill("invalid@");
    await expect(submit).toBeDisabled();

    await emailInput.fill("valid@example.com");
    await expect(submit).toBeEnabled();
  });

  test("country code field validates format correctly", async ({ page }) => {
    await page.goto("/kinly/get");

    const emailInput = page.getByPlaceholder("you@example.com");
    const countryInput = page.getByPlaceholder("Country code (e.g., US)");
    const submit = page.getByRole("button", { name: "Request access" });

    await emailInput.fill("user@example.com");

    await countryInput.fill("X");
    await expect(submit).toBeDisabled();

    await countryInput.fill("USA");
    await expect(submit).toBeDisabled();

    await countryInput.fill("US");
    await expect(submit).toBeEnabled();
  });

  test("form submits with trimmed and normalized values", async ({ page }) => {
    let capturedBody: Record<string, string> | null = null;

    await page.route(RPC_ROUTE, async (route) => {
      const request = route.request();
      capturedBody = JSON.parse(request.postData() || "{}");
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, lead_id: "test-id", deduped: false }),
      });
    });

    await page.goto("/kinly/get");

    await page.getByPlaceholder("you@example.com").fill("  user@example.com  ");
    await page.getByPlaceholder("Country code (e.g., US)").fill("  us  ");
    await page.getByRole("button", { name: "Request access" }).click();

    await expect(page.getByText(/Thanks/)).toBeVisible();

    expect(capturedBody).not.toBeNull();
    expect(capturedBody!.p_email).toBe("user@example.com");
    expect(capturedBody!.p_country_code).toBe("US");
  });

  test("deduped response shows appropriate message", async ({ page }) => {
    await page.route(RPC_ROUTE, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, lead_id: "existing-id", deduped: true }),
      });
    });

    await page.goto("/kinly/get");

    await page.getByPlaceholder("you@example.com").fill("existing@example.com");
    await page.getByPlaceholder("Country code (e.g., US)").fill("US");
    await page.getByRole("button", { name: "Request access" }).click();

    await expect(page.getByText(/Thanks|already/i)).toBeVisible();
  });

  test("network error shows error message", async ({ page }) => {
    await page.route(RPC_ROUTE, async (route) => {
      await route.abort("failed");
    });

    await page.goto("/kinly/get");

    await page.getByPlaceholder("you@example.com").fill("user@example.com");
    await page.getByPlaceholder("Country code (e.g., US)").fill("US");
    await page.getByRole("button", { name: "Request access" }).click();

    await expect(page.getByText(/error|failed|try again/i)).toBeVisible();
  });

  test("server error response shows error message", async ({ page }) => {
    await page.route(RPC_ROUTE, async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ code: "INTERNAL_ERROR", message: "Server error" }),
      });
    });

    await page.goto("/kinly/get");

    await page.getByPlaceholder("you@example.com").fill("user@example.com");
    await page.getByPlaceholder("Country code (e.g., US)").fill("US");
    await page.getByRole("button", { name: "Request access" }).click();

    await expect(page.getByText(/error|failed|try again/i)).toBeVisible();
  });

  test("form clears or persists state after successful submission", async ({ page }) => {
    await page.route(RPC_ROUTE, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, lead_id: "test-id", deduped: false }),
      });
    });

    await page.goto("/kinly/get");

    await page.getByPlaceholder("you@example.com").fill("user@example.com");
    await page.getByPlaceholder("Country code (e.g., US)").fill("US");
    await page.getByRole("button", { name: "Request access" }).click();

    await expect(page.getByText(/Thanks/)).toBeVisible();
  });

  test("ui_locale is sent with request", async ({ page }) => {
    let capturedBody: Record<string, string> | null = null;

    await page.route(RPC_ROUTE, async (route) => {
      capturedBody = JSON.parse(route.request().postData() || "{}");
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, lead_id: "test-id", deduped: false }),
      });
    });

    await page.goto("/kinly/get");

    await page.getByPlaceholder("you@example.com").fill("user@example.com");
    await page.getByPlaceholder("Country code (e.g., US)").fill("US");
    await page.getByRole("button", { name: "Request access" }).click();

    await expect(page.getByText(/Thanks/)).toBeVisible();

    expect(capturedBody).not.toBeNull();
    expect(capturedBody!.p_ui_locale).toBeDefined();
    expect(typeof capturedBody!.p_ui_locale).toBe("string");
  });
});
