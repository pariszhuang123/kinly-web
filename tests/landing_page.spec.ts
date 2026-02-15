import { test, expect, type Locator } from "@playwright/test";

async function getFontSizePx(locator: Locator) {
  return locator.first().evaluate((element) => Number.parseFloat(window.getComputedStyle(element).fontSize));
}

test.describe("Marketing landing page", () => {
  test.beforeEach(async ({ page }) => {
    // Ensure no prior interest state unless a test sets it.
    await page.addInitScript(() => window.localStorage.clear());
  });

  test("renders recognition-first hero and three app screenshots", async ({ page }) => {
    await page.goto("/kinly/general");

    await expect(page.getByRole("heading", { name: "Shared living gets heavy." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "A calmer way to live together." })).toBeVisible();
    await expect(page.locator('img[alt$=" screen"]')).toHaveCount(3);
    await expect(page.getByRole("heading", { name: "How Kinly helps in practice" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Supported by practical tools" })).toHaveCount(0);
    await expect(page.getByTestId("feature-card")).toHaveCount(4);
    await expect(page.getByTestId("feature-rail").getByText("Shared tasks")).toBeVisible();
    await expect(page.getByText(/Ready to start/i)).toHaveCount(0);
  });

  test("shows store badges with hrefs when no suppressed marker exists", async ({ page }) => {
    await page.goto("/kinly/general");

    const ios = page.getByRole("link", { name: "Download on the App Store" });
    const android = page.getByRole("link", { name: "Get it on Google Play" });

    await expect(ios).toHaveCount(1);
    await expect(android).toHaveCount(1);
    await expect(ios.first()).toHaveAttribute("href", /https?:\/\//);
    await expect(android.first()).toHaveAttribute("href", /https?:\/\//);
    await expect(page.getByText(/Ready to start/i)).toHaveCount(0);
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

  test("scenario entry keeps CTA below fold with one store badge set", async ({ page }) => {
    await page.goto("/kinly/general?entry=homestay-owner");

    await expect(page.getByRole("heading", { name: /A welcoming home with clear norms/i })).toBeVisible();
    await expect(page.getByText(/Host with clarity/i)).toHaveCount(0);

    const ios = page.getByRole("link", { name: "Download on the App Store" });
    const android = page.getByRole("link", { name: "Get it on Google Play" });

    await expect(ios).toHaveCount(1);
    await expect(android).toHaveCount(1);
  });

  test("mobile feature rail is horizontally scrollable with snap behavior", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/kinly/general");

    const rail = page.getByTestId("feature-rail");
    await expect(rail).toBeVisible();
    await expect(page.getByTestId("feature-card")).toHaveCount(4);

    const metrics = await rail.evaluate((element) => {
      const style = window.getComputedStyle(element);
      const firstCard = element.firstElementChild as HTMLElement | null;
      const firstCardStyle = firstCard ? window.getComputedStyle(firstCard) : null;
      return {
        scrollWidth: element.scrollWidth,
        clientWidth: element.clientWidth,
        overflowX: style.overflowX,
        snap: style.scrollSnapType,
        firstCardWidth: firstCard ? firstCard.getBoundingClientRect().width : 0,
        firstCardSnapAlign: firstCardStyle?.scrollSnapAlign ?? "",
      };
    });

    expect(metrics.scrollWidth).toBeGreaterThan(metrics.clientWidth);
    expect(metrics.overflowX).toBe("auto");
    expect(metrics.snap).toContain("x");
    expect(metrics.firstCardSnapAlign).toBe("start");
    expect(metrics.firstCardWidth).toBeGreaterThanOrEqual(metrics.clientWidth - 2);

    const secondDot = page.locator("[aria-label='Feature navigation'] [role='button']").nth(1);
    await secondDot.click();

    await expect
      .poll(async () => rail.evaluate((element) => Math.abs(element.scrollLeft - element.clientWidth)))
      .toBeLessThanOrEqual(2);
  });

  test("general landing key copy uses minimum readable 14px text", async ({ page }) => {
    await page.goto("/kinly/general");

    const recognitionSubheadSize = await getFontSizePx(page.locator("main section").first().locator("p").first());
    const heroSubheadSize = await getFontSizePx(page.locator("main section").nth(1).locator("p").first());
    const featureBenefitSize = await getFontSizePx(
      page.getByText("Add context, guide links, and photos so repeat tasks are clear without reminders."),
    );
    const privacyNoteSize = await getFontSizePx(page.getByText("Private by default. No ads. No surveillance."));
    const storeSubtitleSize = await getFontSizePx(page.getByText(/Kinly lives in the app/i));

    expect(recognitionSubheadSize).toBeGreaterThanOrEqual(14);
    expect(recognitionSubheadSize).toBeLessThan(15);
    expect(heroSubheadSize).toBeGreaterThanOrEqual(14);
    expect(heroSubheadSize).toBeLessThan(15);
    expect(featureBenefitSize).toBeGreaterThanOrEqual(14);
    expect(privacyNoteSize).toBeGreaterThanOrEqual(14);
    expect(storeSubtitleSize).toBeGreaterThanOrEqual(14);
  });

  test("scenario landing key copy uses minimum readable 14px text", async ({ page }) => {
    await page.goto("/kinly/general?entry=homestay-owner");

    const recognitionSubheadSize = await getFontSizePx(page.locator("main section").first().locator("p").first());
    const heroSubheadSize = await getFontSizePx(page.locator("main section").nth(1).locator("p").first());
    const featureBenefitSize = await getFontSizePx(
      page.getByText("Add context, guide links, and photos so repeat tasks are clear without reminders."),
    );
    const privacyNoteSize = await getFontSizePx(page.getByText("Private by default. No ads. No surveillance."));
    const storeSubtitleSize = await getFontSizePx(page.getByText(/Kinly lives in the app/i));

    expect(recognitionSubheadSize).toBeGreaterThanOrEqual(14);
    expect(recognitionSubheadSize).toBeLessThan(15);
    expect(heroSubheadSize).toBeGreaterThanOrEqual(14);
    expect(heroSubheadSize).toBeLessThan(15);
    expect(featureBenefitSize).toBeGreaterThanOrEqual(14);
    expect(privacyNoteSize).toBeGreaterThanOrEqual(14);
    expect(storeSubtitleSize).toBeGreaterThanOrEqual(14);
  });
});
