import styles from "./KinlyDivider.module.css";

type KinlyDividerDirection = "horizontal" | "vertical";
type KinlyDividerSpacing = "s" | "m" | "l";

type KinlyDividerProps = {
  direction?: KinlyDividerDirection;
  spacing?: KinlyDividerSpacing;
};

const spacingMap: Record<KinlyDividerSpacing, string> = {
  s: styles.spacingS,
  m: styles.spacingM,
  l: styles.spacingL,
};

export function KinlyDivider({
  direction = "horizontal",
  spacing = "m",
}: KinlyDividerProps) {
  const cn = [styles.base, styles[direction], spacingMap[spacing]].join(" ");

  return (
    <hr
      className={cn}
      aria-orientation={direction}
    />
  );
}
