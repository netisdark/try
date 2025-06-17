import styles from './ConfirmBox.module.css';

export default function ConfirmBox({ onConfirm, onCancel }) {
  return (
    <div className={styles.confirmCont}>
      <div className={styles.confirmBox}>
        <p className={styles.confirmText}>Cancel this order?</p>
        <div className={styles.confirmActions}>
          <button className={styles.confirmBtn} onClick={onConfirm}>Yes</button>
          <button className={styles.abortBtn} onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}
