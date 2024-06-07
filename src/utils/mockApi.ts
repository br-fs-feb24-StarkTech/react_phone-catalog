import products from '../../public/api/products.json';
import { ProductType } from '../types/ProductType';

export const fetchProducts = async (): Promise<ProductType[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products as ProductType[]);
    }, 500);
  });
};
