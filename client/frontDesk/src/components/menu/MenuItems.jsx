import React,{ useEffect, useState } from 'react';
import styles from './MenuItems.module.css';
import OrderSwitch from '../OrderSwitch.jsx';

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch('/api/getMenu')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setMenuItems(data);
    })
    .catch(error => {
      setError(error.message);
      console.error('Fetch error:', error);
    });
}, []);

  let itemIndex = 0;

  if (error) {
    return <div>Error loading menu: {error}</div>;
  }

  if (!menuItems.length) {
    return <div>Loading menu...</div>;
  }

  return (
    <div className={styles.menuItemsCont}>
      {menuItems.map(categoryData =>
        categoryData.items.map(item => {
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
              <div className={styles.itemDetl}>
                <OrderSwitch />
              </div>
              <div className={styles.itemDetl}>
                <div className={styles.editBtnCont}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
