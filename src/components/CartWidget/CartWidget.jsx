
import { useState } from 'react';
import cart from './assets/cart.svg';
import styles from './CartWidget.module.css';
import { useCart } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

export function CartWidget() {
  const { cartQuantity } = useCart(); 

  return (
    <div>
      <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
        <i className="fas fa-shopping-cart"></i> 
        <span>{cartQuantity() > 0 ? cartQuantity() : ''}</span> 
      </Link>
    </div>
  );
}
