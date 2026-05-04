import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyText } from "../primitives/text/KinlyText";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type StoryBlockProps = {
  title: string;
  body: string;
  eyebrow?: string;
};

export function StoryBlock({ title, body, eyebrow }: StoryBlockProps) {
  return (
    <KinlyCard variant="surfaceContainerHigh">
      <div className={`${styles.storyBody} ${styles.storyCard}`}>
        {eyebrow ? (
          <KinlyText variant="labelMedium" tone="muted" as="div">
            {eyebrow}
          </KinlyText>
        ) : null}
        <KinlyHeading level={3}>{title}</KinlyHeading>
        <KinlyText variant="bodyMedium">{body}</KinlyText>
      </div>
    </KinlyCard>
  );
}
