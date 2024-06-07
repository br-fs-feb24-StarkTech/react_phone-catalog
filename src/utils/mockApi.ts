<<<<<<< HEAD
// src/api/mockApi.ts
=======
>>>>>>> 8d1a53a4eb85cf83d5e71cfe8bb252a16a1e5ee1
import products from '../../public/api/products.json';
import { ProductType } from '../types/ProductType';

export const fetchProducts = async (): Promise<ProductType[]> => {
<<<<<<< HEAD
  // Simulando uma requisição assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products as ProductType[]);
    }, 500); // Simulando um delay de 500ms
=======
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products as ProductType[]);
    }, 500);
>>>>>>> 8d1a53a4eb85cf83d5e71cfe8bb252a16a1e5ee1
  });
};
