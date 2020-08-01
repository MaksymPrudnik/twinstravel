import React from 'react';
import { FaCalendarCheck, FaFlag, FaCity } from 'react-icons/fa'

import styles from './Card.module.css';

const Card = props => (
    <div className={styles.card}>
        <img 
            src="https://s27363.pcdn.co/wp-content/uploads/2018/05/Vernazza.jpg.optimal.jpg"
            alt=""
        />
        <div className={styles.short_info}>
            <div><FaCalendarCheck />10 days</div>
            <div><FaFlag /> 1 country</div>
            <div><FaCity /> 3 cities</div>
        </div>
        <h2 className={styles.card_title}>Best of Italy</h2>
        <div className={styles.price_action}>
            <span className={styles.card_price}>1000$</span>
            <button className={styles.card_action}>VIEW</button>
        </div>
    </div>
);

export default Card;