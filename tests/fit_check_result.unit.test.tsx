// @vitest-environment jsdom

import { act } from "react";
import { beforeEach, expect, test, vi } from "vitest";
import { createRoot } from "react-dom/client";
import CandidateResultClient from "../app/kinly/fit-check/result/[submissionId]/CandidateResultClient";

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
  window.sessionStorage.clear();
  vi.restoreAllMocks();
});

test("renders the personalized result from stored candidate state", async () => {
  window.localStorage.setItem(
    "kinly.fit_check.candidate_results",
    JSON.stringify({
      "submission-1": {
        submissionId: "submission-1",
        displayName: "Alex",
        reflectionKey: "fit_check.candidate.reflection.flexible",
        ctaUrl: "/kinly/general",
        countryCode: "NZ",
        cityName: "Auckland",
      },
    }),
  );

  const { container, unmount } = render(
    <CandidateResultClient submissionId="submission-1" detectedCountryCode="NZ" detectedPlatform="web" />,
  );
  await flushEffects();

  expect(container.textContent || "").toContain("Thanks, Alex.");
  expect(container.textContent || "").toContain("comfortable");
  expect(container.textContent || "").toContain("Keep this in Kinly");
  expect(container.textContent || "").toContain("Auckland");

  unmount();
});
