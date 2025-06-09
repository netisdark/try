import styles from './Menu.module.css';
import menuItems from './MenuItems'; 

export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      {menuItems.map((category, catIndex) => (
        <div key={catIndex} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.category}</h2>
          <ul className={styles.itemList}>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.item}>
                <span>{item.name} </span>  <span>{item.price} RS</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
