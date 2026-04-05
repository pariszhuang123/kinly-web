// @vitest-environment jsdom

import type { ChangeEvent } from "react";
import { act } from "react";
import { beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import WithYouGetClient from "../app/withyou/get/WithYouGetClient";

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let mockSearchParams = new URLSearchParams("");

vi.mock("next/navigation", () => ({
  useSearchParams: () => mockSearchParams,
}));

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

type ReactNodeProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: { preventDefault: () => void }) => void;
};

function getReactProps(node: Element): ReactNodeProps {
  const key = Object.keys(node).find((prop) => prop.startsWith("__reactProps$"));
  if (!key) return {};
  return ((node as unknown as Record<string, unknown>)[key] as ReactNodeProps) ?? {};
}

async function flushEffects() {
  await act(async () => {
    await Promise.resolve();
  });
}

async function flushUntil(condition: () => boolean, maxTries = 8) {
  for (let i = 0; i < maxTries; i += 1) {
    await flushEffects();
    if (condition()) return;
  }
}

beforeEach(() => {
  document.body.innerHTML = "";
  window.localStorage.clear();
  mockSearchParams = new URLSearchParams("");
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
  vi.restoreAllMocks();
});

test("prefills country from detected country", async () => {
  const { container, unmount } = render(<WithYouGetClient detectedCountryCode="NZ" sourcePath={null} />);
  await flushEffects();

  const countryInput = container.querySelector('input[placeholder="Country code (e.g., US)"]') as HTMLInputElement;
  expect(countryInput.value).toBe("NZ");

  unmount();
});

test("submits with the withYou lead source", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({ lead_id: "123", deduped: false }),
  } as Response);

  const { container, unmount } = render(
    <WithYouGetClient detectedCountryCode="SG" sourcePath="/withyou/party-exit" />,
  );
  await flushEffects();

  const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
  const countryInput = container.querySelector('input[placeholder="Country code (e.g., US)"]') as HTMLInputElement;
  const form = container.querySelector("form") as HTMLFormElement;

  act(() => {
    getReactProps(emailInput).onChange?.({ target: { value: "user@example.com" } } as ChangeEvent<HTMLInputElement>);
    getReactProps(countryInput).onChange?.({ target: { value: "SG" } } as ChangeEvent<HTMLInputElement>);
  });

  await flushUntil(() => {
    const button = container.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    return Boolean(button && !button.disabled);
  });

  act(() => {
    getReactProps(form).onSubmit?.({ preventDefault: () => {} });
  });
  await flushEffects();

  expect(fetchSpy).toHaveBeenCalledWith(
    expect.stringContaining("/rest/v1/rpc/leads_upsert_v1"),
    expect.objectContaining({
      body: expect.stringContaining('"p_source":"withyou_web_get"'),
    }),
  );

  const stored = JSON.parse(window.localStorage.getItem("withyou_interest_status") || "{}");
  expect(stored.source_path).toBe("/withyou/party-exit");

  unmount();
});
