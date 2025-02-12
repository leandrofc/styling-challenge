import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button = ({ label, onClick, disabled, variant = 'default' }: ButtonProps) => {
    const isIconVariant = variant === "icon";

    return (
        <button
            className={`
                ${styles.button}
                ${styles[`button--${variant}`]}
                ${disabled && styles["button--disabled"]}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            { isIconVariant && (
                <img
                    src="./icons/SearchIcon.svg"
                    alt="Search icon"
                    width="22"
                    height="22"
                />
            )}
            <span className={styles["button__label"]} >
                {label}
            </span>
        </button>
  );
};

export default Button;
