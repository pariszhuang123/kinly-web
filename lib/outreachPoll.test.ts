import { afterEach, describe, expect, test } from "vitest";

import {
  derivePollPageKeyFromSlug,
  fetchOutreachPoll,
  fetchOutreachPollResults,
  submitOutreachPollVote,
} from "./outreachPoll";

describe("derivePollPageKeyFromSlug", () => {
  test("prefixes slug with poll_", () => {
    expect(derivePollPageKeyFromSlug("toilet-paper-v1")).toBe("poll_toilet_paper_v1");
  });

  test("preserves poll_ prefix", () => {
    expect(derivePollPageKeyFromSlug("poll_toilet_paper_v1")).toBe("poll_toilet_paper_v1");
  });

  test("returns poll_unknown for empty input", () => {
    expect(derivePollPageKeyFromSlug("")).toBe("poll_unknown");
  });
});

describe("fetchOutreachPoll", () => {
  const originalEnv = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  afterEach(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = originalEnv.url;
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalEnv.key;
  });

  test("returns config_missing when env vars are absent", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const result = await fetchOutreachPoll("poll_toilet_paper_v1");
    expect(result).toEqual({ ok: false, error: "config_missing" });
  });

  test("parses valid poll payload", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            ok: true,
            poll: {
              page_key: "poll_toilet_paper_v1",
              title: "Toilet Paper Habits",
              question: "How do you split restocking?",
              description: "UC pulse",
            },
            options: [
              { option_key: "equal_split", label: "Split equally", position: 2 },
              { option_key: "buyer_keeps", label: "Buyer keeps note", position: 1 },
            ],
          }),
          { status: 200 },
        ),
      );

    const result = await fetchOutreachPoll("poll_toilet_paper_v1", fakeFetcher);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.poll.page_key).toBe("poll_toilet_paper_v1");
      expect(result.options.map((option) => option.option_key)).toEqual([
        "buyer_keeps",
        "equal_split",
      ]);
    }
  });
});

describe("submitOutreachPollVote", () => {
  const originalEnv = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  afterEach(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = originalEnv.url;
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalEnv.key;
  });

  test("rejects invalid input before network call", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const result = await submitOutreachPollVote({
      shortCode: "",
      optionKey: "",
      sessionId: "anon_abcdefghijklmnop",
    });
    expect(result).toEqual({ ok: false, error: "invalid_input" });
  });

  test("parses vote results payload", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";

    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            ok: true,
            results: {
              total_votes: 12,
              option_counts: [
                { option_key: "equal_split", votes: 8 },
                { option_key: "buyer_keeps", votes: 4 },
              ],
            },
          }),
          { status: 200 },
        ),
      );

    const result = await submitOutreachPollVote(
      {
        shortCode: "k8m4qz",
        optionKey: "equal_split",
        sessionId: "anon_abcdefghijklmnop",
      },
      fakeFetcher,
    );

    expect(result).toEqual({
      ok: true,
      total_votes: 12,
      option_votes: {
        equal_split: 8,
        buyer_keeps: 4,
      },
    });
  });

  test("returns vote_rejected when response is not ok", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(new Response("{}", { status: 500 }));

    const result = await submitOutreachPollVote(
      { shortCode: "k8m4qz", optionKey: "equal_split", sessionId: "anon_abcdefghijklmnop" },
      fakeFetcher,
    );
    expect(result).toEqual({ ok: false, error: "vote_rejected" });
  });

  test("returns network_error when fetcher throws", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.reject(new Error("offline"));

    const result = await submitOutreachPollVote(
      { shortCode: "k8m4qz", optionKey: "equal_split", sessionId: "anon_abcdefghijklmnop" },
      fakeFetcher,
    );
    expect(result).toEqual({ ok: false, error: "network_error" });
  });

  test("parses option_votes object format", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            ok: true,
            results: {
              total_votes: 5,
              option_votes: { a: 3, b: 2 },
            },
          }),
          { status: 200 },
        ),
      );

    const result = await submitOutreachPollVote(
      { shortCode: "k8m4qz", optionKey: "a", sessionId: "anon_abcdefghijklmnop" },
      fakeFetcher,
    );
    expect(result).toEqual({ ok: true, total_votes: 5, option_votes: { a: 3, b: 2 } });
  });
});

