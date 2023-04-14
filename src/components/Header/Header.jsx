import sprite from '../../assets/images/sprite.svg'
import styles from './Header.module.scss'
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary.jsx';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className='container'>
                <nav className={styles.wrapper}>
                    <a
                        className={styles.logo}
                        href='#'
                    >
                        <svg>
                            <use href={sprite + '#logo'}></use>
                        </svg>
                    </a>
                    <div className={styles.button_wrapper}>
                        <ButtonPrimary>Users</ButtonPrimary>
                        <ButtonPrimary>Sign up</ButtonPrimary>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header