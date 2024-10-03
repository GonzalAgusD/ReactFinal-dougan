import { Item } from '../Item/Item';
import styles from './ItemList.module.css';
import { useCart } from '../../context/CartContext.jsx';


export function ItemList({ products }) {

    const { addToCart } = useCart();
    return (
        <div className={styles['card-container']}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} className={styles['card-image']} />
            <div className={styles['card-content']}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              <button
                className={styles['buy-button']}
                onClick={() => addToCart(product)} 
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }