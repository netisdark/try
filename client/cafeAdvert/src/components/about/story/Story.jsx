import styles from './Story.module.css';



export default function Story(){
    return <section className={styles.storyWrapper}>
       <div className={styles.titleCont}>
           <span>our story</span>
       <span className={styles.storyTitle}>From taste to tradition.</span>
       </div>
        <div className={styles.storyCont}>
            <div className={styles.storyImg}></div>
            <div className={styles.storyDesc}>
            In 2007, our founder set out to create more than just a café—he envisioned a place where every bite and sip carried the comfort of tradition. What began as a passion for authentic flavors soon grew into a beloved neighborhood spot, where recipes are rooted in heritage and shared with heart. From taste to tradition, we've been serving more than meals—we've been serving memories.
            </div>
        </div>
    </section>
}