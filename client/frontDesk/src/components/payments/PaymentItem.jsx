import styles from './PaymentItem.module.css';


export default function PaymentItem() {

    const paymentData = [
        {
            paymentDate: '2025/5/12',
            paymentTime : '12 : 06',
            tableNum: 7,
            paymentMethod: 'Bank Transfer',
            itemQty: 4,
            totalPrice: '720'
        },
        {
            paymentDate: '2025/5/12',
            paymentTime : '12 : 08',
            tableNum: 5,
            paymentMethod: 'Esewa',
            itemQty: 2,
            totalPrice: '900'
        }
    ]

    return (
        <div className={styles.paymentItemCont}>
            {
                paymentData.map((payment, index) => {
                   return (<div className={styles.paymentBox} key={index}>
                        <div className={styles.paymentItem}>{index + 1}</div>
                        <div className={styles.paymentItem}>{payment.paymentDate}</div>
                        <div className={styles.paymentItem}>{payment.paymentTime}</div>
                        <div className={styles.paymentItem}>{payment.tableNum}</div>
                        <div className={styles.paymentItem}>{payment.paymentMethod}</div>
                        <div className={styles.paymentItem}>{payment.totalPrice}</div>
                        <div className={styles.paymentItem}><button className={styles.invoiceBtn}>View <i class="fa-solid fa-file-invoice-dollar"></i></button></div>
                    </div>)
                })
            }
        </div>
    )
}