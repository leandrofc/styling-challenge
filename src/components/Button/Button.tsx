import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button = ({ label, onClick, disabled, variant = 'default', isHovered, hasborder }: ButtonProps) => {
    const isIconVariant = variant === "icon";

    return (
        <button
            className={`
                ${styles.button}
                ${styles[`button--${variant}`]}
                ${disabled && styles["button--disabled"]}
                ${isHovered && styles["button--hovered"]}
                ${isHovered && hasborder && styles["button--border"]}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            { isIconVariant && (
                <img
                    src="./icons/SearchIcon.svg"
                    alt="Search icon"
                    className={styles["button__icon"]}
                />
            )}
            <span className={styles["button__label"]} >
                {label}
            </span>
        </button>
  );
};

export default Button;
