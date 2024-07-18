import React, { useEffect, useState } from 'react';
import './ProductSlider.scss';
import { ProductType } from '../../types/ProductType';
import { useSwipeable } from 'react-swipeable';
import { Card } from '../card/Card';
import arrowLeft from '/img/icons/arrow-left-default.svg';
import arrowRight from '/img/icons/arrow-right-default.svg';

type Props = {
  products: ProductType[] | undefined;
  title: string;
  isHomePage?: boolean;
};

export const ProductsSlider: React.FC<Props> = ({ products = [], title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  const updateVisibleCardsCount = () => {
    const cardsPer640px = 2;
    const width = window.innerWidth;
    const totalCardsPerWidth = Math.floor((width / 640) * cardsPer640px);

    setVisibleCardsCount(Math.max(1, totalCardsPerWidth));
  };

  useEffect(() => {
    updateVisibleCardsCount();
    window.addEventListener('resize', updateVisibleCardsCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCardsCount);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex =>
      Math.min(prevIndex + 1, (products?.length ?? 0) - visibleCardsCount),
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === (products?.length ?? 0) - visibleCardsCount;

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
  });

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="products-carousel">No products available</div>;
  }

  return (
    <div className="products-carousel" {...handlers}>
      <div className="navigation products-carousel__navigation">
        <h2 className="navigation__title">{title}</h2>

        <div className="directions navigation__directions">
          <div
            className={`directions__button ${isPrevDisabled ? 'directions__button--disabled' : ''}`}
            onClick={handlePrevClick}
          >
            <img className="directions__button-left" src={arrowLeft} alt="chevron-left" />
          </div>

          <div
            className={`directions__button ${isNextDisabled ? 'directions__button--disabled' : ''}`}
            onClick={handleNextClick}
          >
            <img className="directions__button-right" src={arrowRight} alt="chevron-right" />
          </div>
        </div>
      </div>

      <div className="products-carousel__products">
        {products.map(product => (
          <div
            className="products-carousel__product"
            key={product.id}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`,
            }}
          >
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
