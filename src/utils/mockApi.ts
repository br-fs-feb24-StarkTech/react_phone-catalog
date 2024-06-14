import products from '../../public/api/products.json';
import phones from '../../public/api/phones.json';
import tablets from '../../public/api/tablets.json';
import accessories from '../../public/api/accessories.json';
import { ProductType } from '../types/ProductType';
import { ProductDetails } from '../types/ProductDetails';

const productsAll = [...tablets, ...phones, ...accessories];

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
      resolve(productsAll as ProductDetails[]);
    }, 500);
  });
};
