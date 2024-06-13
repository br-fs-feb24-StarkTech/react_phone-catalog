import './PhonesPage.scss';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';
import { Pagination } from '../../components/pagination/Pagination';
import { fetchProducts } from '../../utils/mockApi';
import { useEffect, useState, useMemo } from 'react';
import { ProductType } from '../../types/ProductType';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';

const DEFAULT_PAGE_SIZE = 16;

const PhonesPage = () => {
  const [phones, setPhones] = useState<ProductType[]>([]);
  const [sortedPhones, setSortedPhones] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [sortByVisible, setSortByVisible] = useState(false);
  const [pageByVisible, setPageByVisible] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const sortType = searchParams.get('sort') || 'year';
  const query = searchParams.get('query') || '';

  const history = useNavigate();

  const sortOptions = [
    { value: 'year', text: 'Newest' },
    { value: 'name', text: 'Alphabetically' },
    { value: 'price', text: 'Cheapest' },
  ];

  const pageOptions = [8, 12, 16, 20];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortBy = () => {
    setSortByVisible(!sortByVisible);
  };

  const handlePageBy = () => {
    setPageByVisible(!pageByVisible);
  };

  const changePageSize = (size: number) => {
    setPageByVisible(false);
    setPageSize(size);
  };

  const handleSortChange = (value: string) => {
    searchParams.set('sort', value);
    history({ search: searchParams.toString() });
  };

  useEffect(() => {
    fetchProducts().then(data => {
      setPhones(data.filter(product => product.category === 'phones'));
    });
  }, []);

  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    const pattern = new RegExp(lowerQuery, 'i');
    const filteredPhones = phones.filter(item => pattern.test(item.name));

    const sorted = [...filteredPhones].sort((a, b) => {
      if (sortType === 'name') return a.name.localeCompare(b.name);
      if (sortType === 'year') return b.year - a.year;
      if (sortType === 'price') return a.price - b.price;
      return 0;
    });

    setSortedPhones(sorted);
  }, [phones, sortType, query]);

  const currentPhones = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedPhones.slice(startIndex, startIndex + pageSize);
  }, [sortedPhones, currentPage, pageSize]);

  const selectedSortOption =
    sortOptions.find(option => option.value === sortType)?.text || 'Newest';

  return (
    <div className="products__container products container">
      <BreadCrumbs />
      <h1 className="products__title">Mobile phones</h1>
      <p className="products__quantity">
        <span className="products__quantityText">{phones.length} models</span>
      </p>

      <div className="products__filter filter">
        <div className="filter_sortBy sortBy">
          <p className="sortBy__legend">Sort by</p>
          <button className="sortBy__select" onClick={handleSortBy}>
            <div className="sortBy__select-label">{selectedSortOption}</div>
            <div className={`sortBy__select-icon ${sortByVisible ? 'icon-active' : ''}`}></div>
          </button>
          <div className={`sortBy__content ${sortByVisible ? 'block' : ''}`}>
            <ul className="sortBy__list">
              {sortOptions.map(item => (
                <li
                  key={item.value}
                  className={`sortBy__item ${selectedSortOption === item.text ? 'active' : ''}`}
                  onClick={() => handleSortChange(item.value)}
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
            <div className={`pageBy__select-icon ${pageByVisible ? 'icon-active' : ''}`}></div>
          </button>
          <div className={`pageBy__content ${pageByVisible ? 'block-page' : ''}`}>
            <ul className="pageBy__list">
              {pageOptions.map(size => (
                <li
                  key={size}
                  className={`pageBy__item ${pageSize === size ? 'active' : ''}`}
                  onClick={() => changePageSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ul className="products__list">
        {currentPhones.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </ul>

      <Pagination
        totalCount={sortedPhones.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PhonesPage;
