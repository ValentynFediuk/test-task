import styles from './outlined-input.module.scss'

export const OutlinedInput = ({ error, label, type, helperText, ...props }) => (
        <label className={styles.wrapper}>
            <input placeholder={" "} type={type} {...props} />
            <span>{label}</span>
            {error && <p className={styles.error_text}>{error.message}</p>}
            <p className={styles.helper_text}>{helperText}</p>
        </label>
);