import styles from './Founder.module.css';


export default function Founder() {
    return <section className={styles.founderWrapper}>
        <span className={styles.founderTitle}>Meet The Founders</span>
        <div className={styles.foundersCont}>
            <div className={styles.founderCard}>
                <div className={`${styles.founder} ${styles.founder1}`}>
                    <span className={styles.founderName}>lorem ipsum</span>
                    <p className={styles.founderRole}>CEO &amp; Co-Founder</p>
                </div>
                <div className={styles.founderDesc}>I envisioned a café where every dish tells a story, inspired by family recipes and timeless traditions. It’s about more than food—it’s about connection.</div>
            </div>

            <div className={styles.founderCard}>
                <div className={`${styles.founder} ${styles.founder2}`}>
                    <span className={styles.founderName}>lorem impusm</span>
                    <p className={styles.founderRole}>CEO &amp; C-Founder</p>
                </div>
                <div className={styles.founderDesc}>We set out to create a place where people feel at home, surrounded by warmth, good company, and flavors that spark memories and bring joy.</div>
            </div>
        </div>
    </section>
}