import styles from './MenuNav.module.css'

export default function MenuNav({ categories = [], selectedCategory, onSelectCategory }) {
    return (
      <nav>
        {categories.map((cat, index) => {
          const isActive = (cat === 'All' && selectedCategory === null) || cat === selectedCategory;
          return (
            <button
              className={`${styles.categoryBtn} ${isActive ? styles.active : ''}`}
              key={index}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </nav>
    );
  }
  