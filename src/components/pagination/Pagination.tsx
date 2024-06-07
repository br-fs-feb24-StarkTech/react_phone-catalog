import { PaginationProps } from '../../types/PaginationProps';
import arrowLeft from '/img/icons/arrow-left-color-white.svg';
import arrowRight from '/img/icons/arrow-right-color-white.svg';
import './Pagination.scss';

export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__button pagination__button--disabled">
        <img className="pagination__button__previous" src={arrowLeft} alt="previous-button" />
      </div>

      <ul className="numbers pagination__numbers">
        <li className="numbers__page numbers__page--active">1</li>
        <li className="numbers__page ">2</li>
        <li className="numbers__page">3</li>
        <li className="numbers__page">4</li>
      </ul>

      <div className="pagination__button">
        <img className="pagination__button__next" src={arrowRight} alt="next-button" />
      </div>
    </div>
  );
};
