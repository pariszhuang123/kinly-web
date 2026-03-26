import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test, vi } from "vitest";

vi.mock("../lib/geo", () => ({
  getDetectedCountryCode: vi.fn().mockResolvedValue("NZ"),
}));

vi.mock("../lib/platform", () => ({
  getDetectedPlatform: vi.fn().mockResolvedValue("web"),
}));

vi.mock("../app/kinly/general/LandingClient", () => ({
  default: () => <div>Landing client</div>,
}));

vi.mock("../app/kinly/market/ScenarioLandingClient", () => ({
  default: () => <div>Scenario client</div>,
}));

import HomePage from "../app/page";
import GeneralPage from "../app/kinly/general/page";
import MarketIndexPage from "../app/kinly/market/page";
import { scenarioConfigs } from "../app/kinly/market/configs";

describe("public discovery surfaces", () => {
  test("emits JSON-LD on the company home page", () => {
    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup).toContain("application/ld+json");
    expect(markup).toContain('"@type":"Organization"');
    expect(markup).toContain('"@type":"WebSite"');
    expect(markup).toContain('"@type":"SoftwareApplication"');
  });

  test("emits software application JSON-LD on the main Kinly landing page", async () => {
    const markup = renderToStaticMarkup(await GeneralPage({ searchParams: Promise.resolve({}) }));

    expect(markup).toContain("application/ld+json");
    expect(markup).toContain('"@type":"SoftwareApplication"');
    expect(markup).toContain('"name":"Kinly"');
  });

  test("renders a crawlable market hub with links to every scenario page", () => {
    const markup = renderToStaticMarkup(<MarketIndexPage />);

    expect(markup).toContain('href="/kinly/general"');
    expect(markup).toContain('href="/kinly/get"');

    for (const slug of Object.keys(scenarioConfigs)) {
      expect(markup).toContain(`href="/kinly/market/${slug}"`);
    }
  });
});
