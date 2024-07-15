import { ProductType } from './ProductType';

export interface ProductsResponse {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  products: ProductType[];
}
