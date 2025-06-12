import styles from './Menu.module.css';
import notFoundStyle from './NotFound.module.css';
import menuItems from '../MenuItems';
import { useCart } from '../cart/CartContext'; 

export default function Menu({ selectedCategory, searchTerm, setSearchTerm  }) {
  const { cartItems, addItem, incrementItem, decrementItem } = useCart();

  const filteredItems = selectedCategory
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  const allItems = filteredItems.flatMap(cat =>
    cat.items.map(item => ({
      ...item,
      category: cat.category
    }))
  );

  const searchedItems = searchTerm
    ? allItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : allItems;

  if (searchTerm && searchedItems.length === 0) {
    return (
      <div className={notFoundStyle.notFoundCont}>
        <div className={notFoundStyle.sorryImg}></div>
        <p className={notFoundStyle.notFoundText}>We couldn't find {searchTerm} on our menu...</p>
        <button
          onClick={() => setSearchTerm('')}
          className={notFoundStyle.backBtn}
        >
          &lt;&nbsp;Back to Menu
        </button>
      </div>
    );
  }

  const groupedItems = searchedItems.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.menuContainer}>
      {Object.entries(groupedItems).map(([categoryName, items], catIndex) => (
        <div key={catIndex} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{categoryName}</h2>
          <ul className={styles.itemList}>
            {items.map((item, itemIndex) => {
              const itemKey = `${categoryName}-${itemIndex}`;
              const count = cartItems[itemKey] || 0;

              return (
                <li key={itemKey} className={styles.item}>
                  <img src={item.img} className={styles.foodImg} />
                  <div className={styles.foodItem}>
                    <span className={styles.foodName}>{item.name}</span>
                    <span className={styles.foodPrice}>RS {item.price}</span>
                  </div>

                  {count === 0 ? (
                    <button
                      className={styles.addBtn}
                      onClick={() => addItem(itemKey)}
                    >
                      Add Item
                    </button>
                  ) : (
                    <div className={styles.counter}>
                      <button onClick={() => decrementItem(itemKey)} className={styles.counterBtn}>-</button>
                      <span className={styles.countDisplay}>{count}</span>
                      <button onClick={() => incrementItem(itemKey)} className={styles.counterBtn}>+</button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
