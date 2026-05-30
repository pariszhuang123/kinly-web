// @vitest-environment jsdom

import type { ChangeEvent } from "react";
import { act } from "react";
import { beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import PianoLandingClient from "../app/piano/PianoLandingClient";
import { getPianoLandingVideos } from "../lib/pianoLanding";

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

type RenderResult = {
  container: HTMLElement;
  unmount: () => void;
};

type ReactNodeProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: { preventDefault: () => void }) => void;
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
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
  vi.restoreAllMocks();

  class FakeIntersectionObserver {
    callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }

    observe(target: Element) {
      this.callback(
        [{ isIntersecting: true, target } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
    }

    disconnect() {}

    unobserve() {}

    takeRecords() {
      return [];
    }
  }

  vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver);
});

const defaultVideos = getPianoLandingVideos();

test("renders the three showcase videos", async () => {
  const { container, unmount } = render(<PianoLandingClient videos={defaultVideos} />);
  await flushEffects();

  const frames = container.querySelectorAll("iframe");
  const dotButtons = container.querySelectorAll('button[aria-pressed]');
  const labelledControls = Array.from(container.querySelectorAll("button[aria-label]")).map((node) =>
    node.getAttribute("aria-label"),
  );
  const youtubeLink = container.querySelector('a[href*="youtube.com/watch"]') as HTMLAnchorElement | null;
  expect(frames.length).toBe(3);
  expect(dotButtons.length).toBe(6);
  expect(container.textContent || "").toMatch(/Classical to pop/i);
  expect(labelledControls).toContain("Show video 2: Children's song to pop");
  expect(labelledControls).toContain("Show video 3: Wedding song to pop");
  expect(container.textContent || "").toMatch(/Three simple ideas sit underneath the teaching style/i);
  expect(youtubeLink?.textContent || "").toMatch(/Open on YouTube/i);

  unmount();
});

test("submit stays hidden until email is valid", async () => {
  const { container, unmount } = render(<PianoLandingClient videos={defaultVideos} />);
  await flushEffects();

  const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
  const initialSubmitButton = container.querySelector('button[type="submit"]') as HTMLButtonElement | null;

  expect(initialSubmitButton).toBeNull();
  expect(container.querySelector('input[placeholder="Country code (e.g., US)"]')).toBeNull();

  act(() => {
    getReactProps(emailInput).onChange?.({ target: { value: "parent@example.com" } } as ChangeEvent<HTMLInputElement>);
  });
  await flushUntil(() => Boolean(container.querySelector('button[type="submit"]')));

  const submitButton = container.querySelector('button[type="submit"]') as HTMLButtonElement | null;

  expect(submitButton).not.toBeNull();
  expect(submitButton?.disabled).toBe(false);

  unmount();
});

test("submits with the piano lead source and shows success state", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({ lead_id: "lead-123", deduped: false, notification_sent: true, notification_status: "sent" }),
  } as Response);

  const { container, unmount } = render(<PianoLandingClient videos={defaultVideos} />);
  await flushEffects();

  const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
  const form = container.querySelector("form") as HTMLFormElement;

  act(() => {
    getReactProps(emailInput).onChange?.({ target: { value: "parent@example.com" } } as ChangeEvent<HTMLInputElement>);
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
    "/api/piano/lead",
    expect.objectContaining({
      body: expect.stringContaining('"email":"parent@example.com"'),
    }),
  );
  expect(fetchSpy).toHaveBeenCalledWith(
    "/api/piano/lead",
    expect.objectContaining({
      body: expect.stringContaining('"country_code":"NZ"'),
    }),
  );
  expect(container.textContent || "").toMatch(/I've got your email/i);
  expect(container.textContent || "").toMatch(/I can see your enquiry has gone through/i);

  unmount();
});

test("shows a saved enquiry message when notification is not sent immediately", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({
      lead_id: "lead-123",
      deduped: false,
      notification_sent: false,
      notification_status: "notification_config_missing",
    }),
  } as Response);

  const { container, unmount } = render(<PianoLandingClient videos={defaultVideos} />);
  await flushEffects();

  const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
  const form = container.querySelector("form") as HTMLFormElement;

  act(() => {
    getReactProps(emailInput).onChange?.({ target: { value: "parent@example.com" } } as ChangeEvent<HTMLInputElement>);
  });

  await flushUntil(() => Boolean(container.querySelector('button[type="submit"]')));

  act(() => {
    getReactProps(form).onSubmit?.({ preventDefault: () => {} });
  });
  await flushEffects();

  expect(container.textContent || "").toMatch(/Your enquiry has been saved/i);

  unmount();
});

test("editing the email after success clears the old enquiry state", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({ lead_id: "lead-123", deduped: false, notification_sent: true, notification_status: "sent" }),
  } as Response);

  const { container, unmount } = render(<PianoLandingClient videos={defaultVideos} />);
  await flushEffects();

  const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
  const form = container.querySelector("form") as HTMLFormElement;

  act(() => {
    getReactProps(emailInput).onChange?.({ target: { value: "parent@example.com" } } as ChangeEvent<HTMLInputElement>);
  });

  await flushUntil(() => Boolean(container.querySelector('button[type="submit"]')));

  act(() => {
    getReactProps(form).onSubmit?.({ preventDefault: () => {} });
  });
  await flushEffects();

  expect(container.textContent || "").toMatch(/I've got your email/i);

  act(() => {
    getReactProps(emailInput).onChange?.({ target: { value: "parent2@example.com" } } as ChangeEvent<HTMLInputElement>);
  });
  await flushEffects();

  expect(container.textContent || "").not.toMatch(/I've got your email/i);

  unmount();
});

test("maps rate-limit errors to the contact form message", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: false,
    json: async () => ({ code: "LEADS_RATE_LIMIT_EMAIL" }),
  } as Response);

  const { container, unmount } = render(<PianoLandingClient videos={defaultVideos} />);
  await flushEffects();

  const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
  const form = container.querySelector("form") as HTMLFormElement;

  act(() => {
    getReactProps(emailInput).onChange?.({ target: { value: "parent@example.com" } } as ChangeEvent<HTMLInputElement>);
  });

  await flushUntil(() => {
    const button = container.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    return Boolean(button && !button.disabled);
  });

  act(() => {
    getReactProps(form).onSubmit?.({ preventDefault: () => {} });
  });
  await flushEffects();

  expect(container.textContent || "").toMatch(/Too many tries right now/i);

  unmount();
});
