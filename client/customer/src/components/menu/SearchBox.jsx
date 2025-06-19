import styles from './SearchBox.module.css';
import { useState } from 'react';

export default function SearchBox({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input.trim());
  };

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="Search Food Item..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={styles.searchBtn} onClick={handleSearch}>
            <i className="fas fa-magnifying-glass"></i>
          </button>
        </div>
      </nav>
      <div className={styles.spacer}></div>
    </>
  );
}
