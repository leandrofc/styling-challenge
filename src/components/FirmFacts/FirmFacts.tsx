import Button from '../Button';
import FirmFactsCard from '../FirmFactsCard';
import styles from './FirmFacts.module.scss';

const FirmFacts = () => {
    return (
        <div className={`${styles['firm-facts']}`}>
            <div className={`${styles['close-container']}`}>
                <img
                    src="./icons/CloseIcon.svg"
                    alt="Close icon"
                    width="44"
                    height="44"
                />
            </div>

            <p className={styles.title}>Firm Facts</p>

            <div className={styles.line} > </div>

            <div className={`${styles['cards-layout']}`}>
                <div className={`${styles.card} ${styles['card-1']}`}>
                    <FirmFactsCard>
                        <Button
                            label="This is a two line button that terminates with anything else"
                            onClick={() => {}}
                            variant="icon"
                        />
                    </FirmFactsCard>
                </div>

                <div className={styles.card}>
                    <FirmFactsCard>
                        <Button
                            label="This is a two line button that terminates with anything else"
                            onClick={() => {}}
                            variant="icon"
                        />
                    </FirmFactsCard>
                </div>

                <div className={styles.card}>
                    <FirmFactsCard>
                        <Button
                            label="This is a one line button"
                            onClick={() => {}}
                        />
                    </FirmFactsCard>
                </div>

                <div className={styles.card}>
                    <FirmFactsCard>
                        <Button
                            label="This is a two line button that terminates with anything else"
                            onClick={() => {}}
                            variant="icon"
                        />
                    </FirmFactsCard>
                </div>

                <div className={styles.card}>
                    <FirmFactsCard childrenPosition='top'>
                        <Button
                            label="This is a two line button that terminates with anything else"
                            onClick={() => {}}
                            variant="icon"
                        />
                    </FirmFactsCard>
                </div>

                <div className={styles.card}>
                    <FirmFactsCard disabled childrenPosition='top'>
                        <Button
                            label="This is a two line button that terminates with anything else"
                            onClick={() => {}}
                            variant="icon"
                            disabled
                        />
                    </FirmFactsCard>
                </div>

                <div className={styles.card}>
                    <FirmFactsCard
                        variant='border'
                        childrenPosition='top'
                    >
                        <Button
                            label="This is a two line button that terminates with anything else"
                            onClick={() => {}}
                            variant="icon"
                        />
                    </FirmFactsCard>
                </div>
            </div>
        </div>
  );
};

export default FirmFacts;
