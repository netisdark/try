import styles from './Food.module.css';


export default function Food(){
    return (
        <div className={styles.foodCont}>
            <div className={styles.foodTitle}>Pick your bite.</div>
            <div className={styles.foodDesc}>Explore a glimpse of our handpicked favorites before you dine.</div>
            <div className={styles.gridContTop}>
                <div className={styles.foodGrid1}></div>
                <div className={styles.foodGrid2}></div>
            </div>
            <div className={styles.gridContBottom}>
                <div className={styles.foodGrid3}></div>
                <div className={styles.foodGrid4}></div>
            </div>
        </div>
    )
}