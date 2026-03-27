import { describe, expect, test } from "vitest";
import {
  fetchFitCheckPublicByToken,
  getFitCheckEntryText,
  getFitCheckAppUrls,
  getCandidateReflectionText,
  mapFitCheckErrorMessage,
  submitFitCheckCandidateByToken,
  toFitCheckAnswersPayload,
  upsertFitCheckDraft,
} from "./flatmateFitCheck";
import { getFitCheckCityOptions, getFitCheckLocationLabel, isValidFitCheckCity } from "./fitCheckLocations";

describe("flatmateFitCheck helpers", () => {
  test("returns a payload only when all answers are present", () => {
    expect(
      toFitCheckAnswersPayload({
        fit_cleanliness: 0,
        fit_rhythm: 1,
        fit_chores: 2,
      }),
    ).toBeNull();

    expect(
      toFitCheckAnswersPayload({
        fit_cleanliness: 0,
        fit_rhythm: 1,
        fit_chores: 2,
        fit_conflict: 1,
      }),
    ).toEqual({
      fit_cleanliness: 0,
      fit_rhythm: 1,
      fit_chores: 2,
      fit_conflict: 1,
    });
  });

  test("maps backend error codes to user-facing messages", () => {
    expect(mapFitCheckErrorMessage("FIT_CHECK_TOKEN_EXPIRED")).toMatch(/expired/i);
    expect(mapFitCheckErrorMessage("FIT_CHECK_TOKEN_REVOKED")).toMatch(/no longer active/i);
    expect(mapFitCheckErrorMessage("FIT_CHECK_DUPLICATE_SUBMISSION")).toMatch(/already submitted/i);
    expect(mapFitCheckErrorMessage("FIT_CHECK_TOKEN_SUBMISSION_LIMIT_REACHED")).toMatch(/no longer accepting/i);
    expect(mapFitCheckErrorMessage("FIT_CHECK_RATE_LIMITED")).toMatch(/too many attempts/i);
    expect(mapFitCheckErrorMessage("FIT_CHECK_INVALID_INPUTS")).toMatch(/complete each answer/i);
    expect(mapFitCheckErrorMessage("FIT_CHECK_CONFIG_MISSING")).toMatch(/not configured/i);
    expect(mapFitCheckErrorMessage("unknown")).toMatch(/something went wrong/i);
  });

  test("resolves candidate reflection copy from keys", () => {
    expect(getCandidateReflectionText("fit_check.candidate.reflection.flexible")).toMatch(/comfortable/i);
    expect(getCandidateReflectionText("fit_check.candidate.reflection.structured")).toMatch(/visible expectations/i);
    expect(getCandidateReflectionText(null)).toMatch(/snapshot/i);
  });

  test("resolves fit check entry text from template keys", () => {
    expect(getFitCheckEntryText("fit_check.candidate.entry_prompt")).toMatch(/day to day/i);
    expect(getFitCheckEntryText("unknown")).toMatch(/day to day/i);
  });

  test("validates bounded city options by country", () => {
    expect(getFitCheckCityOptions("NZ")).toContain("Auckland");
    expect(isValidFitCheckCity("NZ", "Auckland")).toBe(true);
    expect(isValidFitCheckCity("NZ", "Sydney")).toBe(false);
    expect(getFitCheckLocationLabel("NZ", "Auckland")).toMatch(/Auckland/);
  });

  test("returns default app store URLs", () => {
    expect(getFitCheckAppUrls().ios).toMatch(/apps\.apple\.com/);
    expect(getFitCheckAppUrls().android).toMatch(/play\.google\.com/);
  });

  test("normalizes rpc errors when config is missing", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const result = await upsertFitCheckDraft("en", {
      fit_cleanliness: 0,
      fit_rhythm: 0,
      fit_chores: 0,
      fit_conflict: 0,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("FIT_CHECK_CONFIG_MISSING");
    }
  });

  test("passes candidate location fields to the submit rpc", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";

    let requestInit: RequestInit | undefined;
    const result = await submitFitCheckCandidateByToken(
      "token-1",
      "en",
      " Alex ",
      " nz ",
      " Auckland ",
      {
        fit_cleanliness: 0,
        fit_rhythm: 1,
        fit_chores: 2,
        fit_conflict: 0,
      },
      "anon-session",
      async (_input, init) => {
        requestInit = init;
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
              cta: {
                text_key: "fit_check.candidate.create_own_cta",
                target_url: "/kinly/general",
              },
            },
          }),
        } as Response;
      },
    );

    expect(result.ok).toBe(true);
    const body = JSON.parse(String(requestInit?.body ?? "{}"));
    expect(body.p_country_code).toBe("NZ");
    expect(body.p_city_name).toBe("Auckland");
  });

  test("returns normalized unknown errors from rpc wrappers", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.com";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";

    const result = await fetchFitCheckPublicByToken("token-1", "en", async () => {
      throw new Error("boom");
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("FIT_CHECK_NETWORK_ERROR");
    }
  });
});
