import { useEffect, useState } from 'react';
import { ProductsSlider } from '../product-slider/ProductSlider';
import { getNewProducts } from '../../services/Products';
import { ProductType } from '../../types/ProductType';

export const NewModels = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [, setIsLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        setIsLoading(true);
        const newProducts = await getNewProducts();
        setProducts(newProducts);
      } catch (err) {
        console.error('Error fetching new products:', err);
        setError('Failed to load new models. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  return <ProductsSlider products={products} title="Brand new models" />;
};
