import { expect, test } from "@playwright/test";

const LEAD_ROUTE = "**/api/piano/lead";

test.describe("Piano Page Integration", () => {
  test("renders the opening stage and later philosophy scene", async ({ page }) => {
    await page.goto("/piano");

    await expect(page.getByRole("heading", { name: "Want to have fun learning music?" })).toBeVisible();
    await expect(page.locator("iframe")).toHaveCount(3);
    await expect(page.getByText("Classical to pop")).toBeVisible();
    await expect(page.getByRole("link", { name: "Open on YouTube" })).toBeVisible();
    await expect(page.getByLabel("Show video 2: Children's song to pop")).toBeVisible();
    await expect(page.getByLabel("Show video 3: Wedding song to pop")).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2.2));
    await expect(page.getByText("Three simple ideas sit underneath the teaching style.")).toBeVisible();
  });

  test("submits through the shared leads RPC with piano source", async ({ page }) => {
    let capturedBody: Record<string, string> | null = null;

    await page.route(LEAD_ROUTE, async (route) => {
      capturedBody = JSON.parse(route.request().postData() || "{}");
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, lead_id: "piano-1", deduped: false, notification_sent: true }),
      });
    });

    await page.goto("/piano");

    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 3.2));
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
    await page.getByPlaceholder("you@example.com").fill(" parent@example.com ");
    await expect(page.getByRole("button", { name: "Ask about lessons" })).toBeVisible();
    await page.getByRole("button", { name: "Ask about lessons" }).click();

    await expect(page.getByText(/I've got your email/i)).toBeVisible();

    expect(capturedBody).not.toBeNull();
    expect(capturedBody!.email).toBe("parent@example.com");
    expect(capturedBody!.country_code).toBe("NZ");
    expect(capturedBody!.ui_locale).toBeDefined();
  });
});
