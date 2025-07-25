import styles from './Payments.module.css';

import Body from '../Body';
import PaymentHead from './PaymentHead';
import PaymentItem from './PaymentItem';

export default function Payments(){
    return(
        <Body>
            <div className={styles.paymentsWrap}>
                <PaymentHead/>
                <PaymentItem/>
            </div>
        </Body>
    )
}