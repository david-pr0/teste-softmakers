import MainContainer from '@/app/layout'
import styles from '../styles/LoginCard.module.css'

export default function LoginCard({ title, children }) {
    return(
        <MainContainer>
            <div className={styles.logincard}>
                <h1 className={styles.title}>{title}</h1>
                {children}
            </div>
        </MainContainer>

    )
}