import styles from "./KinlyShell.module.css";

type Props = {
  children: React.ReactNode;
  as?: "div" | "main" | "section";
};

export function KinlyShell({ children, as: Tag = "div" }: Props) {
  return <Tag className={styles.shell}>{children}</Tag>;
}
