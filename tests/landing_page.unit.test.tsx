// @vitest-environment jsdom

import { act } from "react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import LandingClient from "../app/kinly/general/LandingClient";

vi.mock("next/navigation", () => {
  const params = new URLSearchParams("");
  return {
    useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
    useSearchParams: () => params,
  };
});

declare global {
  // Provided by React to silence act warnings in tests.
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

test("shows store badges when no suppression marker exists", async () => {
  const { container, unmount } = render(<LandingClient detectedCountryCode={null} />);
  await flushEffects();

  const ios = container.querySelectorAll('a[aria-label="Download on the App Store"]');
  const android = container.querySelectorAll('a[aria-label="Get it on Google Play"]');

  expect(ios.length).toBe(1);
  expect(android.length).toBe(1);
  expect(ios[0].getAttribute("href")).toContain("apps.apple.com");
  expect(android[0].getAttribute("href")).toContain("play.google.com");
  expect(container.textContent || "").not.toMatch(/Ready to start/i);

  unmount();
});

test("shows store badges when detected country is supported", async () => {
  const { container, unmount } = render(<LandingClient detectedCountryCode="NZ" />);
  await flushEffects();

  const ios = container.querySelectorAll('a[aria-label="Download on the App Store"]');
  const android = container.querySelectorAll('a[aria-label="Get it on Google Play"]');
  const availability = container.querySelectorAll("section");

  expect(ios.length).toBe(1);
  expect(android.length).toBe(1);
  expect((availability?.item(0)?.textContent || "")).not.toMatch(/opens in your area/i);
  expect(container.textContent || "").not.toMatch(/Ready to start/i);

  unmount();
});

test("suppresses store badges when interest marker is unsupported", async () => {
  window.localStorage.setItem(
    "kinly_interest_status",
    JSON.stringify({
      country_code: "US", // unsupported region per contract (supported: NZ, SG)
      ui_locale: "en-US",
      captured_at: new Date().toISOString(),
    }),
  );

  const { container, unmount } = render(<LandingClient detectedCountryCode={null} />);
  await flushEffects();

  const ios = container.querySelectorAll('a[aria-label="Download on the App Store"]');
  const android = container.querySelectorAll('a[aria-label="Get it on Google Play"]');

  expect(ios.length).toBe(0);
  expect(android.length).toBe(0);
  expect(container.textContent || "").toMatch(/opens in your area/i);

  unmount();
});

test("suppresses store badges when detected country is unsupported", async () => {
  const { container, unmount } = render(<LandingClient detectedCountryCode="US" />);
  await flushEffects();

  const ios = container.querySelectorAll('a[aria-label="Download on the App Store"]');
  const android = container.querySelectorAll('a[aria-label="Get it on Google Play"]');

  expect(ios.length).toBe(0);
  expect(android.length).toBe(0);
  expect(container.textContent || "").toMatch(/opens in your area/i);

  unmount();
});
