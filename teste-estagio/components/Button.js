import styles from '../styles/Button.module.css'

export default function Button({ children, ...props}) {

    return(
        <div className={styles.input}>
            <button className={styles.button} {...props}> {children} </button>
        </div>
    )

}