import styles from '../styles/Input.module.css'

export default function Input(props) {

    return(
        <div>
            <input className={styles.input}{...props}/>
        </div>
    )

}