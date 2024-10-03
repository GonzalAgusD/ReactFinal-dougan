import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';  // Importa el hook useNavigate
import styles from './Cart.module.css'; 

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart(); 
  const navigate = useNavigate(); // Inicializa useNavigate

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePurchase = () => {
    alert('¡Gracias por su compra!');
    clearCart(); // Limpiar el carrito después de la compra
  };

  return (
    <div className={styles['cart-container']}>
      <h2 className={styles['cart-title']}>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          <ul className={styles['cart-list']}>
            {cart.map((product, index) => (
              <li key={index} className={styles['cart-item']}>
                <div>
                  <h4>{product.name}</h4>
                  <p className={styles['cart-item-price']}>Precio: ${product.price}</p>
                  <p>Cantidad: {product.quantity}</p>
                </div>
                <div>
                  <button
                    onClick={() => addToCart(product)}
                    className={styles['quantity-button']}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className={styles['quantity-button']}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className={styles['cart-total']}>Total: ${totalPrice}</h3>
          <button className={styles['checkout-button']} onClick={handlePurchase}>
            Finalizar Compra
          </button>

          {/* Botón para volver al inicio */}
          <button 
            className={styles['back-button']} 
            onClick={() => navigate('/')}  // Redirige al inicio
          >
            Volver al Inicio
          </button>
        </div>
      )}
    </div>
  );
}