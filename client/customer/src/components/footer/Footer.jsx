import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/CartContext';
import { useTable } from '../TableContexts';

export default function Footer() {
  const { totalQuantity  } = useCart();
  const { table } = useTable();
  return (
    <footer className={styles.footer}>
      <Link to={table ? `/customer/?table=${table}` : 'customer/'} className={styles.footItemCont}>
        <span className={styles.footIcon}><i className="fa-solid fa-burger"></i></span>
        <span className={styles.footItem}>Menu</span>
      </Link>
      <Link to={table ? `/customer/order?table=${table}` : 'customer/order'} className={styles.footItemCont}>
        <span className={styles.footIcon}>
          <i className="fa-solid fa-cart-shopping"></i>
          {totalQuantity > 0 && <span className={styles.cartQty}>{totalQuantity}</span>}
        </span>
        <span className={styles.footItem}>My Order</span>
      </Link>
      <Link to={table ? `/customer/bill?table=${table}` : 'customer/bill'} className={styles.footItemCont}>
        <span className={styles.footIcon}><i className="fa-solid fa-file-lines"></i></span>
        <span className={styles.footItem}>My Bill</span>
      </Link>
      <Link to="/customer/history" className={styles.footItemCont}>
        <span className={styles.footIcon}><i className="fa-solid fa-clock-rotate-left"></i></span>
        <span className={styles.footItem}>History</span>
      </Link>
      <Link to="/customer/account" className={styles.footItemCont}>
        <span className={styles.footIcon}><i className="fa-solid fa-circle-user"></i></span>
        <span className={styles.footItem}>Account</span>
      </Link>
    </footer>
  );
}
