import { NavLink } from 'react-router';
import styles from './Nav.module.css';


export default function Nav(){
    return (
    <div className={styles.navCont}>
        <div className={styles.navBar}>
            <NavLink to='/' className={styles.navLogo}>Cafeto Italio</NavLink>
            <div className={styles.navItemscont}>
                <NavLink to='/menu' className={styles.navItem}>Menu</NavLink>
                <NavLink to='about' className={styles.navItem}>About</NavLink>
                <NavLink to='/contact' className={styles.navItem}>Contact</NavLink>
            </div>
        </div>
        <div className={styles.spacer}></div>
    </div>
    )
}