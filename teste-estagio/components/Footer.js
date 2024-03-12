import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Footer.module.css';

export default function Footer({ totalPages, currentPage, onPageChange }) {
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.navigation}>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <p>Página {currentPage} de {totalPages}</p>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </footer>
    );
}
