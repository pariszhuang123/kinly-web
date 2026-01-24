import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./KinlyInput.module.css";

type KinlyInputProps = {
  label?: string;
  hint?: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export function KinlyInput({
  label,
  hint,
  error,
  id,
  required,
  ...rest
}: KinlyInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={styles.field} htmlFor={inputId}>
      {(label || hint) && (
        <div className={styles.labelRow}>
          {label && (
            <span className={styles.label}>
              {label}
              {required ? " *" : ""}
            </span>
          )}
          {hint && <span className={styles.hint}>{hint}</span>}
        </div>
      )}

      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          {...rest}
        />
      </div>

      {error ? (
        <span id={`${inputId}-error`} className={styles.errorMessage}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
