import { beforeEach, expect, test, vi } from "vitest";

const redirectMock = vi.fn();
const geoMock = vi.fn();
vi.mock("../lib/geo", () => ({
  getDetectedCountryCode: () => geoMock(),
}));

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

import JoinPage from "../app/kinly/join/[inviteCode]/page";

beforeEach(() => {
  redirectMock.mockReset();
  geoMock.mockReset();
  delete process.env.NEXT_PUBLIC_ANDROID_STORE_URL;
});

test("redirects to /fallback when invite code is invalid", async () => {
  await JoinPage({ params: { inviteCode: "bad" } as { inviteCode: string } });
  expect(redirectMock).toHaveBeenCalledWith("/fallback");
});

test("redirects to /get with next when region unsupported", async () => {
  geoMock.mockResolvedValue("US");
  await JoinPage({ params: { inviteCode: "ABCDEF" } as { inviteCode: string } });
  expect(redirectMock).toHaveBeenCalledWith(
    "/get?next=%2Fkinly%2Fjoin%2FABCDEF&intent=join&code=ABCDEF&source=web_join",
  );
});

test("returns JoinClient element when region is supported", async () => {
  geoMock.mockResolvedValue("NZ");
  const element = await JoinPage({ params: { inviteCode: "ABCDEF" } as { inviteCode: string } });

  expect(redirectMock).not.toHaveBeenCalled();
  expect(element?.props?.inviteCode).toBe("ABCDEF");
  expect(typeof element?.type).toBe("function");
});

test("play store url includes encoded referrer with invite code and source", async () => {
  geoMock.mockResolvedValue("NZ");
  const element = await JoinPage({ params: { inviteCode: "ABCDEF" } as { inviteCode: string } });

  expect(element?.props?.playStoreUrl).toContain(
    "referrer=kinly_invite_code%3DABCDEF%26src%3Dweb_join",
  );
});

test("falls back to provided base url when android store url is invalid", async () => {
  geoMock.mockResolvedValue("NZ");
  process.env.NEXT_PUBLIC_ANDROID_STORE_URL = "ht$tp://bad";

  const element = await JoinPage({ params: { inviteCode: "ABCDEF" } as { inviteCode: string } });

  expect(element?.props?.playStoreUrl).toBe("ht$tp://bad");
});
