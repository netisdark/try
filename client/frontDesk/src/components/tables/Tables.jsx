import Body from '../body';
import styles from './Tables.module.css';

const tablesConfig = {
  col1: 5,
  col2: 3,
  col3: 3,
  col4: 3,
};

export default function Tables() {
  let tableNumber = 1;

  return (
    <Body>
      <div className={styles.tableMap}>
        {Object.entries(tablesConfig).map(([colKey, tableCount], colIndex) => (
          <div key={colKey} className={styles[colKey]}>
            {[...Array(tableCount)].map((_, tableIndex) => {
              const tableClass = `${styles[`${colKey}tb${tableIndex + 1}`]} ${styles[`tbCol${colIndex + 1}`]}`;
              const currentTableNumber = tableNumber++;

              return (
                <div key={currentTableNumber} className={tableClass}>
                    {/* 
                        toggle this display property (with {display : 'none'}) to denote active and in-active tables... 
                        make the table active when order is placed, in-active when payment is confirmed...
                    */}
                  <button style={{display : 'block'}} className={styles.statusBall}>{currentTableNumber}</button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Body>
  );
}
