// @vitest-environment jsdom

import type { ChangeEvent } from "react";
import { act } from "react";
import { beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import OwnerFitCheckClient from "../app/kinly/fit-check/OwnerFitCheckClient";

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let mockSearchParams = new URLSearchParams("");

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

type ReactProps = {
  onClick?: () => void;
  onSubmit?: (event: { preventDefault: () => void }) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

function getReactProps(node: Element): ReactProps {
  const key = Object.keys(node).find((prop) => prop.startsWith("__reactProps$"));
  if (!key) return {};
  return ((node as unknown as Record<string, unknown>)[key] as ReactProps) ?? {};
}

async function flushEffects() {
  await act(async () => {
    await Promise.resolve();
  });
}

async function clickByText(container: HTMLElement, text: string) {
  const node = Array.from(container.querySelectorAll("button")).find((button) => button.textContent?.trim() === text);
  if (!node) throw new Error(`Button not found: ${text}`);
  act(() => {
    getReactProps(node).onClick?.();
  });
  await flushEffects();
}

beforeEach(() => {
  window.localStorage.clear();
  window.sessionStorage.clear();
  mockSearchParams = new URLSearchParams("");
  vi.restoreAllMocks();
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
});

test("owner flow creates a share link and shows app-gated review CTA", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({
      ok: true,
      draft_id: "draft-1",
      owner_answers: {
        fit_cleanliness: 0,
        fit_rhythm: 1,
        fit_chores: 0,
        fit_conflict: 1,
      },
      summary: {
        labels: ["Clean it straight away", "Chill - TV or music", "Roster or system", "Wait a bit, then raise it"],
      },
      share: {
        share_url: "https://go.makinglifeeasie.com/kinly/fit-check/join/token123",
        share_token: "token123",
        expires_at: "2026-04-27T00:00:00Z",
      },
      draft_session: {
        resume_available: true,
        draft_session_token: "draft-session-1",
      },
      claim: {
        claim_required: true,
        continue_in_app_url: "kinly://fit-check/claim?draft=draft-1",
      },
    }),
  } as unknown as Response);

  const { container, unmount } = render(
    <OwnerFitCheckClient detectedCountryCode="NZ" detectedPlatform="ios" />,
  );
  await flushEffects();

  await clickByText(container, "Clean it straight away");
  await clickByText(container, "Next");
  await clickByText(container, "Chill - TV or music");
  await clickByText(container, "Next");
  await clickByText(container, "Roster or system");
  await clickByText(container, "Next");
  await clickByText(container, "Wait a bit, then raise it");

  const form = container.querySelector("form");
  expect(form).not.toBeNull();
  act(() => {
    getReactProps(form as Element).onSubmit?.({ preventDefault: () => {} });
  });
  await flushEffects();

  expect(container.textContent || "").toContain("Share this applicant link");
  expect(container.textContent || "").toContain("See applicant briefings in the app");

  const storedDraft = window.localStorage.getItem("kinly.fit_check.owner_draft") || "";
  expect(storedDraft).toContain("token123");
  expect(storedDraft).toContain("draft-session-1");

  unmount();
});
