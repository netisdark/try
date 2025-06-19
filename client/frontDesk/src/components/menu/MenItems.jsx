import styles from './MenuItems.module.css';
import OrderSwitch from '../OrderSwitch';
import menuItems from './menuItems';

export default function MenuItems() {
    let itemIndex = 0;

    return (
        <div className={styles.menuItemsCont}>
            {menuItems.map((categoryData) =>
                categoryData.items.map((item) => {
                    itemIndex++;

                    return (
                        <div key={`${categoryData.category}-${item.name}`} className={styles.menuItem}>
                            <div className={styles.itemDetl}>{itemIndex}</div>
                            <div className={styles.itemDetl}>
                                <img src={item.img} alt={item.name} className={styles.itemImg} />
                            </div>
                            <div className={styles.itemDetl}>{item.name}</div>
                            <div className={styles.itemDetl}>{categoryData.category}</div>
                            <div className={styles.itemDetl}>{item.price}</div>
                            <div className={styles.itemDetl}><OrderSwitch /></div>
                            <div className={styles.itemDetl}>
                                <div className={styles.editBtnCont}>
                                <i class="fa-solid fa-pen-to-square"></i>
                                <i class="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}
