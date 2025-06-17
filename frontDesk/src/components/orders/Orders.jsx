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
      { name: 'Masala Chai', qty: 1 },
    ],
  },
  {
    tableNum: 2,
    timeStamp: '3 min ago',
    items: [
      { name: 'Chicken Momo', qty: 3 },
      { name: 'Cold Coffee', qty: 2 },
    ],
  },
  {
    tableNum: 3,
    timeStamp: '5 min ago',
    items: [
      { name: 'Veg Pizza', qty: 1 },
      { name: 'Lemonade', qty: 2 },
    ],
  },
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
