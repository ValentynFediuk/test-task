import styles from './Button-primary.module.scss'
import clsx from 'clsx'

const ButtonPrimary = ({children, onClick, disabled, type='button'}) => {

    return (
        <button
            className={clsx(styles.button, disabled && styles.button_disabled)}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary