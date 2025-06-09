import styles from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <li className={styles.footItemCont}>
                <span className={styles.footIcon}><i class="fa-solid fa-burger"></i></span>
                <span className={styles.footItem}>Menu</span>
            </li>
            <li className={styles.footItemCont}>
                <span className={styles.footIcon}><i class="fa-solid fa-cart-shopping"></i></span>
                <span className={styles.footItem}>My Order</span>
            </li>
            <li className={styles.footItemCont}>
                <span className={styles.footIcon}><i class="fa-solid fa-file-lines"></i></span>
                <span className={styles.footItem}>My Bill</span>
            </li>
            <li className={styles.footItemCont}>
                <span className={styles.footIcon}><i class="fa-solid fa-clock-rotate-left"></i></span>
                <span className={styles.footItem}>History</span>
            </li>
            <li className={styles.footItemCont}>
                <span className={styles.footIcon}><i class="fa-solid fa-circle-user"></i></span>
                <span className={styles.footItem}>Account</span>
            </li>
        </footer>
    )
}