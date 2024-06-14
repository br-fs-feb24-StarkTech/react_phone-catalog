import products from '../../public/api/products.json';
import phones from '../../public/api/phones.json';
import { ProductType } from '../types/ProductType';
import { ProductDetails } from '../types/ProductDetails';

export const fetchSliderProducts = async (): Promise<ProductType[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.slice(0, 20) as ProductType[]);
    }, 500);
  });
};

export const fetchProducts = async (): Promise<ProductType[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products as ProductType[]);
    }, 500);
  });
};

export const fetchProduct = async (): Promise<ProductDetails[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(phones as ProductDetails[]);
    }, 500);
  });
};
