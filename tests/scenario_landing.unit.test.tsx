// @vitest-environment jsdom

import { act } from "react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import ScenarioLandingClient from "../app/kinly/market/ScenarioLandingClient";
import { liveInLandlordConfig } from "../app/kinly/market/configs/liveInLandlord";

vi.mock("next/navigation", () => {
  const params = new URLSearchParams("");
  return {
    useSearchParams: () => params,
  };
});

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

type RenderResult = {
  container: HTMLElement;
  unmount: () => void;
};

function render(ui: React.ReactElement): RenderResult {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(ui);
  });

  return {
    container,
    unmount: () => {
      act(() => root.unmount());
      container.remove();
    },
  };
}

async function flushEffects() {
  await act(async () => {
    await Promise.resolve();
  });
}

beforeEach(() => {
  window.localStorage.clear();
  process.env.NEXT_PUBLIC_IOS_STORE_URL = "https://apps.apple.com/app/kinly/id6756508378";
  process.env.NEXT_PUBLIC_ANDROID_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly";
});

afterEach(() => {
  document.body.innerHTML = "";
});

test("shows platform-aware store badges in supported regions", async () => {
  const { container, unmount } = render(
    <ScenarioLandingClient
      config={liveInLandlordConfig}
      detectedCountryCode="NZ"
      detectedPlatform="ios"
    />,
  );
  await flushEffects();

  expect(container.textContent || "").toMatch(/When you are ready/i);
  expect(container.textContent || "").not.toMatch(/opens in your area/i);
  expect(container.querySelectorAll('a[aria-label="Download on the App Store"]').length).toBe(1);
  expect(container.querySelectorAll('a[aria-label="Get it on Google Play"]').length).toBe(0);

  unmount();
});

test("shows availability fallback in unsupported regions", async () => {
  const { container, unmount } = render(
    <ScenarioLandingClient
      config={liveInLandlordConfig}
      detectedCountryCode="US"
      detectedPlatform="web"
    />,
  );
  await flushEffects();

  expect(container.textContent || "").toMatch(/Availability/i);
  expect(container.textContent || "").toMatch(/opens in your area/i);
  expect(container.querySelectorAll('a[aria-label="Download on the App Store"]').length).toBe(0);
  expect(container.querySelectorAll('a[aria-label="Get it on Google Play"]').length).toBe(0);

  unmount();
});
