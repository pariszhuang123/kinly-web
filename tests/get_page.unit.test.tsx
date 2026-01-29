// @vitest-environment jsdom

import type { ChangeEvent } from "react";
import { act } from "react";
import { beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import GetClient from "../app/kinly/get/GetClient";

declare global {
  // Provided by React to silence act warnings in tests.
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let mockSearchParams: URLSearchParams = new URLSearchParams("");

vi.mock("next/navigation", () => ({
  useSearchParams: () => mockSearchParams,
}));

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

type ReactInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: { preventDefault: () => void }) => void;
};

function getReactProps(node: Element): ReactInputProps {
  const key = Object.keys(node).find((prop) => prop.startsWith("__reactProps$"));
  if (!key) return {};
  const value = (node as unknown as Record<string, unknown>)[key];
  if (value && typeof value === "object") {
    return value as ReactInputProps;
  }
  return {};
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
  window.localStorage.clear();
  mockSearchParams = new URLSearchParams("");
  vi.restoreAllMocks();
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
});

test("prefills country from detected country", async () => {
  const { container, unmount } = render(<GetClient detectedCountryCode="SG" sourcePath={null} />);
  await flushEffects();

  const countryInput = container.querySelector('input[placeholder="Country code (e.g., US)"]') as HTMLInputElement;
  expect(countryInput.value).toBe("SG");

  unmount();
});

test("query param country wins over detected country", async () => {
  mockSearchParams = new URLSearchParams("country=NZ");
  const { container, unmount } = render(<GetClient detectedCountryCode="SG" sourcePath={null} />);
  await flushEffects();

  const countryInput = container.querySelector('input[placeholder="Country code (e.g., US)"]') as HTMLInputElement;
  expect(countryInput.value).toBe("NZ");

  unmount();
});

test("stores detected country and source path in interest marker on submit", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({ lead_id: "123", deduped: false }),
  } as unknown as Response);

  const { container, unmount } = render(<GetClient detectedCountryCode="SG" sourcePath="/join/abc123" />);
  await flushEffects();

  const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
  const countryInput = container.querySelector('input[placeholder="Country code (e.g., US)"]') as HTMLInputElement;
  const form = container.querySelector("form") as HTMLFormElement;

  act(() => {
    const emailProps = getReactProps(emailInput);
    const countryProps = getReactProps(countryInput);
    if (emailProps.onChange) {
      const evt = { target: { value: "user@example.com" } } as unknown as ChangeEvent<HTMLInputElement>;
      emailProps.onChange(evt);
    }
    if (countryProps.onChange) {
      const evt = { target: { value: "SG" } } as unknown as ChangeEvent<HTMLInputElement>;
      countryProps.onChange(evt);
    }
  });

  await flushUntil(() => {
    const button = container.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    return Boolean(button && !button.disabled);
  });

  act(() => {
    const formProps = getReactProps(form);
    if (formProps.onSubmit) {
      formProps.onSubmit({ preventDefault: () => {} });
    }
  });

  await flushEffects();

  expect(fetchSpy).toHaveBeenCalled();
  const stored = JSON.parse(window.localStorage.getItem("kinly_interest_status") || "{}");
  expect(stored.detected_country_code).toBe("SG");
  expect(stored.source_path).toBe("/join/abc123");

  unmount();
});
