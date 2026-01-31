import { redirect } from "next/navigation";
import { getDetectedCountryCode } from "../../lib/geo";
import { getDetectedPlatform } from "../../lib/platform";

const SUPPORTED_REGIONS = ["NZ", "SG"];
const DEFAULT_APP_STORE_URL = "https://apps.apple.com/app/kinly/id6756508378";
const DEFAULT_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly";

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function KinlyIndexPage({ searchParams }: PageProps) {
  const [countryCode, platform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);

  const query = new URLSearchParams();
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (Array.isArray(value)) {
        value.forEach((v) => query.append(key, v));
      } else if (typeof value === "string") {
        query.append(key, value);
      }
    }
  }

  const querySuffix = query.toString() ? `?${query.toString()}` : "";

  const isSupported = Boolean(
    countryCode && SUPPORTED_REGIONS.includes(countryCode.toUpperCase()),
  );

  if (!isSupported) {
    redirect(`/kinly/get${querySuffix}`);
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

  redirect(`/kinly/general${querySuffix}`);
}
