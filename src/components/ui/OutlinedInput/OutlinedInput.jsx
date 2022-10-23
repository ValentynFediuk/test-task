import styles from './outlined-input.module.scss'

export const OutlinedInput = ({ error, label, type, children, ...props }) => (
        <label className={styles.wrapper}>
            <input placeholder={" "} type={type} {...props} />
            <span>{label}</span>
            {error && <p className={styles.input__error}>{error.message}</p>}
            {children}
        </label>
);