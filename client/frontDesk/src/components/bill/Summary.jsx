import styles from './Summary.module.css';

export default function Summary({ onConfirmClick }) {
  return (
    <div className={styles.summaryCont}>
      <div className={styles.paymentMethodOptCont}>
        <label htmlFor="paymentMethod">Payment Method : </label>
        <select id="paymentMethod" className={styles.paymentSelect}>
          <option value="cash">Cash</option>
          <option value="esewa">eSewa</option>
          <option value="khalti">Khalti</option>
          <option value="bank">Bank Transfer</option>
          <option value="card">Card</option>
        </select>
      </div>

      <span className={styles.totalPrice}>
        Total : <span className={styles.total}>RS 2520</span>
      </span>

      <button className={styles.confirmBtn} onClick={onConfirmClick}>
        Confirm Payment
      </button>
    </div>
  );
}
