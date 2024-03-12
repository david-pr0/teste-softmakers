import "../styles/globals.css";
import SearchBar from "@/components/SearchBar";
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import Footer from "@/components/Footer";

export default function MainContainer({children}) {
  return (
      <div>
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}><Link href={'/'}>SoftPet</Link></h1>
            </div>
            <div className={styles.buttonsContainer}>
                <button type="submit" > <Link href={'/login'}> Login </Link> </button>
                <button type="submit"> <Link href={'/cadastro'}> Criar conta </Link></button>
            </div>
        </header>

        <main className={styles.main}>
            <SearchBar />

            <div className={styles.layout}>
                {children}
            </div>

        </main>
        <footer>
            <Footer />
        </footer>
      </div>
  )
}
