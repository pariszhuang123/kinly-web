// @vitest-environment jsdom

import { act } from "react";
import { createRoot } from "react-dom/client";
import { beforeEach, expect, test, vi } from "vitest";
import WithYouLanding from "../app/withyou/WithYouLanding";
import { withYouScenarios } from "../lib/withyou";

let mockSearchParams = new URLSearchParams("");

vi.mock("next/navigation", () => ({
  useSearchParams: () => mockSearchParams,
}));

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

function render(ui: React.ReactElement) {
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
  document.body.innerHTML = "";
  window.localStorage.clear();
  mockSearchParams = new URLSearchParams("");
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
  vi.restoreAllMocks();
});

test("presence routes render a single canonical preview clip", async () => {
  const { container, unmount } = render(
    <WithYouLanding config={withYouScenarios["uber"]} detectedPlatform="web" />,
  );
  await flushEffects();

  const audio = container.querySelector('[data-testid="withyou-audio"]') as HTMLAudioElement;

  expect(audio.getAttribute("src")).toBe("/withyou/assets/audio-preview/en/presence/primary.m4a");
  expect(container.textContent || "").not.toMatch(/A reason to drift away/i);

  unmount();
});

test("timed routes render three stage controls and canonical family paths", async () => {
  const { container, unmount } = render(
    <WithYouLanding config={withYouScenarios["party-exit"]} detectedPlatform="web" />,
  );
  await flushEffects();

  const audio = container.querySelector('[data-testid="withyou-audio"]') as HTMLAudioElement;
  expect(audio.getAttribute("src")).toBe("/withyou/assets/audio-preview/en/social_pull/stage_1.m4a");
  expect(container.textContent || "").toMatch(/A reason to drift away/i);
  expect(container.textContent || "").toMatch(/A stronger social anchor/i);
  expect(container.textContent || "").toMatch(/Time to leave now/i);

  unmount();
});

test("query parameter can switch the public preview language without changing the route slug", async () => {
  mockSearchParams = new URLSearchParams("lang=zh");

  const { container, unmount } = render(
    <WithYouLanding config={withYouScenarios["bad-date-exit"]} detectedPlatform="web" />,
  );
  await flushEffects();

  const audio = container.querySelector('[data-testid="withyou-audio"]') as HTMLAudioElement;
  expect(audio.getAttribute("src")).toBe("/withyou/assets/audio-preview/zh/exit_pressure/stage_1.m4a");
  expect(container.textContent || "").toMatch(/快速脱身/);

  unmount();
});

test("logs page view and CTA click through outreach tracking", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({ ok: true }),
  } as unknown as Response);

  mockSearchParams = new URLSearchParams("utm_campaign=withyou-launch&utm_source=instagram&utm_medium=social");

  const { container, unmount } = render(
    <WithYouLanding config={withYouScenarios["party-exit"]} detectedPlatform="web" detectedCountryCode="NZ" />,
  );
  await flushEffects();

  expect(fetchSpy).toHaveBeenCalledWith(
    expect.stringContaining("/rest/v1/rpc/outreach_log_event"),
    expect.objectContaining({
      body: expect.stringContaining('"p_event":"page_view"'),
    }),
  );
  expect(fetchSpy).toHaveBeenCalledWith(
    expect.any(String),
    expect.objectContaining({
      body: expect.stringContaining('"p_page_key":"withyou_party_exit"'),
    }),
  );
  expect(fetchSpy).toHaveBeenCalledWith(
    expect.any(String),
    expect.objectContaining({
      body: expect.stringContaining('"p_utm_campaign":"withyou-launch"'),
    }),
  );

  const leadButton = Array.from(container.querySelectorAll("a")).find((node) =>
    (node.textContent || "").match(/Join for updates/i),
  ) as HTMLAnchorElement | undefined;
  expect(leadButton).toBeTruthy();

  act(() => {
    leadButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  await flushEffects();

  expect(fetchSpy).toHaveBeenCalledWith(
    expect.any(String),
    expect.objectContaining({
      body: expect.stringContaining('"p_event":"cta_click"'),
    }),
  );
  expect(fetchSpy).toHaveBeenCalledWith(
    expect.any(String),
    expect.objectContaining({
      body: expect.stringContaining('"p_store":"web"'),
    }),
  );

  unmount();
});
