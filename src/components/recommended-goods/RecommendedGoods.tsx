import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { getSuggestedProducts } from '../../services/Products';
import { ProductsSlider } from '../product-slider/ProductSlider';

export const RecommendedGoods = () => {
  const [products, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    getSuggestedProducts().then(product => setProduct(product));
  }, [products]);

  return <ProductsSlider products={products} title="You may also like" />;
};
