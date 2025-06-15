import styles from './Contact.module.css';



export default function Contact(){
    return(
        <div className={styles.contactBox}>
        <div className={styles.queryTitle}>Send us your query</div>
                 <input type="text" placeholder = "Enter your name" required/>
                 <input type="email" placeholder="Enter your email" required/>
                 <textarea placeholder="Let us know how can we help..." required></textarea>
                 <button className={styles.sendBtn}>Send Message</button>
         </div>
    )
}