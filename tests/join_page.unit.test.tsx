import { beforeEach, expect, test, vi } from "vitest";

const redirectMock = vi.fn();
const geoMock = vi.fn();
const platformMock = vi.fn();

vi.mock("../lib/geo", () => ({
  getDetectedCountryCode: () => geoMock(),
}));

vi.mock("../lib/platform", () => ({
  getDetectedPlatform: () => platformMock(),
}));

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

import JoinPage from "../app/kinly/join/[inviteCode]/page";

beforeEach(() => {
  redirectMock.mockReset();
  geoMock.mockReset();
  platformMock.mockReset();
  delete process.env.NEXT_PUBLIC_ANDROID_STORE_URL;
  delete process.env.NEXT_PUBLIC_IOS_STORE_URL;
});

test("redirects to /fallback when invite code is invalid", async () => {
  await JoinPage({ params: Promise.resolve({ inviteCode: "bad" }) });
  expect(redirectMock).toHaveBeenCalledWith("/fallback");
});

test("redirects to /get with next when region unsupported", async () => {
  geoMock.mockResolvedValue("US");
  platformMock.mockResolvedValue("web");
  await JoinPage({ params: Promise.resolve({ inviteCode: "ABCDEF" }) });
  expect(redirectMock).toHaveBeenCalledWith(
    "/get?next=%2Fkinly%2Fjoin%2FABCDEF&intent=join&code=ABCDEF&source=web_join",
  );
});

test("redirects to App Store on iOS in supported region", async () => {
  geoMock.mockResolvedValue("NZ");
  platformMock.mockResolvedValue("ios");
  await JoinPage({ params: Promise.resolve({ inviteCode: "ABCDEF" }) });
  expect(redirectMock).toHaveBeenCalledWith("https://apps.apple.com/app/kinly/id6756508378");
});

test("redirects to Play Store with referrer on Android in supported region", async () => {
  geoMock.mockResolvedValue("SG");
  platformMock.mockResolvedValue("android");
  await JoinPage({ params: Promise.resolve({ inviteCode: "ABCDEF" }) });
  expect(redirectMock).toHaveBeenCalledWith(
    expect.stringContaining("play.google.com"),
  );
  expect(redirectMock).toHaveBeenCalledWith(
    expect.stringContaining("referrer=kinly_invite_code%3DABCDEF"),
  );
});

test("redirects to landing on desktop in supported region", async () => {
  geoMock.mockResolvedValue("NZ");
  platformMock.mockResolvedValue("web");
  await JoinPage({ params: Promise.resolve({ inviteCode: "ABCDEF" }) });
  expect(redirectMock).toHaveBeenCalledWith("/");
});

test("uses custom iOS store URL from env if set", async () => {
  geoMock.mockResolvedValue("NZ");
  platformMock.mockResolvedValue("ios");
  process.env.NEXT_PUBLIC_IOS_STORE_URL = "https://custom.app.store/kinly";
  await JoinPage({ params: Promise.resolve({ inviteCode: "ABCDEF" }) });
  expect(redirectMock).toHaveBeenCalledWith("https://custom.app.store/kinly");
});

test("uses custom Android store URL from env if set", async () => {
  geoMock.mockResolvedValue("NZ");
  platformMock.mockResolvedValue("android");
  process.env.NEXT_PUBLIC_ANDROID_STORE_URL = "https://custom.play.store/kinly";
  await JoinPage({ params: Promise.resolve({ inviteCode: "ABCDEF" }) });
  expect(redirectMock).toHaveBeenCalledWith(
    expect.stringContaining("custom.play.store"),
  );
});
