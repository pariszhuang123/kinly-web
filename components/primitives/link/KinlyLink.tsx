import Link from "next/link";
import styles from "./KinlyLink.module.css";

type KinlyLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function KinlyLink({ href, children, external }: KinlyLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
