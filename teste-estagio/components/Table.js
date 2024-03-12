import styles from '../styles/Table.module.css'

export default function Tables({ title, children }) {
    return(
        <>
            <div className={styles.table}>
                <h1 className={styles.title}></h1>
                {children}
            </div>
        </>
    )
}