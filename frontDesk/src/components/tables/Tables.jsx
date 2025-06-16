import styles from './Tables.module.css';

export default function Tables() {
    return (
        <div className={styles.tableWrapper}>
            <div className={styles.titleCont}>
                <div className={styles.title}>Tables</div>
            </div>

            <div className={styles.tableMap}>

                <div className={styles.col1}>
                    <div className={`${styles.col1tb1} ${styles.tbCol1}`}>
                        <button className={styles.statusBall}>1</button>
                    </div>
                    <div className={`${styles.col1tb2} ${styles.tbCol1}`}></div>
                    <div className={`${styles.col1tb3} ${styles.tbCol1}`}></div>
                    <div className={`${styles.col1tb4} ${styles.tbCol1}`}>
                    <button className={styles.statusBall}>4</button>
                    </div>
                    <div className={`${styles.col1tb5} ${styles.tbCol1}`}></div>
                </div>

                <div className={styles.col2}>
                    <div className={`${styles.col2tb1} ${styles.tbCol2}`}></div>
                    <div className={styles.cashCounter}></div>
                    <div className={`${styles.col2tb2} ${styles.tbCol2}`}></div>
                </div>

                <div className={styles.col3}>
                    <div className={`${styles.col3tb2} ${styles.tbCol3}`}>
                    <button className={styles.statusBall}>8</button>
                    </div>
                    <div className={`${styles.col3tb3} ${styles.tbCol3}`}></div>
                    <div className={`${styles.col3tb4} ${styles.tbCol3}`}></div>
                </div>

                <div className={styles.col4}>
                    <div className={`${styles.col4tb1} ${styles.tbCol4}`}>
                    <button className={styles.statusBall}>11</button>
                    </div>
                    <div className={`${styles.col4tb2} ${styles.tbCol4}`}></div>
                    <div className={`${styles.col4tb3} ${styles.tbCol4}`}></div>
                </div>

            </div>
        </div>
    );
}
