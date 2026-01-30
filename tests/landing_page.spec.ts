import { test, expect } from "@playwright/test";

test.describe("Marketing landing page", () => {
  test.beforeEach(async ({ page }) => {
    // Ensure no prior interest state unless a test sets it.
    await page.addInitScript(() => window.localStorage.clear());
  });

  test("renders recognition-first hero and three app screenshots", async ({ page }) => {
    await page.goto("/kinly/general");

    await expect(page.getByRole("heading", { name: "Shared living gets heavy." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "A calmer way to live together." })).toBeVisible();

    const screenshots = [
      page.getByRole("img", { name: "Today screen" }),
      page.getByRole("img", { name: "Manage screen" }),
      page.getByRole("img", { name: "Hub screen" }),
    ];

    for (const shot of screenshots) {
      await expect(shot).toBeVisible();
    }
  });

  test("shows store badges with hrefs when no suppressed marker exists", async ({ page }) => {
    await page.goto("/kinly/general");

    const ios = page.getByRole("link", { name: "Download on the App Store" });
    const android = page.getByRole("link", { name: "Get it on Google Play" });

    await expect(ios).toHaveCount(2);
    await expect(android).toHaveCount(2);
    await expect(ios.first()).toHaveAttribute("href", /https?:\/\//);
    await expect(android.first()).toHaveAttribute("href", /https?:\/\//);
  });

  test("suppresses store badges when unsupported region marker is present", async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem(
        "kinly_interest_status",
        JSON.stringify({
          country_code: "US", // unsupported per contract (NZ, SG supported)
          ui_locale: "en-US",
          captured_at: new Date().toISOString(),
        }),
      );
    });

    await page.goto("/kinly/general");

    await expect(page.getByText(/We(’|')ll email you when Kinly opens in your area/i)).toBeVisible();
    await expect(page.getByRole("link", { name: "Download on the App Store" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Get it on Google Play" })).toHaveCount(0);
  });

  test("weekly reflection section displays heading and copy", async ({ page }) => {
    await page.goto("/kinly/general");

    await expect(page.getByRole("heading", { name: "Weekly reflection, human-paced" })).toBeVisible();
    await expect(page.getByText(/You can check in weekly/i)).toBeVisible();
  });
});
