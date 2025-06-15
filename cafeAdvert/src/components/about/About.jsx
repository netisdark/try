import styles from './About.module.css';



export default function About(){
    return(
        <div className={styles.bannerCont}>
            <div className={styles.banner}></div>
            <div className={styles.bannerDescCont}>
                <span className={styles.bannerTitle}>Why Cafe Italio Was Built</span>
                <p className={styles.bannerDesc}>
                Cafe Italio was established with the vision of offering a refined culinary experience in an inviting and intimate setting. Designed to blend the sophistication of fine dining with the warmth of a cozy atmosphere, the café provides guests with a thoughtfully curated menu, exceptional service, and a space where quality and comfort come together seamlessly.
                </p>
            </div>
        </div>
    )
}