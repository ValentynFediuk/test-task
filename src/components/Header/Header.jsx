import sprite from '../../assets/images/sprite.svg'
import styles from './Header.module.scss'
import {Button} from 'components'

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
                        <Button link='users' typeBtn='button' appearance='primary' text='Users' />
                        <Button link='singin' typeBtn='button' appearance='primary' text='Sign up' />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header