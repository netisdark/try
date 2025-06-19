import styles from './Order.module.css';
import { useCart } from '../cart/CartContext';
import { useState } from 'react';

export default function Order() {
  const {
    cartItems,
    incrementItem,
    decrementItem,
    getItemDetails,
    orderPlaced,
    placeOrder,
    lastPlacedItems
  } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const cartEntries = Object.entries(cartItems);
  const total = cartEntries.reduce((sum, [key, count]) => {
    const item = getItemDetails(key);
    return item ? sum + item.price * count : sum;
  }, 0);

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    setNotification(null);

    try {
      const orderData = {
        items: cartEntries.map(([key, count]) => {
          const item = getItemDetails(key);
          return {
            id: key,
            name: item.name,
            price: item.price,
            quantity: count,
            subtotal: item.price * count
          };
        }),
        total: total,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('/api/postOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      setNotification({
        type: 'success',
        message: 'Order placed successfully!'
      });
      
      placeOrder();
      
      console.log('Order placed successfully:', result);

    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Failed to place order. Please try again.'
      });
      
      console.error('Error placing order:', error);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderTitle}>My Order</div>
      
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
      
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
            const isPlaced = orderPlaced && key in lastPlacedItems;
            return (
              <div className={styles.cartItem} key={key}>
                <img src={item.img} alt={item.name} className={styles.cartItemImg} />
                <div className={styles.cartItemNamePrice}>
                  <span className={styles.cartItemName}>{item.name}</span>
                  <span className={styles.cartItemPrice}>RS {item.price}</span>
                </div>
                <div className={styles.cartBtnCont}>
                  {isPlaced ? (
                    <span className={styles.orderPlacedText}>Order Placed</span>
                  ) : (
                    <>
                      <button onClick={() => decrementItem(key)} className={styles.counterBtn}>-</button>
                      <span className={styles.countDisplay}>{count}</span>
                      <button onClick={() => incrementItem(key)} className={styles.counterBtn}>+</button>
                    </>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      {cartEntries.length > 0 && (
        <div className={styles.confirmCont}>
          <div className={styles.priceCont}>Total : RS {total}</div>
          <button 
            onClick={handlePlaceOrder} 
            className={styles.checkoutBtn}
            disabled={isLoading}
          >
            {isLoading ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      )}
    </div>
  );
}