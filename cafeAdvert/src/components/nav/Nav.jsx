import { NavLink } from 'react-router';
import styles from './Nav.module.css';


export default function Nav(){
    return (
    <div className={styles.navCont}>
        <div className={styles.navBar}>
            <div className={styles.navLogo}>Cafeto Italio</div>
            <div className={styles.navItemscont}>
                <NavLink className={styles.navItem}>Menu</NavLink>
                <NavLink className={styles.navItem}>About</NavLink>
                <NavLink className={styles.navItem}>Contact</NavLink>
            </div>
        </div>
        <div className={styles.spacer}></div>
    </div>
    )
}