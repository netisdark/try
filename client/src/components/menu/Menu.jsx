import styles from './Menu.module.css';
import menuItems from './MenuItems';

export default function Menu({ selectedCategory }) {
  const filteredItems = selectedCategory 
  ? menuItems.filter(category => category.category === selectedCategory)
  : menuItems;


  return (
    <div className={styles.menuContainer}>
      {filteredItems.map((category, catIndex) => (
        <div key={catIndex} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.category}</h2>
          <ul className={styles.itemList}>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.item}>
                <img src={item.img} className={styles.foodImg} />
                <div className={styles.foodItem}>
                  <span className={styles.foodName}>{item.name}</span>
                  <span className={styles.foodPrice}>RS {item.price}</span>
                </div>
                <button className={styles.addBtn}>Add Item</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
