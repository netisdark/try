import styles from './About.module.css';



export default function About(){
    return(
        <div className={styles.bannerCont}>
            <div className={styles.banner}></div>
            <div className={styles.bannerDescCont}>
                <span className={styles.bannerTitle}>Why Cafe Italio Was Built</span>
                <p className={styles.bannerDesc}>
                Cafe Italio was founded to offer a refined dining experience in a cozy, welcoming setting, combining quality cuisine, exceptional service, and a warm atmosphere.                </p>
            </div>
        </div>
    )
}