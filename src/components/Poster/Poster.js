import styles from './Poster.module.css';

const Poster = () => (
    <div className={styles.poster}>
        <img src='/img/poster3.jpg' alt='main info' className={styles.image}/>
        <header className={styles.poster_text}>
            <h1>Main info</h1>
            <p>Some additional text</p>
        </header>
    </div>
);

export default Poster;