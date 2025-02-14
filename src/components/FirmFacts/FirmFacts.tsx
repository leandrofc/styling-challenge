import Button from '../Button';
import FirmFactsCard from '../FirmFactsCard';
import styles from './FirmFacts.module.scss';
import { FirmFactsComponentProps } from './FirmFacts.types';

const FirmFacts = ({ data }: FirmFactsComponentProps) => {
    return (
        <div className={`${styles['firm-facts']}`}>
            <div className={`${styles['firm-facts--close-container']}`}>
                <img
                    src="./icons/CloseIcon.svg"
                    alt="Close icon"
                    className={`${styles['firm-facts--close-image']}`}
                    onClick={() => alert('Close Icon clicked!') }
                />
            </div>

            <h1 className={`${styles['firm-facts--title']}`}>Firm Facts</h1>

            <div className={`${styles['firm-facts--line']}`} > </div>

            <div className={`${styles['firm-facts--cards-layout']}`}>
                {
                    data.map(({ buttonProps, cardProps, isTwoRows, index}) => {

                        return (
                            <div className={`
                                    ${styles['firm-facts--card']}
                                    ${isTwoRows && styles['firm-facts--card-with-two-rows']}
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
