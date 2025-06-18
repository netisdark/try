import styles from './Payments.module.css';

import Body from '../body';
import Title from '../Title';
import PaymentHead from './PaymentHead';
import PaymentItem from './PaymentItem';

export default function Payments(){
    return(
        <Body>
            <Title>Payments</Title>
            <div className={styles.paymentsWrap}>
                <PaymentHead/>
                <PaymentItem/>
            </div>
        </Body>
    )
}