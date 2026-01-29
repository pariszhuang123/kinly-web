import { redirect } from "next/navigation";
import { getDetectedCountryCode } from "../../lib/geo";
import { getDetectedPlatform } from "../../lib/platform";

const SUPPORTED_REGIONS = ["NZ", "SG"];
const DEFAULT_APP_STORE_URL = "https://apps.apple.com/app/kinly/id6756508378";
const DEFAULT_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly";

export default async function KinlyIndexPage() {
  const [countryCode, platform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);

  const isSupported = Boolean(
    countryCode && SUPPORTED_REGIONS.includes(countryCode.toUpperCase()),
  );

  if (!isSupported) {
    redirect("/kinly/get");
  }

  const appStoreUrl =
    (process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() as string | undefined) ||
    DEFAULT_APP_STORE_URL;
  const playStoreUrl =
    (process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() as string | undefined) ||
    DEFAULT_PLAY_STORE_URL;

  if (platform === "ios") {
    redirect(appStoreUrl);
  }

  if (platform === "android") {
    redirect(playStoreUrl);
  }

  redirect("/kinly/general");
}
