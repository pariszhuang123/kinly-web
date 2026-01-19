import Link from "next/link";
import styles from "./KinlyButton.module.css";

type KinlyButtonVariant = "filled" | "outlined" | "ghost";
type KinlyButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: KinlyButtonVariant;
  size?: KinlyButtonSize;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

function isLinkProps(p: ButtonProps | LinkProps): p is LinkProps {
  return "href" in p && typeof (p as LinkProps).href === "string";
}

export function KinlyButton(props: ButtonProps | LinkProps) {
  const variant = props.variant ?? "filled";
  const size = props.size ?? "md";
  const isLoading = props.isLoading ?? false;

  const variantClass = styles[variant];
  const sizeClass = styles[size];

  const cn = [styles.base, variantClass, sizeClass, isLoading && styles.loading]
    .filter(Boolean)
    .join(" ");

  const isDisabled = Boolean(props.disabled) || isLoading;

  if (isLinkProps(props)) {
    const { href, children, target, rel } = props;

    return (
      <Link
        href={href}
        className={cn}
        target={target}
        rel={rel}
        aria-disabled={isDisabled ? "true" : undefined}
        aria-busy={isLoading ? "true" : undefined}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={
          isDisabled
            ? (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()
            : undefined
        }
      >
        {isLoading && <span className={styles.spinner} aria-hidden="true" />}
        <span className={isLoading ? styles.contentHidden : undefined}>
          {children}
        </span>
      </Link>
    );
  }

  const {
    children,
    variant: _variant,
    size: _size,
    disabled: _disabled,
    isLoading: _isLoading,
    ...rest
  } = props;

  return (
    <button type="button" className={cn} disabled={isDisabled} aria-busy={isLoading ? "true" : undefined} {...rest}>
      {isLoading && <span className={styles.spinner} aria-hidden="true" />}
      <span className={isLoading ? styles.contentHidden : undefined}>
        {children}
      </span>
    </button>
  );
}
