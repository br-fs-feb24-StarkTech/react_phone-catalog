import { useEffect, useState } from 'react';
import { Category } from '../../components/category/Category';
import { ProductType } from '../../types/ProductType';
import { fetchProducts } from '../../utils/mockApi';

export const HomePage = () => {
  const [productsList, setProductsList] = useState<ProductType[]>([]);

  const phonesQuantity = productsList.filter(item => item.category === 'phones').length;

  const tabletsQuantity = productsList.filter(item => item.category === 'tablets').length;

  const accessoriesQuantity = productsList.filter(item => item.category === 'accessories').length;

  useEffect(() => {
    fetchProducts().then(data => {
      setProductsList(data);
    });
  }, []);

  return (
    <>
      <h1 className="title">Phone Catalog</h1>;
      <Category
        phonesQuantity={phonesQuantity}
        tabletsQuantity={tabletsQuantity}
        accessoriesQuantity={accessoriesQuantity}
      />
    </>
  );
};
