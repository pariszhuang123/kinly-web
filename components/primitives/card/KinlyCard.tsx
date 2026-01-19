import styles from "./KinlyCard.module.css";

type KinlyCardVariant = "surface" | "surfaceContainer" | "surfaceContainerHigh";

type Props = {
  variant?: KinlyCardVariant;
  children: React.ReactNode;
};

export function KinlyCard({
  variant = "surface",
  children,
}: Props) {
  const variantClass = styles[variant];

  return (
    <div className={`${styles.base} ${variantClass}`}>
      {children}
    </div>
  );
}
