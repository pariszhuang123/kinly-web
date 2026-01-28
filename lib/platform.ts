import { headers } from "next/headers";

export type Platform = "ios" | "android" | "web";

export async function getDetectedPlatform(): Promise<Platform> {
  const h = await headers();
  const ua = h.get("user-agent")?.toLowerCase() ?? "";

  if (/iphone|ipad|ipod/.test(ua)) {
    return "ios";
  }
  if (/android/.test(ua)) {
    return "android";
  }
  return "web";
}
