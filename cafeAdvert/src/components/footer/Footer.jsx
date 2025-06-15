import styles from './Footer.module.css';
import {NavLink} from 'react-router'


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
                    <NavLink to='/menu' className={styles.footItem}>Menu</NavLink>
                    <NavLink to='/about' className={styles.footItem}>About</NavLink>
                    <NavLink to='/contact' className={styles.footItem}>Contact</NavLink>
                </ul>
            </div>
            <div className={styles.footItemsCont}>
                <div className={styles.itemTitle}>Get in touch</div>
                <ul className={styles.footItems}>
                    <li className={styles.footItem}>+977 9812345678</li>
                    <li className={styles.footItem}>cafe@gmail.com</li>
                    <li className={styles.footItem}>Kathmandu</li>
                </ul>
            </div>
        </footer>
    )
}