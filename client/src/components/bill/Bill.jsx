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

  const handleSaveBill = async () => {
    setIsSubmitting(true);
    setMessage('');

    try {
      const billData = {
        items: billItems,
        total: total,
        timestamp: new Date().toISOString(),
        orderDate: new Date().toLocaleDateString(),
        orderTime: new Date().toLocaleTimeString()
      };

      const response = await fetch('/api/admin/postOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(billData)
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Bill saved successfully!');
        console.log('Order saved:', result);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'Failed to save bill'}`);
      }
    } catch (error) {
      console.error('Error saving bill:', error);
      setMessage('Error: Unable to save bill. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          <div className={styles.saveBillSection}>
            <button 
              onClick={handleSaveBill}
              disabled={isSubmitting}
              className={styles.saveBillBtn}
            >
              {isSubmitting ? 'Submiting...' : 'Submit'}
            </button>

            {message && (
              <div className={`${styles.message} ${
                message.includes('Error') ? styles.errorMessage : styles.successMessage
              }`}>
                {message}
              </div>
            )}
          </div>
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