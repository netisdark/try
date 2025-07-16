import React, { useEffect, useState } from 'react';
import styles from './MenuItems.module.css';
import OrderSwitch from '../OrderSwitch.jsx';

function EditMenuItemModal({ isOpen, onClose, item, onSave, onImageUpload }) {
  const [name, setName] = useState(item?.name || '');
  const [price, setPrice] = useState(item?.price || '');
  const [img, setImg] = useState(item?.img || '');
  const [available, setAvailable] = useState(item?.available ?? true);

  useEffect(() => {
    setName(item?.name || '');
    setPrice(item?.price || '');
    setImg(item?.img || '');
    setAvailable(item?.available ?? true);
  }, [item]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch('/api/uploadMenuImage', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        setImg(data.url);
      } else {
        alert('Image upload failed');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, price: Number(price), img, available });
  };

  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2>Edit Menu Item</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label>
            Price:
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} required min="0" />
          </label>
          <label>
            Image:
            <input type="text" value={img} onChange={e => setImg(e.target.value)} placeholder="Image URL" />
            <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginTop: '8px' }} />
          </label>
          <label>
            Available:
            <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
          </label>
          <div className={styles.buttons}>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className={styles.cancelBtn}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editCategory, setEditCategory] = useState(null);

  const fetchMenu = () => {
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
      });
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleEdit = (category, item) => {
    setEditCategory(category);
    setEditItem(item);
    setEditModalOpen(true);
  };

  const handleSaveEdit = async (updates) => {
    if (!editCategory || !editItem) return;
    await fetch('/api/editMenuItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: editCategory, itemId: editItem._id, updates }),
    });
    setEditModalOpen(false);
    setEditItem(null);
    setEditCategory(null);
    fetchMenu();
  };

  const handleDelete = async (category, itemId) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    await fetch('/api/deleteMenuItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category, itemId }),
    });
    fetchMenu();
  };

  const handleToggleAvailable = async (category, item) => {
    await fetch('/api/editMenuItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category, itemId: item._id, updates: { available: !item.available } }),
    });
    fetchMenu();
  };

  let itemIndex = 0;

  if (error) {
    return <div>Error loading menu: {error}</div>;
  }

  if (!Array.isArray(menuItems) || !menuItems.length) {
    return <div>Loading menu...</div>;
  }

  return (
    <div className={styles.menuItemsCont}>
      <EditMenuItemModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        item={editItem}
        onSave={handleSaveEdit}
      />
      {menuItems.map(categoryData =>
        Array.isArray(categoryData.items) ? categoryData.items.map(item => {
          itemIndex++;
          return (
            <div key={`${categoryData.category}-${item._id}`} className={styles.menuItem}>
              <div className={styles.itemDetl}>{itemIndex}</div>
              <div className={styles.itemDetl}>
                <img src={item.img} alt={item.name} className={styles.itemImg} />
              </div>
              <div className={styles.itemDetl}>{item.name}</div>
              <div className={styles.itemDetl}>{categoryData.category}</div>
              <div className={styles.itemDetl}>{item.price}</div>
              <div className={styles.itemDetl}>
                <OrderSwitch
                  checked={item.available}
                  onChange={() => handleToggleAvailable(categoryData.category, item)}
                />
              </div>
              <div className={styles.itemDetl}>
                <div className={styles.editBtnCont}>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ cursor: 'pointer', marginRight: 8 }}
                    onClick={() => handleEdit(categoryData.category, item)}
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDelete(categoryData.category, item._id)}
                  ></i>
                </div>
              </div>
            </div>
          );
        }) : null
      )}
    </div>
  );
}
