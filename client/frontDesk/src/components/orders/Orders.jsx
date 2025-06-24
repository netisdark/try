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
    .then((data) => {
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        setOrders([data]); // fallback for single order
      }
    })
    .catch((error) => console.error('Error fetching orders:', error));
}, []);


  const handleCancelClick = (index) => {
    setConfirmingIndex(index);
  };

  const handleConfirm = (index) => {
    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
    setConfirmingIndex(null);
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
