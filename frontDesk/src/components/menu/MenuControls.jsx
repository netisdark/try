import styles from './MenuControls.module.css';


export default function MenuControls() {
    return (
        <div className={styles.menuControls}>
            <div className={styles.searchBox}>
                <input
                    type="text"
                    className={styles.inputBox}
                    placeholder="Search Food Item..."
                />
                <button className={styles.searchBtn}>
                    <i className="fas fa-magnifying-glass"></i>
                </button>
            </div>

            <button className={styles.addItemBtn}><i class="fa-solid fa-plus"></i>Add New Item</button>
        </div>
    )
}