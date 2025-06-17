import styles from './BillItems.module.css';

const billData = [
  { id: 1, name: 'Iced Machiato', quantity: 2, price: 340 },
  { id: 2, name: 'Cappuccino', quantity: 1, price: 180 },
  { id: 3, name: 'Chocolate Croissant', quantity: 3, price: 450 },
  { id: 4, name: 'Lemon Tea', quantity: 2, price: 200 },
  { id: 5, name: 'Veg Sandwich', quantity: 1, price: 220 },
  { id: 6, name: 'Cold Brew', quantity: 2, price: 300 },
  { id: 7, name: 'Mocha', quantity: 1, price: 250 },
  { id: 8, name: 'Cheesecake Slice', quantity: 2, price: 400 },
  { id: 9, name: 'Americano', quantity: 1, price: 150 },
];

export default function BillItems() {
  return (
    <div className={styles.billItemsWrap}>
      {billData.map((item, index) => (
        <div key={item.id} className={styles.billItemCont}>
          <span className={styles.billItem}>{index + 1}</span>
          <span className={styles.billItem}>{item.name}</span>
          <span className={styles.billItem}>{item.quantity}</span>
          <span className={styles.billItem}>{item.price}</span>
        </div>
      ))}
    </div>
  );
}
