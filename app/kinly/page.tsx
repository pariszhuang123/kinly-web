import { redirect } from "next/navigation";
import { getDetectedCountryCode } from "../../lib/geo";
import { getDetectedPlatform } from "../../lib/platform";

const SUPPORTED_REGIONS = ["NZ", "SG"];
const APP_STORE_URL = "https://apps.apple.com/app/kinly/id6756508378";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly";

export default async function KinlyIndexPage() {
  const [countryCode, platform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);

  const isSupported = Boolean(
    countryCode && SUPPORTED_REGIONS.includes(countryCode.toUpperCase()),
  );

  if (!isSupported) {
    redirect("/get");
  }

  if (platform === "ios") {
    redirect(APP_STORE_URL);
  }

  if (platform === "android") {
    redirect(PLAY_STORE_URL);
  }

  redirect("/");
}
