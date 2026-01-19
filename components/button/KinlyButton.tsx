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

export function KinlyButton(props: ButtonProps | LinkProps) {
  const {
    variant = "filled",
    children,
    className,
    disabled,
    ...rest
  } = props as any;

  const variantClass =
    variant === "filled"
      ? styles.filled
      : variant === "outlined"
      ? styles.outlined
      : styles.text;

  const cn = [styles.base, variantClass, className].filter(Boolean).join(" ");

  // Link mode
  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        href={props.href}
        className={cn}
        aria-disabled={disabled ? "true" : undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </Link>
    );
  }

  // Button mode
  return (
    <button
      type="button"
      className={cn}
      disabled={disabled}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
