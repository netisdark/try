import React, { useState } from 'react';
import styles from './AddMenuModal.module.css';

export default function AddMenuModal({ isOpen, onClose, onAdd }) {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !name || !price) {
      alert('Please fill in category, name, and price.');
      return;
    }

    onAdd({ category, item: { name, price: Number(price), img } });
    setCategory('');
    setName('');
    setPrice('');
    setImg('');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2>Add Menu Item</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="e.g. Coffee"
              required
            />
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
            Image URL:
            <input
              type="url"
              value={img}
              onChange={e => setImg(e.target.value)}
              placeholder="Optional image URL"
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
