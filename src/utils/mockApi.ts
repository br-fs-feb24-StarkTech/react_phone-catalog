// src/api/mockApi.ts
import products from '../../public/api/products.json';
import { ProductType } from '../types/ProductType';

export const fetchProducts = async (): Promise<ProductType[]> => {
  // Simulando uma requisição assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products as ProductType[]);
    }, 500); // Simulando um delay de 500ms
  });
};
