import styles from './Footer.module.css';



export default function Footer() {
    return (
        <footer>
            <div className={styles.footItemsCont}>
                <div className={styles.cafeName}>Cafeto Italio</div>
                <div className={styles.nameDesc}>&copy;All rights reserved</div>
            </div>
            <div className={styles.footItemsCont}>
                <div className={styles.itemTitle}>Quick Links</div>
                <ul className={styles.footItems}>
                    <li className={styles.footItem}>Menu</li>
                    <li className={styles.footItem}>About</li>
                    <li className={styles.footItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.footItemsCont}>
                <div className={styles.itemTitle}>Get in touch</div>
                <ul className={styles.footItems}>
                    <li className={styles.footItem}>+977 9812345678</li>
                    <li className={styles.footItem}>cafe@gmail.com</li>
                </ul>
            </div>
        </footer>
    )
}