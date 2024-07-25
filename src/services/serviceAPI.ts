import { ProductDetails } from '../types/ProductDetails';
import { ProductsResponse } from '../types/ProductsResponse';
import axios from 'axios';
import { ProductType } from '../types/ProductType';
import { Favorites } from '../types/Favorites';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async (
  page: number,
  limit: number,
  sort?: string,
  search?: string,
  category?: string,
) => {
  return await axios.get<ProductsResponse>(`${BASE_URL}/products/`, {
    params: {
      page,
      limit,
      sort,
      category,
      search,
    },
  });
};

export const fetchProductDetails = async (productId?: string) => {
  return await axios.get<ProductDetails>(`${BASE_URL}/products/${productId}`);
};

export const fetchRecommendedProducts = async (productId: string) => {
  return await axios.get<ProductType[]>(`${BASE_URL}/products/${productId}/recommended`);
};

export const fetchNewProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get<ProductType[]>(`${BASE_URL}/new-models`);
  return response.data;
};

export const fetchHotPriceProducts = async () => {
  const response = await axios.get<ProductType[]>(`${BASE_URL}/discount-models`);
  return response.data;
};

export const fetchFavorites = async (user: number) => {
  return await axios.get(`${BASE_URL}/favorites/${user}`);
};

export const postFavoritesUser = async (params: Favorites) => {
  return await axios.post(`${BASE_URL}/favorites`, params);
};

export const deleteFavoritesUser = async (userId: number, params: number) => {
  return await axios.delete(`${BASE_URL}/favorites/${userId}?productId=${params}`);
};
