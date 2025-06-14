import { NavLink } from 'react-router';
import styles from './Nav.module.css';


export default function Nav(){
    return (
    <nav className={styles.navCont}>
        <div className={styles.navBar}>
            <div className={styles.navLogo}>Cafeto Italio</div>
            <div className={styles.navItemscont}>
                <div className={styles.navItem}>Menu</div>
                <div className={styles.navItem}>About</div>
                <div className={styles.navItem}>Contact</div>
            </div>
        </div>
        <div className={styles.spacer}></div>
    </nav>
    )
}