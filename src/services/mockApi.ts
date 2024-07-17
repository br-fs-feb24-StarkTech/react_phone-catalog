import { ProductDetails } from '../types/ProductDetails';
import { ProductsResponse } from '../types/ProductsResponse';
import axios from 'axios';
import { ProductType } from '../types/ProductType';

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

export const fetchProductDetails = async (productId?: string) => {
  return await axios.get<ProductDetails>(`${BASE_URL}/products/${productId}`);
};

export const fetchRecommendedProducts = async (productId: string) => {
  return await axios.get<ProductType[]>(`${BASE_URL}/products/${productId}/recommended`);
};
