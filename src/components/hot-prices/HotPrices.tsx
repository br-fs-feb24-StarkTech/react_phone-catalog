import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { fetchHotPriceProducts } from '../../services/serviceAPI';
import { ProductsSlider } from '../product-slider/ProductSlider';

export const HotPrices = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchHotPriceProducts().then(product => setProducts(product));
  }, [products]);

  return <ProductsSlider products={products} title="Hot prices" />;
};
