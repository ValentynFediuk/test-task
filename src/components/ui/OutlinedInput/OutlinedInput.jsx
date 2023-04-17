import clsx from 'clsx'
import React from 'react'
import styles from './Outlined-input.module.scss'

export function OutlinedInput({
  error,
  errorMessage,
  label,
  type,
  value,
  helperText,
  ...props
}) {
  return (
    <label
      className={clsx(
        styles.wrapper,
        error && styles.error,
        value && styles.filled
      )}
      htmlFor={label}
    >
      <input
        id={label}
        placeholder={' '}
        type={type}
        value={value}
        {...props}
      />
      <span>{label}</span>
      {error && <p className={styles.error_text}>{errorMessage}</p>}
      {!error && <p className={styles.helper_text}>{helperText}</p>}
    </label>
  )
}
