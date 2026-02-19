import { expect, test } from "@playwright/test";

test.describe("Fallback page", () => {
  test("renders simplified fallback UI with one CTA and webp image", async ({ page }) => {
    const response = await page.goto("/fallback");
    expect(response?.status()).toBe(200);

    await expect(page.getByAltText("Kinly themed 404 illustration")).toBeVisible();
    await expect(page.locator('a[href="/kinly/general"]')).toHaveCount(1);
    await expect(page.locator("a")).toHaveCount(1);
    await expect(page.getByText(/kinly safe fallback|link may be missing|you can still continue/i)).toHaveCount(0);
  });
});

test.describe("Fallback localization by system language", () => {
  test.use({ locale: "es-ES" });

  test("uses Spanish copy on /fallback", async ({ page }) => {
    await page.goto("/fallback");
    await expect(page.getByRole("link", { name: "Ir a Kinly" })).toBeVisible();
    await expect(page.locator("main[dir='ltr']")).toBeVisible();
  });
});

test.describe("Not found localization by system language", () => {
  test.use({ locale: "ar-SA" });

  test("uses Arabic copy and rtl direction on unknown route", async ({ page }) => {
    const response = await page.goto("/route-that-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(page.getByRole("link", { name: "اذهب إلى Kinly" })).toBeVisible();
    await expect(page.locator("main[dir='rtl']")).toBeVisible();
    await expect(page.locator('a[href="/kinly/general"]')).toHaveCount(1);
  });
});
