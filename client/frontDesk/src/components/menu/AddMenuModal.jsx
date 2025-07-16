import React, { useState } from 'react';
import styles from './AddMenuModal.module.css';

export default function AddMenuModal({ isOpen, onClose, onAdd }) {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  const categoryOptions = [
    'Coffee',
    'Tea',
    'Pastries',
    'Sandwiches',
    'Breakfast',
    'Desserts',
    'Smoothies',
    'Specials',
  ];

  const safeCategoryOptions = Array.isArray(categoryOptions) ? categoryOptions : [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !name || !price) {
      alert('Please fill in category, name, and price.');
      return;
    }

    try {
      const response = await fetch('/api/postMenu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category,
          item: { name, price: Number(price), img }
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add menu item');
      }

      // Only call onAdd if you are NOT refetching the menu in the parent
      if (onAdd) {
        onAdd(); // Just trigger a refetch in the parent, don't pass the item
      }

      setCategory('');
      setName('');
      setPrice('');
      setImg('');
      onClose(); // Optionally close the modal after add
    } catch (err) {
      alert(err.message || 'Error adding menu item');
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Upload the file to the backend
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

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2>Add Menu Item</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Category:
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select category</option>
              {safeCategoryOptions.length > 0 && safeCategoryOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </label>
          <label>
            Item Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Espresso"
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="e.g. 250"
              required
              min="0"
            />
          </label>
          <label>
            Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginTop: '8px' }}
            />
          </label>

          <div className={styles.buttons}>
            <button type="submit">Add</button>
            <button type="button" onClick={onClose} className={styles.cancelBtn}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
