import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <nav className={styles.navContainer}> 
      <div>
        <img src="/tienda.png" alt="Logo" className={styles.navbarLogo} /> 
      </div>
      <div className={styles.navLinks}> 
        <Link to="/" className={styles.navLink}>Inicio</Link>
        <Link to="/category/Fuego" className={styles.navLink}>Fuego</Link>
        <Link to="/category/Premium" className={styles.navLink}>Premium</Link>
        <Link to="/category/Clasico" className={styles.navLink}>Clásico</Link>
      </div>
      <CartWidget />  
    </nav>
  );
}