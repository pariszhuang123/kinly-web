import { beforeEach, expect, test, vi } from "vitest";

const redirectMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

import WithYouIndexPage from "../app/withyou/page";

beforeEach(() => {
  redirectMock.mockReset();
});

test("redirects /withyou to the default scenario", () => {
  WithYouIndexPage();
  expect(redirectMock).toHaveBeenCalledWith("/withyou/uber");
});
