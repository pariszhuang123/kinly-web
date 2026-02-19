import { headers } from "next/headers";
import { resolveFallbackContent } from "./fallback/copy";
import { FallbackView } from "./fallback/FallbackView";

export default async function NotFound() {
  const requestHeaders = await headers();
  const preferredLanguage = requestHeaders.get("accept-language");
  const { copy, isRtl } = resolveFallbackContent(preferredLanguage);

  return (
    <FallbackView
      copy={copy}
      isRtl={isRtl}
    />
  );
}
