import clsx from 'clsx'
import { React } from 'react'
import styles from './Title.module.scss'

export const Title = ({ children, color, typeTitle, className, ...props }) => {
  const classNameBuilder = clsx(styles.title, className, {
    [styles.white]: color === 'white',
    [styles.black]: color === 'black',
  })

  const titleBuilder = () => {
    switch (typeTitle) {
      case 'h1':
        return (
          <h1 className={classNameBuilder} {...props}>
            {children}
          </h1>
        )
      case 'h2':
        return (
          <h2 className={classNameBuilder} {...props}>
            {children}
          </h2>
        )
      default:
        return (
          <h1 className={classNameBuilder} {...props}>
            {children}
          </h1>
        )
    }
  }

  return titleBuilder()
}
