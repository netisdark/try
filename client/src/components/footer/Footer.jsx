import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to="/" className={styles.footItemCont}>
                <span className={styles.footIcon}><i className="fa-solid fa-burger"></i></span>
                <span className={styles.footItem}>Menu</span>
            </Link>
            <Link to="/order" className={styles.footItemCont}>
                <span className={styles.footIcon}><i className="fa-solid fa-cart-shopping"></i></span>
                <span className={styles.footItem}>My Order</span>
            </Link>
            <Link to="/bill" className={styles.footItemCont}>
                <span className={styles.footIcon}><i className="fa-solid fa-file-lines"></i></span>
                <span className={styles.footItem}>My Bill</span>
            </Link>
            <Link to="/history" className={styles.footItemCont}>
                <span className={styles.footIcon}><i className="fa-solid fa-clock-rotate-left"></i></span>
                <span className={styles.footItem}>History</span>
            </Link>
            <Link to="/account" className={styles.footItemCont}>
                <span className={styles.footIcon}><i className="fa-solid fa-circle-user"></i></span>
                <span className={styles.footItem}>Account</span>
            </Link>
        </footer>
    );
}
