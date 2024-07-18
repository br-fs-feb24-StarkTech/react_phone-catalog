import { ProductDetails } from '../types/ProductDetails';
import { ProductsResponse } from '../types/ProductsResponse';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async (
  category: string,
  page: number,
  limit: number,
  search?: string,
) => {
  return await axios.get<ProductsResponse>(`${BASE_URL}/products/`, {
    params: {
      category,
      page,
      limit,
      search,
    },
  });
};

export const fetchProductDetails = async (productId?: string) => {
  return await axios.get<ProductDetails>(`${BASE_URL}/products/${productId}`);
};
