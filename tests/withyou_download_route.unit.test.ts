import { beforeEach, expect, test, vi } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "../app/withyou/download/audio/[language]/route";

beforeEach(() => {
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  vi.restoreAllMocks();
});

test("redirects supported languages to the static pack zip", async () => {
  const request = new NextRequest("https://example.com/withyou/download/audio/en");
  const response = await GET(request, { params: Promise.resolve({ language: "en" }) });

  expect(response.status).toBe(302);
  expect(response.headers.get("location")).toBe("https://example.com/withyou/audio/en/core.zip");
});

test("returns a safe 404 payload for unsupported languages", async () => {
  const request = new NextRequest("https://example.com/withyou/download/audio/fr");
  const response = await GET(request, { params: Promise.resolve({ language: "fr" }) });
  const body = await response.json();

  expect(response.status).toBe(404);
  expect(body).toEqual({
    ok: false,
    error: "WITHYOU_UNSUPPORTED_LANGUAGE",
  });
});
