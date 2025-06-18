import styles from './PaymentItem.module.css';


export default function PaymentItem() {
    return (
        <div className={styles.paymentItemCont}>
            <div className={styles.paymentBox}>
                <div className={styles.paymentItem}>1</div>
                <div className={styles.paymentItem}>2025/5/12/ 12 : 06</div>
                <div className={styles.paymentItem}>7</div>
                <div className={styles.paymentItem}>Bank Transfer</div>
                <div className={styles.paymentItem}>4</div>
                <div className={styles.paymentItem}>720</div>
            </div>
        </div>
    )
}