// @vitest-environment jsdom

import type { ChangeEvent } from "react";
import { act } from "react";
import { beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import CandidateJoinClient from "../app/kinly/fit-check/join/[shareToken]/CandidateJoinClient";

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let mockSearchParams = new URLSearchParams("");
const pushSpy = vi.fn();

vi.mock("next/navigation", () => ({
  useSearchParams: () => mockSearchParams,
  useRouter: () => ({
    push: pushSpy,
  }),
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
  pushSpy.mockReset();
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
});

test("candidate flow submits and redirects to personalized result page", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
    const url = String(input);

    if (url.includes("outreach_log_event")) {
      return {
        ok: true,
        json: async () => ({ ok: true }),
      } as unknown as Response;
    }

    if (url.includes("fit_check_get_public_by_token")) {
      return {
        ok: true,
        json: async () => ({
          ok: true,
          available: true,
          fit_check_public: {
            entry_prompt_key: "fit_check.candidate.entry_prompt",
            location: {
              required: true,
              suggested_country_code: "NZ",
            },
            scenarios: [],
          },
        }),
      } as unknown as Response;
    }

    if (url.includes("fit_check_submit_candidate_by_token")) {
      return {
        ok: true,
        json: async () => ({
          ok: true,
          submission_id: "submission-1",
          candidate: {
            display_name: "Alex",
            country_code: "NZ",
            city_name: "Auckland",
          },
          confirmation: {
            message_key: "fit_check.candidate.submitted",
            result_page: {
              submission_id: "submission-1",
              page_type: "personalized_non_comparative",
              reflection: {
                show: true,
                text_key: "fit_check.candidate.reflection.flexible",
              },
            },
            cta: {
              text_key: "fit_check.candidate.create_own_cta",
              target_url: "/kinly/general",
            },
          },
        }),
      } as unknown as Response;
    }

    throw new Error(`Unexpected fetch call: ${url}`);
  });

  const { container, unmount } = render(<CandidateJoinClient shareToken="token123" detectedCountryCode="NZ" />);
  await flushEffects();
  await flushEffects();

  const displayNameInput = container.querySelector('input[placeholder="e.g. Alex"]');
  expect(displayNameInput).not.toBeNull();
  act(() => {
    getReactProps(displayNameInput as Element).onChange?.({
      target: { value: "Alex" },
    } as unknown as ChangeEvent<HTMLInputElement>);
  });
  await flushEffects();

  await clickByText(container, "Clean it straight away");
  await clickByText(container, "Quiet, early night");
  await clickByText(container, "Roster or system");
  await clickByText(container, "Bring it up early");
  await clickByText(container, "Continue to location");
  await clickByText(container, "Auckland");

  const form = container.querySelector("form");
  expect(form).not.toBeNull();
  act(() => {
    getReactProps(form as Element).onSubmit?.({ preventDefault: () => {} });
  });
  await flushEffects();

  const submitCall = fetchSpy.mock.calls.find(([input]) => String(input).includes("fit_check_submit_candidate_by_token"));
  expect(submitCall).toBeTruthy();
  const submitBody = JSON.parse(String((submitCall?.[1] as RequestInit | undefined)?.body ?? "{}"));
  expect(submitBody.p_country_code).toBe("NZ");
  expect(submitBody.p_city_name).toBe("Auckland");

  expect(pushSpy).toHaveBeenCalledWith("/kinly/fit-check/result/submission-1");
  const stored = window.localStorage.getItem("kinly.fit_check.candidate_results") || "";
  expect(stored).toContain("submission-1");
  expect(stored).toContain("Auckland");

  unmount();
});

test("candidate flow shows unavailable state when the token is inactive", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      ok: true,
      available: false,
      fit_check_public: null,
      error: {
        code: "FIT_CHECK_TOKEN_EXPIRED",
        message: "Link expired",
      },
    }),
  } as unknown as Response);

  const { container, unmount } = render(<CandidateJoinClient shareToken="expired" detectedCountryCode="NZ" />);
  await flushEffects();
  await flushEffects();

  expect(container.textContent || "").toContain("This fit check link is unavailable");
  expect(container.textContent || "").toContain("expired");

  unmount();
});
