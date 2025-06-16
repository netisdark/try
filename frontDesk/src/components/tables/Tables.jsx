import styles from './Tables.module.css';


export default function Tables() {
    return <div className={styles.tableWrapper}>
        <div className={styles.pageTitle}>Tables</div>
        <div className={styles.tableCont}>

            <div className={styles.tableCol1}>
                <span className={styles.tbCol1}><i class="fa-solid fa-couch"></i></span>
                <span className={`${styles.tbCol1} ${styles.active}`}><i class="fa-solid fa-couch"></i></span>
                <span className={styles.tbCol1}><i class="fa-solid fa-couch"></i></span>
                <span className={`${styles.tbCol1} ${styles.active}`}><i class="fa-solid fa-couch"></i></span>
            </div>

            <div className={styles.cashierCont}>
                <span className={styles.cashierTable}><i class="fa-solid fa-couch"></i></span>
                <i class="fa-solid fa-computer"></i>
            </div>

            <div className={styles.tableCol2}>
                <span className={`${styles.tbCol2} ${styles.active}`}><i class="fa-solid fa-couch"></i></span>
                <span className={styles.tbCol2}><i class="fa-solid fa-couch"></i></span>
                <span className={styles.tbCol2}><i class="fa-solid fa-couch"></i></span>
            </div>

            <div className={styles.tableCol3}>
                <span className={styles.tbCol3}><i class="fa-solid fa-chair"></i></span>
                <span className={`${styles.tbCol3} ${styles.active}`}><i class="fa-solid fa-chair"></i></span>
                <span className={styles.tbCol3}><i class="fa-solid fa-chair"></i></span>
                <span className={styles.tbCol3}><i class="fa-solid fa-chair"></i></span>
                <span className={`${styles.tbCol3} ${styles.active}`}><i class="fa-solid fa-chair"></i></span>
            </div>
        </div>
    </div>
}