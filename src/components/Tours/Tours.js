import CardList from '../Card/CardList';

import styles from './Tours.module.css';

const Tours = () => (
    <section className={styles.tours}>
        <h2 className={styles.best_offers}>Best offers:</h2>
        <CardList />
    </section>
);

export default Tours;