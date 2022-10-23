import styles from './button-primary.module.scss'
import classLister from 'css-module-class-lister/src';

const classes = classLister(styles);

const ButtonPrimary = ({children, disabled}) => {

    return (
        <button
            disabled={disabled}
            className={disabled ? classes('button', 'button_disabled') : styles.button}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary