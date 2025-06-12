import styles from './Order.module.css';
import { useCart } from '../cart/CartContext';


export default function Order() {
  const { setOrderPlaced } = useCart();

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };


  const { cartItems, incrementItem, decrementItem, getItemDetails } = useCart();

  const cartEntries = Object.entries(cartItems);
  const total = cartEntries.reduce((sum, [key, count]) => {
    const item = getItemDetails(key);
    return item ? sum + item.price * count : sum;
  }, 0);

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderTitle}>My Order</div>

      <div className={styles.cartContainer}>
        {cartEntries.length === 0 ? (
          <div className={styles.emptyCartCont}>
              <div className={styles.emptyCartImg}></div>
              <div className={styles.emptyCartText}>No Items Added To Cart Yet.</div>
          </div>
        ) : (
          cartEntries.map(([key, count]) => {
            const item = getItemDetails(key);
            if (!item) return null;

            return (
              <div className={styles.cartItem} key={key}>
                <img src={item.img} alt={item.name} className={styles.cartItemImg} />
                <div className={styles.cartItemNamePrice}>
                  <span className={styles.cartItemName}>{item.name}</span>
                  <span className={styles.cartItemPrice}>RS {item.price}</span>
                </div>
                <div className={styles.cartBtnCont}>
                  <button onClick={() => decrementItem(key)} className={styles.counterBtn}>-</button>
                  <span className={styles.countDisplay}>{count}</span>
                  <button onClick={() => incrementItem(key)} className={styles.counterBtn}>+</button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {cartEntries.length > 0 && (
        <div className={styles.confirmCont}>
          <div className={styles.priceCont}>Total : RS {total}</div>
          <button onClick={handlePlaceOrder} className={styles.checkoutBtn}>Place Order</button>
        </div>
      )}
    </div>
  );
}
