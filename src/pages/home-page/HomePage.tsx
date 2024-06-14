import { useEffect, useState } from 'react';
import { Category } from '../../components/category/Category';
import { ProductType } from '../../types/ProductType';
import { fetchProducts, fetchSliderProducts } from '../../utils/mockApi';
import { Banner } from '../../components/banner/Banner';
import './HomePage.scss';
import { ProductsSlider } from '../../components/product-slider/ProductSlider';

export const HomePage = () => {
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const [hotProducts, setHotProducts] = useState<ProductType[]>([]);
  const [newModels, setNewModels] = useState<ProductType[]>([]);

  const phonesQuantity = productsList.filter(item => item.category === 'phones').length;

  const tabletsQuantity = productsList.filter(item => item.category === 'tablets').length;

  const accessoriesQuantity = productsList.filter(item => item.category === 'accessories').length;

  useEffect(() => {
    fetchProducts().then(data => {
      setProductsList(data);
    });

    fetchSliderProducts().then(data => {
      setHotProducts(data);
    });

    fetchSliderProducts().then(data => {
      setNewModels(data);
    });
  }, []);

  return (
    <>
      <div className="home-page">
        <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>

        <div className="home-page__banner">
          <Banner />
        </div>

        <div className="home-page__slider">
          <ProductsSlider products={newModels} title={'Brand new models'} />
        </div>

        <div className="home-page__category">
          <Category
            phonesQuantity={phonesQuantity}
            tabletsQuantity={tabletsQuantity}
            accessoriesQuantity={accessoriesQuantity}
          />
        </div>

        <div className="home-page__slider">
          <ProductsSlider products={hotProducts} title={'Hot Prices'} />
        </div>
      </div>
    </>
  );
};
