import { redirect } from "next/navigation";
import JoinClient from "../JoinClient";
import { getDetectedCountryCode } from "../../../lib/geo";

const SUPPORTED_REGIONS = ["NZ", "SG"];
const INVITE_CODE_REGEX = /^[A-HJ-NP-Z2-9]{6}$/i;

function sanitizeInviteCode(value: string | string[] | undefined): string | null {
  if (!value || Array.isArray(value)) return null;
  const trimmed = value.trim();
  if (!INVITE_CODE_REGEX.test(trimmed)) return null;
  return trimmed.toUpperCase();
}

type Params = {
  inviteCode: string;
};

export default async function JoinPage({ params }: { params: Params }) {
  const sanitizedInvite = sanitizeInviteCode(params?.inviteCode);
  if (!sanitizedInvite) {
    redirect("/fallback");
  }

  const detectedCountryCode = await getDetectedCountryCode();
  const isSupported = Boolean(
    detectedCountryCode && SUPPORTED_REGIONS.includes(detectedCountryCode.toUpperCase()),
  );

  if (!isSupported) {
    const encodedNext = encodeURIComponent(`/join/${sanitizedInvite}`);
    redirect(`/get?next=${encodedNext}&intent=join`);
  }

  return (
    <JoinClient
      inviteCode={sanitizedInvite}
      appStoreUrl={
        process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378"
      }
      playStoreUrl={
        process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
        "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly"
      }
    />
  );
}
