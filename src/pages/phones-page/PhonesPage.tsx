import './PhonesPage.scss';
import Card from '../../components/card/Card';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';
import { Pagination } from '../../components/pagination/Pagination';
import { fetchProducts } from '../../utils/mockApi';
import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';

const DEFAULT_PAGE_SIZE = 16;

const PhonesPage = () => {
  const [phones, setPhones] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    fetchProducts().then(data => {
      setPhones(data.filter((product: ProductType) => product.category === 'phones'));
    });
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentPhones = phones.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className="products__container products container">
        <BreadCrumbs />
        <h1 className="products__title">Mobile phones</h1>
        <p className="products__quantity">
          <span className="products__quantityText">{phones.length} models</span>
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
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                  <option value={16}>{`16 (default)`}</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <ul className="products__list">
          {currentPhones.map(product => {
            return <Card key={product.id} product={product} />;
          })}
        </ul>

        <Pagination
          totalCount={phones.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default PhonesPage;
