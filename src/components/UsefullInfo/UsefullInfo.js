import styles from './UsefullInfo.module.css';

import { FaMoneyBillWave, FaCity, FaLanguage, FaClock, FaMountain } from 'react-icons/fa';
import { GiAtSea } from 'react-icons/gi';

const UsefullInfo = () => (
    <section className={styles.info_section}>
        <p className={styles.text_div}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <img className={styles.img} src='/img/tbilisi.jpg' alt='general img'/>
        <h2 className={styles.main_header}>MAIN HEADER</h2>
        <p className={styles.main_info}>General information about page topic</p>
        <ul className={styles.facts}>
            <li>
                Capital <FaCity />:
                <br /> 
                <span>Tbilisi</span></li>
            <li>
                Currency <FaMoneyBillWave />:
                <br />
                <span>Georgian Lari</span>
            </li>
            <li>
                Language <FaLanguage />:
                <br />
                <span>Georgian</span>
            </li>
            <li>
                Time Zone <FaClock />:
                <br />
                <span>GMT +4</span>
            </li>
            <li>
                Sea <GiAtSea />:
                <br />
                <span>Black Sea</span>
            </li>
            <li>
                Mountains <FaMountain />:
                <br />
                <span>Caucasus</span>
            </li>
        </ul>
        <div className={styles.food_imgs} alt='special food'>
            <img className={styles.food_img} alt='' src='/img/food1.jpg'/>
            <img className={styles.food_img} alt='' src='/img/food2.jpg'/>
        </div>
    </section>
);

export default UsefullInfo;