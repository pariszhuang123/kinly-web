import styles from "./KinlyCard.module.css";

type KinlyCardVariant = "action" | "section";

type Props = {
  variant?: KinlyCardVariant;
  children: React.ReactNode;
  className?: string;
};

export function KinlyCard({ variant = "action", children, className }: Props) {
  const variantClass =
    variant === "section" ? styles.section : styles.action;

  const cn = [styles.base, variantClass, className].filter(Boolean).join(" ");

  return <div className={cn}>{children}</div>;
}