describe("fetchOutreachPoll error paths", () => {
  const originalEnv = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  afterEach(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = originalEnv.url;
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalEnv.key;
  });

  test("returns poll_not_found on 404 with code", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(JSON.stringify({ code: "poll_not_found" }), { status: 404 }),
      );

    const result = await fetchOutreachPoll("poll_missing", fakeFetcher);
    expect(result).toEqual({ ok: false, error: "poll_not_found" });
  });

  test("returns network_error on non-ok without poll_not_found code", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(new Response("{}", { status: 500 }));

    const result = await fetchOutreachPoll("poll_x", fakeFetcher);
    expect(result).toEqual({ ok: false, error: "network_error" });
  });

  test("returns poll_not_found when body.ok is false with poll_not_found error", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(JSON.stringify({ ok: false, error: "poll_not_found" }), { status: 200 }),
      );

    const result = await fetchOutreachPoll("poll_x", fakeFetcher);
    expect(result).toEqual({ ok: false, error: "poll_not_found" });
  });

  test("returns network_error when body.ok is false with other error", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(JSON.stringify({ ok: false, error: "internal" }), { status: 200 }),
      );

    const result = await fetchOutreachPoll("poll_x", fakeFetcher);
    expect(result).toEqual({ ok: false, error: "network_error" });
  });

  test("returns invalid_response when poll definition is missing", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(JSON.stringify({ ok: true, poll: null, options: [] }), { status: 200 }),
      );

    const result = await fetchOutreachPoll("poll_x", fakeFetcher);
    expect(result).toEqual({ ok: false, error: "invalid_response" });
  });

  test("returns network_error when fetcher throws", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.reject(new Error("offline"));

    const result = await fetchOutreachPoll("poll_x", fakeFetcher);
    expect(result).toEqual({ ok: false, error: "network_error" });
  });
});

describe("fetchOutreachPollResults", () => {
  const originalEnv = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  afterEach(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = originalEnv.url;
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalEnv.key;
  });

  test("returns null when config is missing", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const result = await fetchOutreachPollResults("poll_x");
    expect(result).toBeNull();
  });

  test("returns null on non-ok response", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(new Response("error", { status: 500 }));

    const result = await fetchOutreachPollResults("poll_x", fakeFetcher);
    expect(result).toBeNull();
  });

  test("returns null on empty array", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(new Response(JSON.stringify([]), { status: 200 }));

    const result = await fetchOutreachPollResults("poll_x", fakeFetcher);
    expect(result).toBeNull();
  });

  test("ignores rows with non-numeric vote_count strings", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(
          JSON.stringify([
            { option_key: "a", vote_count: "not_a_number", total_votes: "10" },
            { option_key: "b", vote_count: 3, total_votes: 10 },
          ]),
          { status: 200 },
        ),
      );

    const result = await fetchOutreachPollResults("poll_x", fakeFetcher);
    expect(result).toEqual({ total_votes: 10, option_votes: { a: 0, b: 3 } });
  });

  test("parses string vote counts", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(
          JSON.stringify([
            { option_key: "a", vote_count: "5", total_votes: "10" },
          ]),
          { status: 200 },
        ),
      );

    const result = await fetchOutreachPollResults("poll_x", fakeFetcher);
    expect(result).toEqual({ total_votes: 10, option_votes: { a: 5 } });
  });

  test("parses valid results with total_votes from rows", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(
          JSON.stringify([
            { option_key: "a", vote_count: 5, total_votes: 12 },
            { option_key: "b", vote_count: 7, total_votes: 12 },
          ]),
          { status: 200 },
        ),
      );

    const result = await fetchOutreachPollResults("poll_x", fakeFetcher);
    expect(result).toEqual({ total_votes: 12, option_votes: { a: 5, b: 7 } });
  });

  test("sums vote counts when total_votes is zero", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.resolve(
        new Response(
          JSON.stringify([
            { option_key: "a", vote_count: 3, total_votes: 0 },
            { option_key: "b", vote_count: 2, total_votes: 0 },
          ]),
          { status: 200 },
        ),
      );

    const result = await fetchOutreachPollResults("poll_x", fakeFetcher);
    expect(result).toEqual({ total_votes: 5, option_votes: { a: 3, b: 2 } });
  });

  test("returns null when fetcher throws", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
    const fakeFetcher: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = () =>
      Promise.reject(new Error("offline"));

    const result = await fetchOutreachPollResults("poll_x", fakeFetcher);
    expect(result).toBeNull();
  });
});
