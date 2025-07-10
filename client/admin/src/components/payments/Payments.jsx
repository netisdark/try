import styles from './Payments.module.css';
import Body from '../Body';

export default function Payments() {
  // Example payments data
  const payments = [
    { time: '5:04 PM', amount: 'RS 540', method: 'Bank Transfer' },
    { time: '2:18 PM', amount: 'RS 1200', method: 'eSewa' },
    { time: '10:45 AM', amount: 'RS 300', method: 'Cash' },
  ];

  return (
    <Body>
      <div className={styles.paymentsWrap}>
        <div className={styles.datePicker}>
          <select className={styles.dateDropdown}>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="thisWeek">This Week</option>
            <option value="thisMonth">This Month</option>
            <option value="thisYear">This Year</option>
            <option value="lifetime">Lifetime</option>
          </select>
          <input type="date" className={styles.calendarIconOnly} />
        </div>

        <div className={styles.paymemtCont}>
          <div className={styles.paymentsHead}>
            <span className={styles.headItem}>S.N</span>
            <span className={styles.headItem}>Time</span>
            <span className={styles.headItem}>Amount</span>
            <span className={styles.headItem}>Method</span>
            <span className={styles.headItem}>Invoice</span>
          </div>

          {payments.map((payment, index) => (
            <div className={styles.paymentBox} key={index}>
              <span className={styles.paymentItem}>{index + 1}</span>
              <span className={styles.paymentItem}>{payment.time}</span>
              <span className={styles.paymentItem}>{payment.amount}</span>
              <span className={styles.paymentItem}>{payment.method}</span>
              <span className={styles.paymentItem}>
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Body>
  );
}
