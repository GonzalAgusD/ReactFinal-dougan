import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './config';

const db = getFirestore(app);


export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'item'));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return products; 
  } catch (error) {
    console.error('Error obteniendo los productos:', error);
    throw error;
  }
};