import { expect, test } from "@playwright/test";

test.describe("Public norms route", () => {
  test("invalid homePublicId returns not found", async ({ page }) => {
    const response = await page.goto("/kinly/norms/INVALID");
    expect(response?.status()).toBe(404);
    await expect(page.locator('a[href="/kinly/general"]').first()).toBeVisible();
  });

  test("unknown but valid homePublicId returns not found", async ({ page }) => {
    const response = await page.goto("/kinly/norms/abc12345");
    expect(response?.status()).toBe(404);
    await expect(page.locator('a[href="/kinly/general"]').first()).toBeVisible();
  });
});
