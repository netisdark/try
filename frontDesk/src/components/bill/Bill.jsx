import { useState } from 'react';
import styles from './Bill.module.css';

import Body from '../body';
import Title from '../Title';
import BillHead from './BillHead';
import BillItems from './BillItems';
import ConfirmBtn from './Summary';
import ConfirmBox from './ConfirmBox';

export default function Bill() {
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  return (
    <Body>
      <Title>Bill</Title>

      <div className={styles.billWrap}>
        <div className={styles.billCard}>
          <BillHead />

          {!showConfirmBox ? (
            <BillItems />
          ) : (
            <ConfirmBox onAbort={() => setShowConfirmBox(false)} />
          )}

          <ConfirmBtn onConfirmClick={() => setShowConfirmBox(true)} />
        </div>
      </div>
    </Body>
  );
}
