// @vitest-environment jsdom

import { act } from "react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import PollClient from "../app/kinly/polls/[slug]/PollClient";
import * as outreachPoll from "../lib/outreachPoll";

declare global {
  // Provided by React to silence act warnings in tests.
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let mockSearchParams = new URLSearchParams("");

vi.mock("next/navigation", () => ({
  useSearchParams: () => mockSearchParams,
}));

vi.mock("../lib/outreachPoll", async () => {
  const actual = await vi.importActual<typeof import("../lib/outreachPoll")>("../lib/outreachPoll");
  return {
    ...actual,
    fetchOutreachPoll: vi.fn(),
    fetchOutreachPollResults: vi.fn(),
    submitOutreachPollVote: vi.fn(),
  };
});

vi.mock("../lib/outreachTracking", () => ({
  buildClientEventId: vi.fn(() => "evt_1"),
  detectUiLocale: vi.fn(() => "en-US"),
  ensureSessionId: vi.fn(() => "session_1"),
  hasEventBeenSent: vi.fn(() => false),
  logOutreachEvent: vi.fn(async () => {}),
  markEventSent: vi.fn(() => {}),
  normalizeCountryCode: vi.fn(() => "NZ"),
  readUtmParams: vi.fn(() => ({
    utm_campaign: "uc_tp_feb2026_a",
    utm_medium: "qr",
    utm_source: "uc",
  })),
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

async function flushEffects() {
  await act(async () => {
    await Promise.resolve();
  });
}

async function flushUntil(condition: () => boolean, maxTries = 10) {
  for (let i = 0; i < maxTries; i += 1) {
    await flushEffects();
    if (condition()) return;
  }
}

type ReactButtonProps = {
  onClick?: () => void | Promise<void>;
};

function getReactProps(node: Element): ReactButtonProps {
  const key = Object.keys(node).find((prop) => prop.startsWith("__reactProps$"));
  if (!key) return {};
  const value = (node as unknown as Record<string, unknown>)[key];
  if (value && typeof value === "object") return value as ReactButtonProps;
  return {};
}

const basePoll = {
  page_key: "poll_toilet_paper_v1",
  title: "UC Poll",
  question: "What kind of toilet paper do you use in your flat?",
  description: null,
};

const baseOptions = [
  { option_key: "2_ply", label: "2 ply", position: 1 },
  { option_key: "3_ply_luxury", label: "3 ply (luxury)", position: 2 },
  { option_key: "dont_care", label: "Don't care", position: 3 },
];

beforeEach(() => {
  vi.clearAllMocks();
  mockSearchParams = new URLSearchParams("");

  vi.mocked(outreachPoll.fetchOutreachPoll).mockResolvedValue({
    ok: true,
    poll: basePoll,
    options: baseOptions,
  });
  vi.mocked(outreachPoll.fetchOutreachPollResults).mockResolvedValue({
    total_votes: 12,
    option_votes: {
      "2_ply": 4,
      "3_ply_luxury": 5,
      dont_care: 3,
    },
  });
  vi.mocked(outreachPoll.submitOutreachPollVote).mockResolvedValue({
    ok: true,
    total_votes: 13,
    option_votes: {
      "2_ply": 5,
      "3_ply_luxury": 5,
      dont_care: 3,
    },
  });
});

afterEach(() => {
  document.body.innerHTML = "";
});

test("selecting option with k_sc auto-submits and shows pie chart results", async () => {
  mockSearchParams = new URLSearchParams("k_sc=k8m4qz");
  const { container, unmount } = render(<PollClient slug="toilet-paper-v1" detectedCountryCode="NZ" />);

  await flushUntil(() => (container.textContent || "").includes("What kind of toilet paper"));

  const twoPlyButton = Array.from(container.querySelectorAll("button")).find((button) =>
    (button.textContent || "").includes("2 ply"),
  );
  expect(twoPlyButton).toBeTruthy();

  await act(async () => {
    const props = getReactProps(twoPlyButton as HTMLButtonElement);
    await props.onClick?.();
  });

  await flushUntil(() => (container.textContent || "").includes("Results"));

  expect(outreachPoll.submitOutreachPollVote).toHaveBeenCalledTimes(1);
  expect(container.querySelector("svg")).toBeTruthy();
  expect(container.textContent || "").toMatch(/votes/i);
  expect(container.textContent || "").toMatch(/shared-living expectations/i);

  const ctaLink = Array.from(container.querySelectorAll("a")).find((link) =>
    (link.textContent || "").includes("Check this out"),
  );
  expect(ctaLink?.getAttribute("href")).toBe("https://go.makinglifeeasie.com/kinly");

  unmount();
});

test("without k_sc it shows results but does not write vote RPC", async () => {
  mockSearchParams = new URLSearchParams("k_sc=invalid!");
  const { container, unmount } = render(<PollClient slug="toilet-paper-v1" detectedCountryCode="NZ" />);

  await flushUntil(() => (container.textContent || "").includes("What kind of toilet paper"));

  const twoPlyButton = Array.from(container.querySelectorAll("button")).find((button) =>
    (button.textContent || "").includes("2 ply"),
  );
  expect(twoPlyButton).toBeTruthy();

  await act(async () => {
    const props = getReactProps(twoPlyButton as HTMLButtonElement);
    await props.onClick?.();
  });

  await flushUntil(() => (container.textContent || "").includes("Results"));

  expect(outreachPoll.submitOutreachPollVote).not.toHaveBeenCalled();
  expect(outreachPoll.fetchOutreachPollResults).toHaveBeenCalled();

  unmount();
});

test("regression: removed submit/warning/get-kinly UI does not render", async () => {
  const { container, unmount } = render(<PollClient slug="toilet-paper-v1" detectedCountryCode="NZ" />);
  await flushUntil(() => (container.textContent || "").includes("What kind of toilet paper"));

  const text = container.textContent || "";
  expect(text).not.toMatch(/Submit vote/i);
  expect(text).not.toMatch(/Voting is available only from official UC QR links/i);
  expect(text).not.toMatch(/Get Kinly/i);

  unmount();
});

test("hides page_key-like poll title and falls back to neutral title", async () => {
  vi.mocked(outreachPoll.fetchOutreachPoll).mockResolvedValueOnce({
    ok: true,
    poll: {
      ...basePoll,
      page_key: "poll_milk_v1",
      title: "poll_milk_v1",
    },
    options: baseOptions,
  });

  const { container, unmount } = render(<PollClient slug="milk-v1" detectedCountryCode="NZ" />);
  await flushUntil(() => (container.textContent || "").includes("Quick pulse check"));

  const text = container.textContent || "";
  expect(text).toMatch(/Kinly Poll/i);
  expect(text).not.toMatch(/poll_milk_v1/i);

  unmount();
});

test("strips trailing machine suffix from title", async () => {
  vi.mocked(outreachPoll.fetchOutreachPoll).mockResolvedValueOnce({
    ok: true,
    poll: {
      ...basePoll,
      page_key: "poll_milk_v1",
      title: "UC Poll Noticeboard_spreadsheet",
    },
    options: baseOptions,
  });

  const { container, unmount } = render(<PollClient slug="milk-v1" detectedCountryCode="NZ" />);
  await flushUntil(() => (container.textContent || "").includes("Quick pulse check"));

  const text = container.textContent || "";
  expect(text).toMatch(/UC Poll/i);
  expect(text).not.toMatch(/Noticeboard_spreadsheet/i);

  unmount();
});
