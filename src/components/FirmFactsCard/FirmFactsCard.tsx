import { useState } from 'react';
import styles from './FirmFactsCard.module.scss';
import { FirmFactsCardProps } from './FirmFactsCard.types';
import React from 'react';

const FirmFactsCard = ({ children, variant = 'default' }: FirmFactsCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const isDefaultVariant = variant === "default";

    return (
        <div className={`
                ${styles['firm-facts-card']}
                ${styles[`firm-facts-card--${variant}`]}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {React.Children.map(children, (child) => {
                return React.cloneElement(
                    child as React.ReactElement<any>, { isHovered, hasborder: isDefaultVariant }
                );
            })}
        </div>
  );
};

export default FirmFactsCard;
