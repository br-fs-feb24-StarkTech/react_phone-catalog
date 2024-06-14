import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { getSuggestedProducts } from '../../services/Products';
import { ProductsSlider } from '../product-slider/ProductSlider';

export const RecommendedGoods = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getSuggestedProducts().then(product => setProducts(product));
  }, []);

  return <ProductsSlider products={products} title="You may also like" />;
};
