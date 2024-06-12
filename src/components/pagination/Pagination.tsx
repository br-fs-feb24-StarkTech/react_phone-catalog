import arrowLeft from '/img/icons/arrow-left-color-white.svg';
import arrowRight from '/img/icons/arrow-right-color-white.svg';
import './Pagination.scss';
import { PaginationProps } from '../../types/PaginationProps';
import { usePagination } from '../../hooks/UsePagination';

enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const { paginationRange, showingRange } = usePagination({ totalCount, pageSize, currentPage });

  if (paginationRange.length < 2) {
    return null;
  }

  const handlePageChange = (direction: Direction) => {
    if (direction === Direction.LEFT) {
      if (currentPage === paginationRange[0]) {
        return;
      }
      onPageChange(currentPage - 1);
    } else if (direction === Direction.RIGHT) {
      if (currentPage === paginationRange.length) {
        return;
      }
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <div
        onClick={() => handlePageChange(Direction.LEFT)}
        className={`pagination__button ${currentPage === 1 ? 'pagination__button--disabled' : ''}`}
      >
        <img className="pagination__button__previous" src={arrowLeft} alt="previous-button" />
      </div>

      <ul className="numbers pagination__numbers">
        {showingRange.map(page => {
          if (typeof page === 'string') {
            return <span className="numbers__dots">{page}</span>;
          }
          return (
            <li
              key={page}
              className={`numbers__page ${currentPage === page ? 'numbers__page--active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => handlePageChange(Direction.RIGHT)}
        className={`pagination__button ${currentPage === paginationRange.length ? 'pagination__button--disabled' : ''}`}
      >
        <img className="pagination__button__next" src={arrowRight} alt="next-button" />
      </div>
    </div>
  );
};
