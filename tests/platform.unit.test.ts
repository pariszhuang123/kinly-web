import { expect, test, vi, beforeEach } from "vitest";

const headersGet = vi.fn();
vi.mock("next/headers", () => ({
  headers: () =>
    Promise.resolve({
      get: headersGet,
    }),
}));

import { getDetectedPlatform } from "../lib/platform";

beforeEach(() => {
  headersGet.mockReset();
});

test("returns ios when user-agent contains iPhone", async () => {
  headersGet.mockImplementation((key: string) =>
    key === "user-agent" ? "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)" : null,
  );

  const result = await getDetectedPlatform();
  expect(result).toBe("ios");
});

test("returns ios when user-agent contains iPad", async () => {
  headersGet.mockImplementation((key: string) =>
    key === "user-agent" ? "Mozilla/5.0 (iPad; CPU OS 16_0)" : null,
  );

  const result = await getDetectedPlatform();
  expect(result).toBe("ios");
});

test("returns android when user-agent contains Android", async () => {
  headersGet.mockImplementation((key: string) =>
    key === "user-agent" ? "Mozilla/5.0 (Linux; Android 13; Pixel 7)" : null,
  );

  const result = await getDetectedPlatform();
  expect(result).toBe("android");
});

test("returns web when user-agent is desktop browser", async () => {
  headersGet.mockImplementation((key: string) =>
    key === "user-agent" ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120" : null,
  );

  const result = await getDetectedPlatform();
  expect(result).toBe("web");
});

test("returns web when user-agent header is missing", async () => {
  headersGet.mockReturnValue(null);

  const result = await getDetectedPlatform();
  expect(result).toBe("web");
});
