import styles from './Nav.module.css';
import { NavLink } from 'react-router';


export default function Nav(){
    return( 
    <nav className={styles.navCont}>

        <div className={styles.cafeNameCont}>
            <span className={styles.cafeName}>Cafeto Italio</span>
        </div>

        <div className={styles.navLinksCont}>
            <NavLink to='/' className={styles.navLink}><i class="fa-solid fa-couch"></i><span className={styles.navItem}>Tables</span></NavLink>
            <NavLink to='/orders' className={styles.navLink}><i class="fa-solid fa-list-ul"></i><span className={styles.navItem}>Orders</span></NavLink>
            <NavLink to='/bill' className={styles.navLink}><i class="fa-solid fa-money-check-dollar"></i><span className={styles.navItem}>Bills</span></NavLink>
            <NavLink to='/menu' className={styles.navLink}><i class="fa-solid fa-file-lines"></i><span className={styles.navItem}>Menu</span></NavLink>
        </div>

        <div className={styles.logoutCont}>
            <button className={styles.logoutBtn}><i class="fa-solid fa-arrow-right-from-bracket"></i><span className={styles.logout}>Logout</span></button>
        </div>
    </nav>
    )
}