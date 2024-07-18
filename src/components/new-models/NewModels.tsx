import { useEffect, useState } from 'react';
import { ProductsSlider } from '../product-slider/ProductSlider';
import { fetchNewProducts } from '../../services/serviceAPI';
import { ProductType } from '../../types/ProductType';

export const NewModels = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchNewProducts().then(product => setProducts(product));
  }, [products]);

  return <ProductsSlider products={products} title="Brand new models" />;
};
