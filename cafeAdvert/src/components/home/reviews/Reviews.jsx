import styles from './Reviews.module.css';


export default function Reviews(){
    return(
        <div className={styles.reviewsCont}>
            <div className={styles.reviewTitle}>Customer Stories</div>
            <div className={styles.reviewsDesc}>A collection of memories from our beloved customers.</div>
            <div className={styles.storyCont}>
                <div className={styles.reviewCard}>
                    <div className={styles.reviewMsgCont}>
                        <span className={styles.reviewName}>Joseline</span>
                        <p className={styles.review}><i class="fa-solid fa-quote-left"></i>Everything tasted like home.</p>
                    </div>
                </div>
                <div className={styles.reviewCard}>
                <div className={styles.reviewMsgCont}>
                        <span className={styles.reviewName}>Flornce</span>
                        <p className={styles.review}><i class="fa-solid fa-quote-left"></i>Every bite was pure happiness.</p>
                    </div>
                </div>
                <div className={styles.reviewCard}>
                <div className={styles.reviewMsgCont}>
                        <span className={styles.reviewName}>Catherine</span>
                        <p className={styles.review}><i class="fa-solid fa-quote-left"></i>Absolutely loved the cozy vibe.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}