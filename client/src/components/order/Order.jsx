import styles from './Order.module.css';
import menuItems from '../MenuItems';

export default function Order() {
    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderTitle}>My Order</div>
            <div className={styles.cartContainer}>
                <div className={styles.cartItem}>
                    <img src = {menuItems[0].items[0].img} className={styles.cartItemImg}></img>
                    <div className={styles.cartItemNamePrice}>
                        <span className={styles.cartItemName}>Cappucino</span>
                        <span className={styles.cartItemPrice}>RS 180</span>
                    </div>
                    <div className={styles.cartBtnCont}>
                        <button className={styles.counterBtn}>-</button>
                            <span className={styles.countDisplay}>0</span>
                        <button className={styles.counterBtn}>+</button>
                    </div>
                </div>
            </div>
                <div className={styles.confirmCont}>
                    <div className={styles.priceCont}>Total : RS 810</div>
                    <button className={styles.checkoutBtn}>Confirm</button>
                </div>
        </div>
    )
}