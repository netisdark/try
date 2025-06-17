import styles from './ConfirmBox.module.css';

export default function ConfirmBox({ onAbort }) {
  return (
    <div className={styles.confirmWrap}>
      <div className={styles.confirmCont}>
        <div className={styles.confirmText}>Confirm the payment?</div>
        <div className={styles.confirmActions}>
          <button className={styles.confirmBtn}>Yes</button>
          <button className={styles.abortBtn} onClick={onAbort}>No</button>
        </div>
      </div>
    </div>
  );
}
