import styles from './Nav.module.css';


export default function Nav(){
    return (
        <nav className={styles.navBar}>
            <div className={styles.searchBox}>
                <button className={styles.searchBtn}><i className="fas fa-magnifying-glass"></i></button>
                <input type="text" className={styles.inputBox} placeholder="Search Food Item..."/>
            </div>
        </nav>
    )
}