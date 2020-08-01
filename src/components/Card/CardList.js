import React from 'react';
import Card from './Card';

import styles from './CardList.module.css';

const CardList = props => {
    return (
        <div className={styles.card_list}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardList;