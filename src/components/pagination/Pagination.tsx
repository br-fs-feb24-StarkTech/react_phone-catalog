import arrowLeft from '/img/icons/arrow-left-color-white.svg';
import arrowRight from '/img/icons/arrow-right-color-white.svg';
import './Pagination.scss';
import { PaginationProps } from '../../types/PaginationProps';
import { usePagination } from '../../hooks/UsePagination';
import { useCallback } from 'react';

enum Direction {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const { paginationRange, showingRange } = usePagination({ totalCount, pageSize, currentPage });

  // Memoized handlePageChange function
  const handlePageChange = useCallback(
    (direction: Direction) => {
      if (direction === Direction.LEFT) {
        if (currentPage > paginationRange[0]) {
          onPageChange(currentPage - 1);
        }
      } else if (direction === Direction.RIGHT) {
        if (currentPage < paginationRange[paginationRange.length - 1]) {
          onPageChange(currentPage + 1);
        }
      }
    },
    [currentPage, paginationRange, onPageChange],
  );

  // Return null if there's no need for pagination
  if (paginationRange.length < 2) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(Direction.LEFT)}
        className={`pagination__button ${currentPage === paginationRange[0] ? 'pagination__button--disabled' : ''}`}
        aria-disabled={currentPage === paginationRange[0]}
        aria-label="Previous page"
      >
        <img className="pagination__button__previous" src={arrowLeft} alt="previous-button" />
      </button>

      <ul className="numbers pagination__numbers">
        {showingRange.map((page, index) => {
          if (typeof page === 'string') {
            return (
              <span key={`dots-${index}`} className="numbers__dots">
                {page}
              </span>
            );
          }
          return (
            <li
              key={`page-${page}`}
              className={`numbers__page ${currentPage === page ? 'numbers__page--active' : ''}`}
              onClick={() => onPageChange(page)}
              role="button"
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => handlePageChange(Direction.RIGHT)}
        className={`pagination__button ${currentPage === paginationRange[paginationRange.length - 1] ? 'pagination__button--disabled' : ''}`}
        aria-disabled={currentPage === paginationRange[paginationRange.length - 1]}
        aria-label="Next page"
      >
        <img className="pagination__button__next" src={arrowRight} alt="next-button" />
      </button>
    </div>
  );
};
