import phones from '../../public/api/phones.json';
import tablets from '../../public/api/tablets.json';
import accessories from '../../public/api/accessories.json';
import { ProductDetails } from '../types/ProductDetails';
import { ProductsResponse } from '../types/ProductsResponse';
import axios from 'axios';

const productsAll = [...tablets, ...phones, ...accessories];
const API_URL = 'http://localhost:3005';

export const fetchProducts = async (category: string, page: number, limit: number) => {
  return await axios.get<ProductsResponse>(`${API_URL}/products/`, {
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
