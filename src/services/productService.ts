import axios from 'axios';
import { Product } from '../types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};


// import axios from 'axios';
// import { Product } from '../types/product';

// export const fetchProducts = async (): Promise<Product[]> => {
//   const res = await axios.get('https://fakestoreapi.com/products');
//   return res.data;
// };
