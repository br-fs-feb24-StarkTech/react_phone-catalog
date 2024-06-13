import { useEffect, useState } from 'react';
import { ProductsSlider } from '../product-slider/ProductSlider';
import { ProductType } from '../../types/ProductType';
import { getHotPriceProducts } from '../../services/Products';

export const HotPrices = () => {
  const [products, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    getHotPriceProducts().then(product => setProduct(product));
  }, []);

  return <ProductsSlider products={products} title="Hot prices" />;
};
