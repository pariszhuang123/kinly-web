import styles from "./KinlyCard.module.css";

type KinlyCardVariant = "action" | "section";

type Props = {
  variant?: KinlyCardVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function KinlyCard({
  variant = "action",
  title,
  children,
  className,
}: Props) {
  const variantClass =
    variant === "section" ? styles.section : styles.action;

  const cn = [styles.base, variantClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cn}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
}
