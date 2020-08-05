import styles from './TopCountries.module.css';

const TopCountries = () => (
    <section className={styles.top_countries_section}>
        <h2>Top Countries</h2>
        <div className={styles.top_list}>
            <div className={styles.country}></div>
            <div className={styles.country}></div>
            <div className={styles.country}></div>
            <div className={styles.country}></div>
        </div>
        
    </section>
);

export default TopCountries;