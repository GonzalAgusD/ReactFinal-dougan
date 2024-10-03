import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
    return (
        <div className={`ui-container ${styles.notFoundContainer}`}>
            <h1>¡EROR 404!</h1>
            <p> Por favor hacé click <Link to="/">acá</Link> para volver a la página principal.</p>
        </div>
    );
}
