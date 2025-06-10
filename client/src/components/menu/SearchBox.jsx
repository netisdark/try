import styles from './SearchBox.module.css';


export default function SearchBox() {
         return (
            <>
            <nav className={styles.navBar}>
                <div className={styles.searchBox}>
                <input type="text" className={styles.inputBox} placeholder="Search Food Item..."/>
                    <button className={styles.searchBtn}><i className="fas fa-magnifying-glass"></i></button>
                </div>
            </nav>
            <div className={styles.spacer}></div>
            </>
        ) 
}