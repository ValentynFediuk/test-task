import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.scss'

export function Button({ typeBtn, appearance, onClick, text, className }) {
  const link = `#${text.replace(/\s+/g, '').toLowerCase()}`

  const classNameBuilder = clsx(styles.button, className, {
    [styles.primary]: appearance === 'primary',
    [styles.disabled]: appearance === 'disabled',
  })

  const buttonBuilder = () => {
    switch (typeBtn) {
      case 'button':
        return (
          <a href={link} className={classNameBuilder}>
            {text}
          </a>
        )
      case 'submit':
        return (
          <button type="submit" className={classNameBuilder} onClick={onClick}>
            {text}
          </button>
        )
      default:
        return (
          <a href={link} className={classNameBuilder}>
            {text}
          </a>
        )
    }
  }

  return buttonBuilder()
}
