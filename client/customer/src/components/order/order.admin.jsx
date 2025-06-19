import { useEffect, useState } from 'react';
import styles from '../bill/Bill.module.css';

export default function GetOrder() {
  const [message, setMessage] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/getOrder', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          
          if (result.success && result.data && result.data.length > 0) {
            setOrders(result.data);
            setOrderPlaced(true);
            setMessage(`${result.data.length} order(s) found`);
          } else {
            setOrderPlaced(false);
            setMessage('No orders found');
          }
        } else {
          const errorData = await response.json();
          setMessage(`Error: ${errorData.message || 'Failed to fetch orders'}`);
          setOrderPlaced(false);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setMessage('Error: Unable to fetch orders. Please try again.');
        setOrderPlaced(false);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const refreshOrders = () => {
    setLoading(true);
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/getOrder', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          
          if (result.success && result.data && result.data.length > 0) {
            setOrders(result.data);
            setOrderPlaced(true);
            setMessage(`${result.data.length} order(s) found`);
          } else {
            setOrderPlaced(false);
            setMessage('No orders found');
          }
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setMessage('Error: Unable to fetch orders. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  };

  if (loading) {
    return (
      <div className={styles.billWrapper}>
        <div className={styles.orderTitle}>Orders</div>
        <div className={styles.loadingCont}>Loading orders...</div>
      </div>
    );
  }

  return (
    <div className={styles.billWrapper}>
      <div className={styles.orderTitle}>
        Orders
        <button onClick={refreshOrders} className={styles.refreshBtn}>
          Refresh
        </button>
      </div>

      {message && (
        <div
          className={`${styles.message} ${
            message.includes('Error') ? styles.errorMessage : styles.successMessage
          }`}
        >
          {message}
        </div>
      )}

      {orderPlaced ? (
        <div className={styles.ordersContainer}>
          {orders.map((order, orderIdx) => (
            <div key={order._id || orderIdx} className={styles.orderCard}>
              
              <div className={styles.billCont}>
                <div className={styles.billHeader}>
                  <span className={styles.billHead}>Item</span>
                  <span className={styles.billHead}>QTY</span>
                  <span className={styles.billHead}>Price</span>
                  <span className={styles.billHead}>Subtotal</span>
                </div>
                
                <div className={styles.bill}>
                  {order.items && order.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={styles.billItem}>
                      <div className={styles.itemName}>{item.name}</div>
                      <div className={styles.itemQty}>{item.quantity}</div>
                      <div className={styles.itemPrice}>RS {item.price}</div>
                      <div className={styles.itemSubtotal}>RS {item.subtotal}</div>
                    </div>
                  ))}
                </div>
                
                <div className={styles.totalCont}>
                  Total: RS {order.total}
                </div>
                <div className={styles.orderHeader}>
                <div className={styles.orderInfo}>
                  Order #{order.orderId || order._id}
                </div>
                <div className={styles.orderStatus}>
                  Status: {order.status}
                </div>
                <div className={styles.orderDate}>
                  {order.createdAt ? new Date(order.createdAt).toLocaleString() : 'N/A'}
                </div>
              </div>
              </div>
            </div>
          ))}
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