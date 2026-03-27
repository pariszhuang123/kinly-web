/* eslint-disable @next/next/no-img-element */
"use client";

import { KinlyButton, KinlyCard, KinlyHeading, KinlyStack, KinlyText } from "../../../components";
import { resolveStoreBadges } from "../../../lib/storeBadges";
import { isSupportedRegion } from "../../../lib/regionSupport";
import { getFitCheckAppUrls } from "../../../lib/flatmateFitCheck";
import styles from "./FitCheckClient.module.css";
import { fitCheckCopy } from "./copy";

type Props = {
  detectedCountryCode?: string | null;
  detectedPlatform?: "ios" | "android" | "web";
  onStoreClick?: (store: "ios_app_store" | "google_play") => void;
  title: string;
  body: string;
  lang?: string | null;
  continueUrl?: string | null;
};

export function StoreDownloadCtas({
  detectedCountryCode = null,
  detectedPlatform = "web",
  onStoreClick,
  title,
  body,
  lang = "en",
  continueUrl = null,
}: Props) {
  const showStore = !detectedCountryCode || isSupportedRegion(detectedCountryCode);
  const badges = resolveStoreBadges(lang);
  const appUrls = getFitCheckAppUrls();
  const showContinueButton = Boolean(continueUrl && (continueUrl.startsWith("/") || continueUrl.startsWith("http")));
  const safeContinueUrl = showContinueButton ? continueUrl ?? "" : null;

  if (!showStore) {
    return (
      <KinlyCard variant="surface">
        <KinlyStack direction="vertical" gap="s">
          <KinlyHeading level={3}>{fitCheckCopy.app.fallbackTitle}</KinlyHeading>
          <KinlyText variant="bodyMedium">{fitCheckCopy.app.fallbackBody}</KinlyText>
          <KinlyButton variant="outlined" href="/kinly/get">
            Check Kinly availability
          </KinlyButton>
        </KinlyStack>
      </KinlyCard>
    );
  }

  return (
    <KinlyCard variant="surfaceContainerHigh">
      <KinlyStack direction="vertical" gap="m">
        <KinlyHeading level={3}>{title}</KinlyHeading>
        <KinlyText variant="bodyMedium">{body}</KinlyText>
        {safeContinueUrl ? (
          <KinlyButton variant="filled" href={safeContinueUrl}>
            Continue in app
          </KinlyButton>
        ) : null}
        <div className={styles.storeBadges}>
          {detectedPlatform !== "android" ? (
            <a
              className={styles.storeBadgeLink}
              href={appUrls.ios}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={fitCheckCopy.app.iosLabel}
              onClick={() => onStoreClick?.("ios_app_store")}
            >
              <img src={badges.apple} alt={fitCheckCopy.app.iosLabel} className={styles.storeBadge} />
            </a>
          ) : null}
          {detectedPlatform !== "ios" ? (
            <a
              className={styles.storeBadgeLink}
              href={appUrls.android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={fitCheckCopy.app.androidLabel}
              onClick={() => onStoreClick?.("google_play")}
            >
              <img src={badges.play} alt={fitCheckCopy.app.androidLabel} className={styles.storeBadge} />
            </a>
          ) : null}
        </div>
      </KinlyStack>
    </KinlyCard>
  );
}
