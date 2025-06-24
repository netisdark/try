import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={styles.navCont}>
            <div className={styles.cafeName}>Cafeto Italio</div>

            <div className={styles.navLinksCont}>
                <NavLink
                    to='/frontdesk/tables'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i className="fa-solid fa-couch"></i>
                    <span className={styles.navItem}>Tables</span>
                </NavLink>

                <NavLink
                    to='/frontdesk/orders'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i className="fa-solid fa-list-ul"></i>
                    <span className={styles.navItem}>Orders</span>
                </NavLink>

                <NavLink
                    to='/frontdesk/bill'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i className="fa-solid fa-money-check-dollar"></i>
                    <span className={styles.navItem}>Bill</span>
                </NavLink>

                <NavLink
                    to='/frontdesk/menu'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i className="fa-solid fa-file-lines"></i>
                    <span className={styles.navItem}>Menu</span>
                </NavLink>

                <NavLink
                    to='/frontdesk/payments'
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    <i className="fa-solid fa-file-lines"></i>
                    <span className={styles.navItem}>Payments</span>
                </NavLink>
            </div>
        </nav>
    );
}
