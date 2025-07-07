import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={styles.navCont}>
            <div className={styles.cafeName}>Cafeto Italio</div>

            <div className={styles.navLinksCont}>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i class="fa-solid fa-chart-simple"></i>
                    <span className={styles.navItem}>Dashboard</span>
                </NavLink>

                <NavLink
                    to='/payments'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i class="fa-solid fa-money-bill-transfer"></i>
                    <span className={styles.navItem}>Payments</span>
                </NavLink>

                <NavLink
                    to='/account'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i class="fa-solid fa-circle-user"></i>
                    <span className={styles.navItem}>Account</span>
                </NavLink>
            </div>
        </nav>
    );
}
