import { useState, useEffect } from 'react';
import styles from './Orders.module.css';

import Body from '../Body';
import Switch from '../OrderSwitch';
import OrderItem from './OrderItem';
import ConfirmBox from './ConfirmBox';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [confirmingIndex, setConfirmingIndex] = useState(null);

  useEffect(() => {
  fetch('/api/getOrder')
    .then((res) => res.json())
    .then((resData) => {
      const ordersArray = resData.data || [];

      const normalizeOrder = (order) => ({
        table: order.items?.[0]?.table || 'Unknown',
        timeStamp: new Date(order.timestamp).toLocaleString(),
        items: order.items || [],
        total: order.total || 0,
        status: order.status || 'unknown',
        orderId: order.orderId || ''
      });

      const normalizedOrders = ordersArray.map(normalizeOrder);
      setOrders(normalizedOrders);
    })
    .catch((error) => console.error('Error fetching orders:', error));
}, []);



  const handleCancelClick = (index) => {
    setConfirmingIndex(index);
  };

const handleConfirm = async (index) => {
  try {
    const orderToDelete = orders[index];
    console.log(orderToDelete.orderId);
    const response = await fetch('/api/removeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId: orderToDelete.orderId }),
    });

    if (!response.ok) {
      throw new Error('Failed to delete order');
    }

    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
    setConfirmingIndex(null);
  } catch (error) {
    console.error('Error deleting order:', error);
  }
};

  const handleCancelConfirm = () => {
    setConfirmingIndex(null);
  };

  return (
    <Body>
      <div className={styles.orderWrap}>
        {orders.map((order, index) => (
          <div key={index} className={styles.orderCard}>
            <div className={styles.orderTitle}>
              <span className={styles.tableNum}>Table : {order.table}</span>
              <span className={styles.timeStamp}>{order.timeStamp}</span>
            </div>

            <div className={styles.itemsWrap}>
              <div className={styles.itemTitle}>
                <span className={styles.itemHead}>Item</span>
                <span className={styles.itemHead}>QTY</span>
              </div>

              {confirmingIndex === index ? (
                <ConfirmBox
                  onConfirm={() => handleConfirm(index)}
                  onCancel={handleCancelConfirm}
                />
              ) : (
                <OrderItem items={order.items} />
              )}
            </div>

            <div className={styles.statusCont}>
              <Switch disabled={confirmingIndex !== null} />
              <button
                className={styles.cancelOrderBtn}
                onClick={() => handleCancelClick(index)}
                disabled={confirmingIndex !== null}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </Body>
  );
}
