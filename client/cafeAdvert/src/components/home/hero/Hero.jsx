import styles from './Hero.module.css';
import { NavLink } from 'react-router';

export default function Hero(){
    return (
        <div className={styles.hero}>
            <div className={styles.heroLeft}>
                <div className={styles.cafeImg}></div>
            </div>
            <div className={styles.heroRight}>
            <div className={styles.heroTitle}>Explore Flavors From Around The World.</div>
                <div className={styles.heroDesc}>Charming café offering artisan coffee, homemade pastries, and a peaceful spot to unwind daily.</div>
                <NavLink to='/menu' className={styles.heroBtn}>Browse Menu</NavLink>
            </div>
        </div>
    )
}