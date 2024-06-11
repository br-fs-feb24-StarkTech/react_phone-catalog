import './PhonesPage.scss';
import Card from '../../components/card/Card';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';
import { fetchProducts } from '../../utils/mockApi';
import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';

const PhonesPage = () => {

  const [phones, setPhones] = useState<ProductType[]>([]);

  useEffect( () => {
    fetchProducts()
      .then(data => {
        setPhones(data.filter((product: ProductType) => product.category === 'phones'));
      });
  }, []);

  return (
    <>
      <div className="products__container products container">
        <BreadCrumbs />
        <h1 className="products__title">Mobile phones</h1>
        <p className="products__quantity">
          <span className="products__quantityText">97 models</span>
        </p>

        <div className="products__filter filter">
          <div className="filter_sortBy sortBy">
            <p className="sortBy__legend">Sort by</p>
            <div className="sortBy__select"></div>
          </div>

          <div className="sortBy">
            <p className="sortBy__legend">Items on page</p>

            <div className="perPage__select">
              <div className="perPage__options-wrapper">
                <div className="perPage__option"></div>
              </div>
            </div>
          </div>
        </div>

        <ul className="products__list">
          {phones.map(product => {
            return <Card key={product.id} product={product} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default PhonesPage;
