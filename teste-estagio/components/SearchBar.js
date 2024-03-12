import styles from '../styles/SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <form className={styles.searchbar}>
                    <input type="search" className={styles.input} placeholder="Pesquisar..." />
                    <button type="submit" className={styles.button}>Pesquisar</button>
                </form>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.actionButtonContainer}>
                    <button className={styles.button}>Cadastrar</button>
                    <button className={styles.button}>Remover</button>
                </div>
            </div>
        </div>
    );
}
