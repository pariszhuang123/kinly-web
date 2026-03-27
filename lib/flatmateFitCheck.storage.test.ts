// @vitest-environment jsdom

import { beforeEach, describe, expect, test } from "vitest";
import {
  getCandidateResult,
  getOwnerDraftSession,
  saveCandidateResult,
  saveOwnerDraftSession,
} from "./flatmateFitCheck";

describe("flatmateFitCheck storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  test("round-trips a valid owner draft session", () => {
    saveOwnerDraftSession({
      draftId: "draft-1",
      draftSessionToken: "session-1",
      shareUrl: "https://example.com/join/token",
      claimUrl: "kinly://claim",
      answers: {
        fit_cleanliness: 0,
        fit_rhythm: 1,
        fit_chores: 2,
        fit_conflict: 0,
      },
      summaryLabels: ["A", "B"],
    });

    expect(getOwnerDraftSession()).toMatchObject({
      draftId: "draft-1",
      draftSessionToken: "session-1",
    });
  });

  test("returns null for invalid stored owner draft payloads", () => {
    window.localStorage.setItem("kinly.fit_check.owner_draft", "{bad json");
    expect(getOwnerDraftSession()).toBeNull();

    window.localStorage.setItem(
      "kinly.fit_check.owner_draft",
      JSON.stringify({
        draftId: "draft-1",
        draftSessionToken: "session-1",
        shareUrl: "https://example.com/join/token",
        answers: { fit_cleanliness: 0 },
      }),
    );
    expect(getOwnerDraftSession()).toBeNull();
  });

  test("reads candidate result from local storage when session storage misses", () => {
    saveCandidateResult({
      submissionId: "submission-1",
      displayName: "Alex",
      reflectionKey: "fit_check.candidate.reflection.flexible",
      ctaUrl: "/kinly/general",
      countryCode: "NZ",
      cityName: "Auckland",
    });

    window.sessionStorage.removeItem("kinly.fit_check.candidate_results");

    expect(getCandidateResult("submission-1")).toMatchObject({
      submissionId: "submission-1",
      cityName: "Auckland",
    });
    expect(getCandidateResult("missing")).toBeNull();
  });
});
