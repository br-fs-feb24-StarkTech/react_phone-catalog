import { useEffect, useState } from 'react';
import { ProductsSlider } from '../product-slider/ProductSlider';
import { getNewProducts } from '../../services/Products';
import { ProductType } from '../../types/ProductType';

export const NewModels = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getNewProducts().then(product => setProducts(product));
  }, [products]);

  return <ProductsSlider products={products} title="Brand new models" />;
};
