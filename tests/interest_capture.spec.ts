import { test, expect } from "@playwright/test";

const RPC_ROUTE = "**/rest/v1/rpc/leads_upsert_v1";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear());
});

test("validation gating blocks submit until email and country are valid", async ({ page }) => {
  await page.goto("/kinly/get");

  const submit = page.getByRole("button", { name: "Request access" });
  await expect(submit).toBeDisabled();

  await page.getByPlaceholder("you@example.com").fill("not-an-email");
  await page.getByPlaceholder("Country code (e.g., US)").fill("U");
  await expect(submit).toBeDisabled();

  await page.getByPlaceholder("you@example.com").fill("user@example.com");
  await page.getByPlaceholder("Country code (e.g., US)").fill("US");
  await expect(submit).toBeEnabled();
});

test("rate limit response shows cooldown messaging and disables submit", async ({ page }) => {
  await page.route(RPC_ROUTE, async (route) => {
    await route.fulfill({
      status: 429,
      contentType: "application/json",
      body: JSON.stringify({
        code: "LEADS_RATE_LIMIT_EMAIL",
        message: "Too many attempts",
      }),
    });
  });

  await page.goto("/kinly/get");

  await page.getByPlaceholder("you@example.com").fill("user@example.com");
  await page.getByPlaceholder("Country code (e.g., US)").fill("US");

  const submit = page.getByRole("button", { name: "Request access" });
  await submit.click();

  const rateLimitMessages = page.getByText(/Too many tries right now/);
  await expect(rateLimitMessages).toHaveCount(2);
  await expect(rateLimitMessages.first()).toBeVisible();
  await expect(rateLimitMessages.nth(1)).toBeVisible();

  const waitMessage = page.getByText(/wait 30 seconds and try again/i);
  await expect(waitMessage).toHaveCount(2);
  await expect(waitMessage.first()).toBeVisible();
  await expect(waitMessage.nth(1)).toBeVisible();
  await expect(submit).toBeDisabled();
});

test("successful submission shows confirmation", async ({ page }) => {
  await page.route(RPC_ROUTE, async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        lead_id: "uuid",
        deduped: false,
      }),
    });
  });

  await page.goto("/kinly/get");

  await page.getByPlaceholder("you@example.com").fill("user@example.com");
  await page.getByPlaceholder("Country code (e.g., US)").fill("US");

  await page.getByRole("button", { name: "Request access" }).click();

  await expect(page.getByText(/Thanks/)).toBeVisible();
  await expect(page.getByText(/ready in your area/i)).toBeVisible();
});
