import React from 'react'
import styles from './SuccessModal.module.scss'
import successImage from 'assets/images/success-image.svg'
import { Title } from 'components'

export function SuccessModal() {
  return (
    <div className={styles.wrapper}>
      <Title typeTitle="h2" color="black" className={styles.title}>
        User successfully registered
      </Title>
      <img src={successImage} alt="Success" />
    </div>
  )
}
