/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useState } from "react";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../components";
import styles from "./JoinClient.module.css";

type JoinClientProps = {
  inviteCode: string;
  appStoreUrl: string;
  playStoreUrl: string;
};

export default function JoinClient({ inviteCode, appStoreUrl, playStoreUrl }: JoinClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [inviteCode]);

  return (
    <main className={styles.page}>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <KinlyStack direction="vertical" gap="xs">
            <KinlyHeading level={1}>Join with Kinly</KinlyHeading>
            <KinlyText variant="bodyMedium">
              Install Kinly, then open the app and enter your invite code to join your home.
            </KinlyText>
          </KinlyStack>

          <KinlyCard variant="surfaceContainer">
            <KinlyStack direction="vertical" gap="s">
              <KinlyText variant="labelSmall" tone="muted">
                Invite code
              </KinlyText>
              <div className={styles.codeRow}>
                <KinlyHeading level={2}>{inviteCode}</KinlyHeading>
                <KinlyButton type="button" variant="outlined" size="sm" onClick={handleCopy}>
                  {copied ? "Copied" : "Copy"}
                </KinlyButton>
              </div>
              <KinlyText variant="bodySmall" tone="muted">
                Keep this code handy. You will use it after installing Kinly.
              </KinlyText>
            </KinlyStack>
          </KinlyCard>

          <KinlyCard variant="surfaceContainerHigh">
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Get the app</KinlyHeading>
              <KinlyText variant="bodyMedium">Download Kinly, then return to enter your invite.</KinlyText>
              <KinlyStack direction="horizontal" gap="s" wrap>
                <a
                  className={styles.storeBadgeLink}
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <img src="/apple-store.svg" alt="Download on the App Store" className={styles.storeBadge} />
                </a>
                <a
                  className={styles.storeBadgeLink}
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <img src="/google-play.svg" alt="Get it on Google Play" className={styles.storeBadge} />
                </a>
              </KinlyStack>
            </KinlyStack>
          </KinlyCard>

          <KinlyStack direction="horizontal" gap="m" align="center">
            <KinlyButton variant="outlined" href="/">
              Back to landing
            </KinlyButton>
            <KinlyButton variant="filled" href="/get">
              Share interest instead
            </KinlyButton>
          </KinlyStack>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
