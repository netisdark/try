import styles from './Bill.module.css';
import { useCart } from '../cart/CartContext';
import { useState } from 'react';

export default function Bill() {
  const { lastPlacedItems, getItemDetails, orderPlaced } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const billItems = Object.entries(lastPlacedItems).map(([itemKey, quantity]) => {
    const item = getItemDetails(itemKey);
    const subtotal = item ? item.price * quantity : 0;
    return {
      name: item?.name || 'Unknown',
      quantity,
      subtotal
    };
  });

  const total = billItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className={styles.billWrapper}>
      <div className={styles.orderTitle}>My Bill</div>
      {orderPlaced ? (
        <div className={styles.billCont}>
          <div className={styles.billHeader}>
            <span className={styles.billHead}>Item</span>
            <span className={styles.billHead}>QTY</span>
            <span className={styles.billHead}>Subtotal</span>
          </div>
          <div className={styles.bill}>
            {billItems.map((item, idx) => (
              <div key={idx} className={styles.billItem}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemQty}>{item.quantity}</div>
                <div className={styles.itemPrice}>RS {item.subtotal}</div>
              </div>
            ))}
          </div>
          <div className={styles.totalCont}>Total : RS {total}</div>
        </div>
      ) : (
        <div className={styles.noOrderCont}>
          <div className={styles.noOrderImg}></div>
          <div className={styles.noOrderText}>No Orders Placed Yet</div>
        </div>
      )}
    </div>
  );
}