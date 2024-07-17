import './PhonesPage.scss';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';
import { Pagination } from '../../components/pagination/Pagination';
import { fetchProducts } from '../../utils/mockApi';
import { useEffect, useMemo, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import { SkeletonCard } from '../../components/skeleton-card/SkeletonCard';

const DEFAULT_PAGE_SIZE = 16;

const PhonesPage = () => {
  const [phones, setPhones] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [sortBy, setSortBy] = useState(false);
  const [pageBy, setPageBy] = useState(false);
  const [selectSortType, setSelectSortType] = useState<string>('Newest');
  const [sortValue, setSortValue] = useState('year');
  const [skeleton, setSkeleton] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const searchParams = useMemo(() => new URLSearchParams(location.search), []);

  const history = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const sortOption = useMemo(
    () => [
      { value: 'year', text: 'Newest' },
      { value: 'name', text: 'Alphabetically' },
      { value: 'price', text: 'Cheapest' },
    ],
    [],
  );

  const pageOption = [{ value: 8 }, { value: 12 }, { value: 16 }, { value: 20 }];

  const handleSortBy = () => {
    setSortBy(!sortBy);
  };

  const handlePageBy = () => {
    setPageBy(!pageBy);
  };

  const handlePageSizeChange = (value: number) => {
    setPageBy(!pageBy);
    setPageSize(Number(value));
  };

  useEffect(() => {
    setSkeleton(true);
    fetchProducts('phones', currentPage, pageSize, sortValue)
      .then(res => {
        setTotalPages(res.data.totalPages);
        setPhones(res.data.products);
      })
      .finally(() => {
        setSkeleton(false);
      });
  }, [currentPage, pageSize, sortValue]);

  useEffect(() => {
    if (searchParams.get('sortType')) {
      setSelectSortType(
        sortOption.filter(item => item.value === searchParams.get('sortType'))[0].text,
      );
    }
  }, [searchParams, sortOption]);

  const handleSortProduct2 = (value: string, text: string) => {
    setSelectSortType(text);
    setSortValue(value);
    setSortBy(false);
    searchParams.set('sort', value);
    history({
      search: searchParams.toString(),
    });
  };

  return (
    <>
      <div className="products__container products container">
        <BreadCrumbs />
        <h1 className="products__title">Mobile phones</h1>
        <p className="products__quantity">
          <span className="products__Text">{phones.length} models</span>
        </p>

        <div className="products__filter filter">
          <div className="filter_sortBy sortBy">
            <p className="sortBy__legend">Sort by</p>
            <button className="sortBy__select" onClick={handleSortBy}>
              <div className="sortBy__select-label">
                {selectSortType ? selectSortType : 'Newest'}
              </div>

              <div className={`sortBy__select-icon ${sortBy ? 'icon-active' : ''}`}></div>
            </button>

            <div className="sortBy__content">
              <ul className={`sortBy__list ${sortBy ? 'block' : ''}`}>
                {sortOption.map(item => (
                  <li
                    key={item.value}
                    className={`sortBy__item ${selectSortType === item.text ? 'active' : ''}`}
                    onClick={() => {
                      handleSortProduct2(item.value, item.text);
                    }}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pageBy">
            <p className="pageBy__legend">Items on page</p>

            <button className="pageBy__select" onClick={handlePageBy}>
              <div className="pageBy__select-label">{pageSize}</div>
              <div className={`pageBy__select-icon ${pageBy ? 'icon-active' : ''}`}></div>
            </button>

            <div className="pageBy__content">
              <ul className={`pageBy__list ${pageBy ? 'block-page' : ''}`}>
                {pageOption.map(item => (
                  <li
                    key={item.value}
                    className={`pageBy__item ${pageSize === item.value ? 'active' : ''}`}
                    onClick={() => handlePageSizeChange(item.value)}
                  >
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ul className="products__list">
          {skeleton ? (
            <SkeletonCard />
          ) : (
            phones.map(product => {
              return <Card key={product.id} product={product} />;
            })
          )}
        </ul>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default PhonesPage;
