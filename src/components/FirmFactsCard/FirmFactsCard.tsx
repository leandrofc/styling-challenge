import { useState } from 'react';
import styles from './FirmFactsCard.module.scss';
import { FirmFactsCardProps } from './FirmFactsCard.types';
import React from 'react';

const FirmFactsCard = ({ children, variant = 'default', disabled, childrenPosition = 'center' }: FirmFactsCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const isDefaultVariant = variant === "default";

    return (
        <div className={`
                ${styles['firm-facts-card']}
                ${!disabled && isHovered && styles[`firm-facts-card--${variant}--isHovered`]}
                ${disabled && styles['firm-facts-card--disableHover']}
                ${styles[`firm-facts-card--${childrenPosition}`]}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {React.Children.map(children, (child) => {
                return React.cloneElement(
                    child as React.ReactElement<any>, {
                        isHovered: isHovered && !disabled,
                        hasborder: isDefaultVariant
                    }
                );
            })}
        </div>
  );
};

export default FirmFactsCard;
