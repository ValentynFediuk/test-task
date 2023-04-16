import styles from './Outlined-input.module.scss'
import clsx from 'clsx'

export const OutlinedInput = ({ error, errorMessage, label, type, value, helperText, ...props }) => (
    <label className={clsx(styles.wrapper, error && styles.error, value && styles.filled) }>
        <input placeholder={" "} type={type} value={value} {...props} />
        <span>{label}</span>
        {error
         &&
         <p className={styles.error_text}>{errorMessage}</p>
        }
        {!error
         &&
         <p className={styles.helper_text}>{helperText}</p>
        }
    </label>
);