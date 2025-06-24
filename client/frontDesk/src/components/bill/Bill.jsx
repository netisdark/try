import { useState } from 'react';
import styles from './Bill.module.css';

import Body from '../Body';
import BillHead from './BillHead';
import BillItems from './BillItems';
import ConfirmBtn from './Summary';
import ConfirmBox from './ConfirmBox';

export default function Bill() {
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  return (
    <Body>
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
