import styles from "./KinlyStack.module.css";

type KinlyStackDirection = "vertical" | "horizontal";
type KinlyStackGap = "xxs" | "xs" | "s" | "m" | "l" | "xl";
type KinlyStackAlign = "start" | "center" | "end" | "stretch";
type KinlyStackJustify = "start" | "center" | "end" | "between" | "around";
type KinlyStackAs = "div" | "section" | "nav" | "ul";

type KinlyStackProps = {
  direction: KinlyStackDirection;
  gap: KinlyStackGap;
  align?: KinlyStackAlign;
  justify?: KinlyStackJustify;
  wrap?: boolean;
  children: React.ReactNode;
  as?: KinlyStackAs;
};

export function KinlyStack({
  direction,
  gap,
  align,
  justify,
  wrap,
  children,
  as: Component = "div",
}: KinlyStackProps) {
  const cn = [
    styles.base,
    styles[direction],
    styles[`gap-${gap}`],
    align && styles[`align-${align}`],
    justify && styles[`justify-${justify}`],
    wrap && styles.wrap,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={cn}>{children}</Component>;
}
