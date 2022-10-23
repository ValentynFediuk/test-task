import styles from './user.module.scss'

const Hero = () => {

    return (
        <div className={styles.user}>
            <img src='src/assets/images/photo-cover.svg' alt='Avatar'/>
            <p>Leading specialist of the department of cent Leading specialist of the department of cent</p>
            <p>Salvador Stewart Flynn Thomas Salva Salve...</p>
            <a href='mailto:frontend_develop@gmail.com'>frontend_develop@gmail.com</a>
            <a href='tel:+38(098)2784424'>+38 (098) 278 44 24</a>
        </div>
    )
}

export default Hero