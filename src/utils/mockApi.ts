import products from '../../public/api/products.json';
import phones from '../../public/api/phones.json';
import { ProductProps } from '../types/ProductProps';
import { ProductType } from '../types/ProductType';

export const fetchProducts = async (): Promise<ProductType[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products as ProductType[]);
    }, 500);
  });
};

export const fetchProduct = async (): Promise<ProductProps[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(phones as ProductProps[]);
    }, 500);
  });
};