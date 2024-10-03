import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import styles from './ItemsListContainer.module.css';
import { getProducts } from '../../firebase/database';

export function ItemsListContainer({ greeting }) {
    const [products, setProducts] = useState([]); 
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts().then((allProducts) => {
            if (categoryId) {
                
                const filteredProducts = allProducts.filter(product => product.category === categoryId);
                setProducts(filteredProducts);
            } else {
                setProducts(allProducts);
            }
        }).catch((error) => {
            console.error('Error obteniendo los productos:', error);
        });
    }, [categoryId]);

    return (
        <div className={styles.uiContainer}>
            <h1>{greeting}</h1>
            <ItemList products={products} /> 
        </div>
    );
}


