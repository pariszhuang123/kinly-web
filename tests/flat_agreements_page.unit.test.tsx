import type { ReactElement } from "react";
import { expect, test, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("../lib/geo", () => ({
  getDetectedCountryCode: vi.fn(async () => "NZ"),
}));

vi.mock("../lib/platform", () => ({
  getDetectedPlatform: vi.fn(async () => "web"),
}));

vi.mock("../app/kinly/market/ScenarioLandingClient", () => ({
  default: () => null,
}));

import FlatAgreementsPage from "../app/kinly/market/flat-agreements/page";

test("renders flat agreements copy in server HTML without client hydration", async () => {
  const element = await FlatAgreementsPage();
  const html = renderToStaticMarkup(element as ReactElement);

  expect(html).toContain("The flat agreed on things once. But the agreements were never visible.");
  expect(html).toContain("Stop carrying the flat in your head.");
  expect(html).toContain("We agreed on the rules once. But nobody wrote them down.");
  expect(html).toContain("What Kinly is");
  expect(html).toContain("How Kinly helps in practice");
});
