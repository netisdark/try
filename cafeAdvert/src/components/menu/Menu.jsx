import styles from './Menu.module.css';
import MenuItems from './menuItems';

export default function Menu() {
  return (
    <div className={styles.menuCont}>
      <span className={styles.menuTitle}>What We Serve</span>
      <p className={styles.menuDesc}>
        From starters to sweet endings, this is your go-to guide for everything we bring to the table.
      </p>


      <div className={styles.menuGrid}>
        {MenuItems.map(({ category, items }) =>
          items.map((item, index) => {
            const itemImgClass = styles[`itemImg${index + 1}`];

            return (
              <div
                key={item.name}
                className={`${itemImgClass} ${styles.itemImg}`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className={styles.itemName}>{item.name}</div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
