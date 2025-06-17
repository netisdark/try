import styles from './orderItem.module.css';

export default function OrderItem({ items }) {
  return (
    <div className={styles.itemsCont}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <span className={styles.itemName}>{item.name}</span>
          <span className={styles.itemQty}>{item.qty}</span>
        </div>
      ))}
    </div>
  );
}
