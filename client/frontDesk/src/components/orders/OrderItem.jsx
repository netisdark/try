import styles from './OrderItem.module.css';

export default function OrderItem({ items }) {
  return (
    <div className={styles.itemsCont}>
      {items.map((item, index) => (
        <ul key={index} className={styles.item}>
          <li className={styles.itemName}>{item.name}</li>
          <li className={styles.itemQty}>{item.qty}</li>
        </ul>
      ))}
    </div>
  );
}
