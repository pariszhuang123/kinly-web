import { KinlyButton, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../../components";

export const metadata = {
  title: "Fallback | Kinly",
};

export default function FallbackPage() {
  return (
    <main>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="m">
          <KinlyHeading level={1}>You are in a safe place</KinlyHeading>
          <KinlyText variant="bodyMedium">
            This link could not be completed. You can still explore Kinly, or tell us you are interested.
          </KinlyText>
          <KinlyStack direction="horizontal" gap="s" wrap>
            <KinlyButton variant="filled" href="/kinly/general">
              Go to Kinly
            </KinlyButton>
            <KinlyButton variant="outlined" href="/kinly/get">
              Share interest
            </KinlyButton>
          </KinlyStack>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
