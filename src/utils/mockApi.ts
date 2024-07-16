import phones from '../../public/api/phones.json';
import tablets from '../../public/api/tablets.json';
import accessories from '../../public/api/accessories.json';
import { ProductDetails } from '../types/ProductDetails';
import { ProductsResponse } from '../types/ProductsResponse';
import axios from 'axios';

const productsAll = [...tablets, ...phones, ...accessories];

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async (category: string, page: number, limit: number) => {
  return await axios.get<ProductsResponse>(`${BASE_URL}/products/`, {
    params: {
      category,
      page,
      limit,
    },
  });
};

export const fetchProduct = async (): Promise<ProductDetails[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productsAll as ProductDetails[]);
    }, 500);
  });
};
