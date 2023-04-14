import styles from './User.module.scss'

const Hero = ({ name, email, phone, photo, position }) => {

    return (
        <div className={styles.user}>
            <img src={`${photo}`} alt='Avatar'/>
            <p>{position}</p>
            <p>{name}</p>
            <a href='mailto:frontend_develop@gmail.com'>{email}</a>
            <a href='tel:+38(098)2784424'>{phone}</a>
        </div>
    )
}

export default Hero