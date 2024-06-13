import { useEffect, useState } from 'react';
import { Category } from '../../components/category/Category';
import { ProductType } from '../../types/ProductType';
import { fetchProducts } from '../../utils/mockApi';
import { Banner } from '../../components/banner/Banner';


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
      <h1 className="title">Welcome to Nice Gadgets store!</h1>;
      <Banner />
      <Category
        phonesQuantity={phonesQuantity}
        tabletsQuantity={tabletsQuantity}
        accessoriesQuantity={accessoriesQuantity}
      />
    </>
  );
};
