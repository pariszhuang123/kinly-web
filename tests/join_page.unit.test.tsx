import { beforeEach, expect, test, vi } from "vitest";

const redirectMock = vi.fn();
const geoMock = vi.fn();
vi.mock("../lib/geo", () => ({
  getDetectedCountryCode: () => geoMock(),
}));

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

import JoinPage from "../app/join/[inviteCode]/page";

beforeEach(() => {
  redirectMock.mockReset();
  geoMock.mockReset();
});

test("redirects to /fallback when invite code is invalid", async () => {
  await JoinPage({ params: { inviteCode: "bad" } as { inviteCode: string } });
  expect(redirectMock).toHaveBeenCalledWith("/fallback");
});

test("redirects to /get with next when region unsupported", async () => {
  geoMock.mockResolvedValue("US");
  await JoinPage({ params: { inviteCode: "ABCDEF" } as { inviteCode: string } });
  expect(redirectMock).toHaveBeenCalledWith("/get?next=%2Fjoin%2FABCDEF&intent=join");
});

test("returns JoinClient element when region is supported", async () => {
  geoMock.mockResolvedValue("NZ");
  const element = await JoinPage({ params: { inviteCode: "ABCDEF" } as { inviteCode: string } });

  expect(redirectMock).not.toHaveBeenCalled();
  expect(element?.props?.inviteCode).toBe("ABCDEF");
  expect(typeof element?.type).toBe("function");
});
