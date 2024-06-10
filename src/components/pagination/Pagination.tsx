import arrowLeft from '/img/icons/arrow-left-color-white.svg';
import arrowRight from '/img/icons/arrow-right-color-white.svg';
import './Pagination.scss';
import { PaginationProps } from '../../types/PaginationProps';
import { usePagination } from '../../hooks/UsePagination';

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const paginationRange = usePagination({ totalCount, pageSize, currentPage });

  if (paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < paginationRange.length) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <div
        onClick={onPrevious}
        className={`pagination__button ${currentPage === 1 ? 'pagination__button--disabled' : ''}`}
      >
        <img className="pagination__button__previous" src={arrowLeft} alt="previous-button" />
      </div>

      <ul className="numbers pagination__numbers">
        {paginationRange.map(pageNumber => (
          <li
            key={pageNumber}
            className={`numbers__page ${currentPage === pageNumber ? 'numbers__page--active' : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>

      <div
        onClick={onNext}
        className={`pagination__button ${currentPage === paginationRange.length ? 'pagination__button--disabled' : ''}`}
      >
        <img className="pagination__button__next" src={arrowRight} alt="next-button" />
      </div>
    </div>
  );
};
