"use client";

import { useSyncExternalStore } from "react";
import { resolveFallbackContent } from "./copy";
import { FallbackView } from "./FallbackView";

type FallbackClientProps = {
  preferredLanguage?: string | null;
};

function subscribeToLanguageChange(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("languagechange", onStoreChange);
  return () => window.removeEventListener("languagechange", onStoreChange);
}

export function FallbackClient({ preferredLanguage = null }: FallbackClientProps) {
  const language = useSyncExternalStore(
    subscribeToLanguageChange,
    () => (typeof navigator === "undefined" ? preferredLanguage : navigator.language || preferredLanguage),
    () => preferredLanguage,
  );

  const { copy, isRtl } = resolveFallbackContent(language);

  return <FallbackView copy={copy} isRtl={isRtl} />;
}
