import { useState } from 'react';
import styles from './Orders.module.css';

import Body from '../body';
import Title from '../Title';
import Switch from '../OrderSwitch';
import OrderItem from './OrderItem';
import ConfirmBox from './ConfirmBox';

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      tableNum: 1,
      timeStamp: '1 min ago',
      items: [
        { name: 'Keema Noodles', qty: 2 },
        { name: 'Strawberry Ice-cream', qty: 1 },
        { name: 'Blueberry Muffin', qty: 2 },
      ],
    }
  ]);

  const [confirmingIndex, setConfirmingIndex] = useState(null);

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
      <Title>Orders</Title>
      <div className={styles.orderWrap}>
        {orders.map((order, index) => (
          <div key={index} className={styles.orderCard}>
            <div className={styles.orderTitle}>
              <span className={styles.tableNum}>Table : {order.tableNum}</span>
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
