import axios from 'axios';
import { ProductType } from '../types/ProductType';
import { fetchProducts } from './mockApi';

const BASE_URL = import.meta.env.API_URL;

export const getAllProducts = async (): Promise<ProductType[]> => {
  return fetchProducts();
};

export const getProductsByCategory = async (category: string) => {
  const products = await fetchProducts();

  return products.filter((product: ProductType) => product.category === category);
};

export const getHotPriceProducts = async () => {
  const response = await axios.get<ProductType[]>(`${BASE_URL}}/phones/discount-models`);
  return response.data;
};

export const getNewProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get<ProductType[]>(`${BASE_URL}/products/new-models`);
  return response.data;
};

export const getSuggestedProducts = async () => {
  const products = await fetchProducts();
  const suggestedProducts = ShuffledArray(products);

  return suggestedProducts;
};
