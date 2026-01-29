import { redirect } from "next/navigation";
import { getDetectedCountryCode } from "../../../../lib/geo";
import { getDetectedPlatform } from "../../../../lib/platform";

const SUPPORTED_REGIONS = ["NZ", "SG"];
const INVITE_CODE_REGEX = /^[A-HJ-NP-Z2-9]{6}$/i;
const PLAY_STORE_PACKAGE_NAME = "com.makinglifeeasie.kinly";
const DEFAULT_PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PLAY_STORE_PACKAGE_NAME}`;
const DEFAULT_APP_STORE_URL = "https://apps.apple.com/app/kinly/id6756508378";
const INVITE_SOURCE_TAG = "web_join";

function sanitizeInviteCode(value: string | string[] | undefined): string | null {
  if (!value || Array.isArray(value)) return null;
  const trimmed = value.trim();
  if (!INVITE_CODE_REGEX.test(trimmed)) return null;
  return trimmed.toUpperCase();
}

function buildPlayStoreUrl(baseUrl: string | undefined, inviteCode: string) {
  const safeBase = baseUrl?.trim() || DEFAULT_PLAY_STORE_URL;
  try {
    const url = new URL(safeBase);
    const referrerParts = [`kinly_invite_code=${inviteCode}`];
    if (INVITE_SOURCE_TAG) {
      referrerParts.push(`src=${INVITE_SOURCE_TAG}`);
    }
    url.searchParams.set("referrer", referrerParts.join("&"));
    return url.toString();
  } catch {
    return safeBase;
  }
}

type Params = Promise<{
  inviteCode: string;
}>;

export default async function JoinPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const sanitizedInvite = sanitizeInviteCode(resolvedParams?.inviteCode);
  if (!sanitizedInvite) {
    redirect("/fallback");
  }

  const [detectedCountryCode, platform] = await Promise.all([
    getDetectedCountryCode(),
    getDetectedPlatform(),
  ]);

  const isSupported = Boolean(
    detectedCountryCode && SUPPORTED_REGIONS.includes(detectedCountryCode.toUpperCase()),
  );

  if (!isSupported) {
    const encodedNext = encodeURIComponent(`/kinly/join/${sanitizedInvite}`);
    const encodedCode = encodeURIComponent(sanitizedInvite);
    redirect(`/kinly/get?next=${encodedNext}&intent=join&code=${encodedCode}&source=${INVITE_SOURCE_TAG}`);
  }

  if (platform === "ios") {
    const appStoreUrl = process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || DEFAULT_APP_STORE_URL;
    redirect(appStoreUrl);
  }

  if (platform === "android") {
    const playStoreUrl = buildPlayStoreUrl(process.env.NEXT_PUBLIC_ANDROID_STORE_URL, sanitizedInvite);
    redirect(playStoreUrl);
  }

  redirect("/kinly/general");
}
