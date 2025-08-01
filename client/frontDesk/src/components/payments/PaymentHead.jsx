import styles from './PaymentHead.module.css';


export default function PaymentHead(){
    return(
        <div className={styles.paymentHead}>
            <div className={styles.headItem}>S.N</div>
            <div className={styles.headItem}>Date</div>
            <div className={styles.headItem}>Time</div>
            <div className={styles.headItem}>Table No</div>
            <div className={styles.headItem}>Payment Method</div>
            <div className={styles.headItem}>Total Amount</div>
            <div className={styles.headItem}>Invoice</div>
        </div>
    )
}