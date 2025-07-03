import React, { useState } from 'react';
import styles from './MenuControls.module.css';
import MenuItems from './MenuItemsData';
import AddMenuModal from './AddMenuModal';

export default function MenuControls() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const categories = MenuItems.map(item => item.category);


     const handleAddItem = async ({ category, item }) => {
    try {
      const res = await fetch('/api/postMenu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, item }),
      });

      if (!res.ok) throw new Error('Failed to add item');

      const updatedCategory = await res.json();

      setMenuItems(prevMenu => {
        const exists = prevMenu.find(c => c.category === category);
        if (exists) {
          return prevMenu.map(c =>
            c.category === category ? updatedCategory.menuCategory : c
          );
        }
        return prevMenu;
      });

      setModalOpen(false);
    } catch (err) {
      alert(err.message);
    }
  };

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

            <div className={styles.addItmFilterCont}>
                <button
                    className={styles.filterBtn}
                    onClick={() => setShowDropdown(prev => !prev)}
                >
                    Category
                    <svg className={styles.filterIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
                </button>

                {showDropdown && (
                    <ul className={styles.dropdown}>
                        {categories.map((category, index) => (
                            <li key={index} className={styles.dropdownItem}>
                                {category}
                            </li>
                        ))}
                    </ul>
                )}

                <button className={styles.addItemBtn} onClick={() => setModalOpen(true)}>
                    <i className="fa-solid fa-plus"></i>
                    Add New Item
                </button>
                <AddMenuModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onAdd={handleAddItem}
                />
            </div>
        </div>
    );
}
