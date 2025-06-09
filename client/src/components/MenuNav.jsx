import styles from './MenuNav.module.css';

export default function MenuNav(){

    const menuCategory = [
        'All',
        'Coffee',
        'Tea',
        'Cold Drinks',
        'Pastries',
        'Sandwiches',
        'Salads',
        'Breakfast',
        'Desserts',
        'Smoothies',
        'Specials'
      ];
      

    return (
        <div className={styles.menuNav}>
            <ul className={styles.menuCategoryCont}>
                    {
                        menuCategory.map((item,index)=>{
                           return <li className={styles.menuCatg} key={index}>{item}</li>
                        })
                    }
            </ul>
            <span className={styles.swipeNotice}>Swipe for more &gt;&gt;</span>
        </div>
    )
}