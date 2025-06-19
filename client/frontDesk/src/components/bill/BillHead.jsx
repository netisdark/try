import styles from './BillHead.module.css';


export default function BillHead(){
    return(
        <div className={styles.billHead}>
            <div className={styles.tableNum}>Table :&nbsp;<span className={styles.tbNum}> 1</span></div>
            <div className={styles.billInfoCont}>
                <span className={styles.billInfo}>S.N</span>
                <span className={styles.billInfo}>Item Name</span>
                <span className={styles.billInfo}>QTY</span>
                <span className={styles.billInfo}>Sub Total</span>
            </div>
        </div>
    )
}