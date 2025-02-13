import Button from '../Button';
import FirmFactsCard from '../FirmFactsCard';
import styles from './FirmFacts.module.scss';
import { FirmFactsComponentProps } from './FirmFacts.types';

const FirmFacts = ({ data }: FirmFactsComponentProps) => {
    return (
        <div className={`${styles['firm-facts']}`}>
            <div className={`${styles['close-container']}`}>
                <img
                    src="./icons/CloseIcon.svg"
                    alt="Close icon"
                    className={`${styles['close-image']}`}
                    onClick={() => alert('close Icon clicked!') }
                />
            </div>

            <h1 className={styles.title}>Firm Facts</h1>

            <div className={styles.line} > </div>

            <div className={`${styles['cards-layout']}`}>
                {
                    data.map(({ buttonProps, cardProps, isTwoRows, index}) => {

                        return (
                            <div className={`
                                    ${styles.card}
                                    ${isTwoRows && styles['card-1']}
                                `}
                                key={index}
                            >
                                <FirmFactsCard {...cardProps}>
                                    <Button {...buttonProps} />
                                </FirmFactsCard>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
  );
};

export default FirmFacts;
