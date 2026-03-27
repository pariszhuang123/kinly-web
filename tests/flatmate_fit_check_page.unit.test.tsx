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

import FlatmateFitCheckPage from "../app/kinly/market/flatmate-fit-check/page";

test("renders flatmate fit check copy in server HTML without client hydration", async () => {
  const element = await FlatmateFitCheckPage();
  const html = renderToStaticMarkup(element as ReactElement);

  expect(html).toContain("You are about to invite someone into your home. The interview will not show you where the friction will be.");
  expect(html).toContain("Start the fit check");
  expect(html).toContain("I need more than gut feel before I commit to sharing my home.");
  expect(html).toContain("What Kinly is");
  expect(html).toContain("How Kinly helps in practice");
});
