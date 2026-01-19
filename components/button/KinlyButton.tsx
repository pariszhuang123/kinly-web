import Link from "next/link";
import styles from "./KinlyButton.module.css";

type KinlyButtonVariant = "filled" | "outlined" | "text";

type CommonProps = {
  variant?: KinlyButtonVariant;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
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

  const variantClass =
    variant === "filled"
      ? styles.filled
      : variant === "outlined"
        ? styles.outlined
        : styles.text;

  const cn = [styles.base, variantClass, props.className]
    .filter(Boolean)
    .join(" ");

  const disabled = Boolean(props.disabled);

  // Link mode
  if (isLinkProps(props)) {
    const { href, children, target, rel } = props;

    return (
      <Link
        href={href}
        className={cn}
        target={target}
        rel={rel}
        aria-disabled={disabled ? "true" : undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={
          disabled
            ? (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()
            : undefined
        }
      >
        {children}
      </Link>
    );
  }

  // Button mode
  const { children, variant: _variant, className: _className, disabled: _disabled, ...rest } = props;

  return (
    <button type="button" className={cn} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
