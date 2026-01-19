import styles from "./KinlyHeading.module.css";

type HeadingLevel = 1 | 2 | 3;
type HeadingTag = "h1" | "h2" | "h3";

interface KinlyHeadingProps {
  level: HeadingLevel;
  as?: HeadingTag;
  children: React.ReactNode;
}

const levelToTag: Record<HeadingLevel, HeadingTag> = {
  1: "h1",
  2: "h2",
  3: "h3",
};

const levelToClass: Record<HeadingLevel, string> = {
  1: styles.level1,
  2: styles.level2,
  3: styles.level3,
};

export function KinlyHeading({ level, as, children }: KinlyHeadingProps) {
  const Tag = as ?? levelToTag[level];

  return (
    <Tag className={`${styles.heading} ${levelToClass[level]}`}>{children}</Tag>
  );
}
