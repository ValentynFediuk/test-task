import clsx from 'clsx'
import styles from './Button.module.scss'

export const Button = ({
  children,
  typeBtn,
  appearance,
  loadingData,
  onClick,
  text,
  className,
  ...props
}) => {

  const link = `#${text.replace(/\s+/g, '').toLowerCase()}`;

  const classNameBuilder = clsx(styles.button, className, {
    [styles.primary]: appearance === 'primary',
    [styles.disabled]: appearance === 'disabled'
  })

  const buttonBuilder = () => {
    switch (typeBtn) {
      case 'button':
        return (
          <a href={link} className={classNameBuilder}
          {...props}>
            {text}
          </a>
        )
        case 'submit':
        return (
          <button type='submit' className={classNameBuilder} onClick={onClick} {...props}>
            {text}
          </button>
        )
    }
  }

  return buttonBuilder()
};
