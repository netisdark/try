import styles from './Orders.module.css';

import Body from '../body';
import Title from '../Title';
import Switch from './OrderSwitch';
import OrderItem from './OrderItem';

const orders = [
  {
    tableNum: 1,
    timeStamp: '1 min ago',
    items: [
      { name: 'Keema Noodles', qty: 2 },
      { name: 'Strawberry Ice-cream', qty: 1 },
      {name: 'Blueberry Muffin', qty : 2}
    ],
  }
];

export default function Orders() {
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
              <OrderItem items={order.items} />
            </div>
            <div className={styles.statusCont}>
              <Switch />
            </div>
          </div>
        ))}
      </div>
    </Body>
  );
}
