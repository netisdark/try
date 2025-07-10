import styles from './Body.module.css';


export default function Body({children}) {
    return <div className={styles.bodyWrapper}>{children}</div>
}