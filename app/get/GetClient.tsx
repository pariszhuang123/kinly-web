"use client";

import { useSearchParams } from "next/navigation";
import {
  KinlyCard,
  KinlyButton,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../components";

export default function GetClient() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");
  const home = searchParams.get("home");

  return (
    <main>
      <KinlyShell as="section">
        <KinlyCard variant="surface">
          <KinlyStack direction="vertical" gap="m">
            <KinlyHeading level={2}>Get Kinly</KinlyHeading>
            <KinlyText variant="bodyMedium" tone="muted">
              {code
                ? `Invite code: ${code}`
                : home
                  ? `Home: ${home}`
                  : "Open Kinly on your phone to continue."}
            </KinlyText>

            <KinlyStack direction="horizontal" gap="m">
              <KinlyButton variant="filled" href="#">
                Open the app
              </KinlyButton>

              <KinlyButton variant="outlined" href="/">
                Back to home
              </KinlyButton>
            </KinlyStack>
          </KinlyStack>
        </KinlyCard>
      </KinlyShell>
    </main>
  );
}
