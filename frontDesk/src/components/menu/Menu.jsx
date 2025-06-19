import styles from './Menu.module.css';

import Body from '../body';
import MenuControls from './MenuControls';
import MenuItems from './MenItems';


export default function Menu(){
    return (
        <Body>
                <MenuControls/>
            <div className={styles.menuWrap}>
                <div className={styles.itemHead}>
                    <div className={styles.itemTitle}>S.N</div>
                    <div className={styles.itemTitle}>Image</div>
                    <div className={styles.itemTitle}>Name</div>
                    <div className={styles.itemTitle}>Category</div>
                    <div className={styles.itemTitle}>Price</div>
                    <div className={styles.itemTitle}>Available</div>
                    <div className={styles.itemTitle}>Edit Item</div>
                </div>
                <MenuItems/>
            </div>
        </Body>
        )
}