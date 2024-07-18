import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { ProductsSlider } from '../product-slider/ProductSlider';
import { fetchRecommendedProducts } from '../../services/serviceAPI';
import { RecommendedGoodsProps } from '../../types/RecommendedGoodsProps';

export const RecommendedGoods: React.FC<RecommendedGoodsProps> = ({ productId }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchRecommendedProducts(productId).then(res => setProducts(res.data));
  }, []);

  return <ProductsSlider products={products} title="You may also like" />;
};
