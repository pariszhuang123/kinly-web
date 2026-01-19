import styles from "./KinlyText.module.css";

type Variant = "bodyLarge" | "bodyMedium" | "bodySmall" | "labelMedium" | "labelSmall";
type Tone = "default" | "muted" | "danger" | "success" | "warning" | "info";
type As = "p" | "span" | "div";

interface KinlyTextProps {
  variant: Variant;
  tone?: Tone;
  as?: As;
  children: React.ReactNode;
}

export function KinlyText({
  variant,
  tone = "default",
  as: Component = "p",
  children,
}: KinlyTextProps) {
  return (
    <Component className={`${styles.text} ${styles[variant]} ${styles[tone]}`}>
      {children}
    </Component>
  );
}
