import Image from "next/image";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
} from "../../components";
import type { FallbackCopy } from "./copy";
import styles from "./FallbackView.module.css";

type FallbackViewProps = {
  copy: FallbackCopy;
  isRtl: boolean;
};

export function FallbackView({ copy, isRtl }: FallbackViewProps) {
  return (
    <main className={styles.page} dir={isRtl ? "rtl" : "ltr"}>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.hero}>
              <div className={styles.illustrationWrap}>
                <Image
                  className={styles.illustration}
                  src="/images/fallback/kinly-404.webp"
                  alt={copy.imageAlt}
                  width={1200}
                  height={675}
                  priority
                />
              </div>
              <KinlyHeading level={1}>{copy.title}</KinlyHeading>
            </div>
          </KinlyCard>

          <KinlyCard variant="surface">
            <KinlyStack direction="vertical" gap="m">
              <KinlyStack direction="horizontal" gap="s" wrap>
                <KinlyButton variant="filled" href="/kinly/general">
                  {copy.goKinly}
                </KinlyButton>
              </KinlyStack>
            </KinlyStack>
          </KinlyCard>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
