import { useState, React } from 'react'
import styles from './User.module.scss'
import photoCover from 'assets/images/photo-cover.svg'

export function User({ name, email, phone, photo, position }) {
  const [tooltip, setTooltip] = useState(false)

  const onMouseEnterHandler = () => {
    setTooltip(true)
  }
  const onMouseLeaveHandler = () => {
    setTooltip(false)
  }

  return (
    <div className={styles.user}>
      <img
        src={photo}
        alt="Avatar"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = photoCover
        }}
      />
      <p>{position}</p>
      <p>{name}</p>
      <a
        onMouseEnter={() => onMouseEnterHandler()}
        onMouseLeave={() => onMouseLeaveHandler()}
        href="mailto:frontend_develop@gmail.com"
      >
        {email}
      </a>
      {tooltip && <p className={styles.email_tooltip}>{email}</p>}
      <a href="tel:+38(098)2784424">{phone}</a>
    </div>
  )
}
