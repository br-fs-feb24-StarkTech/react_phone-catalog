import React, { useEffect, useState } from 'react';
import './ProductSlider.scss';
import { ProductType } from '../../types/ProductType';
// import { ProductCard } from '../ProductCard'; OU SÓ CARD, ESTOU CONFUSO!!!
import { useSwipeable } from 'react-swipeable';

type Props = {
  products: ProductType[];
  title: string;
  isHomePage?: boolean;
};

export const ProductsSlider: React.FC<Props> = ({ products, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  const updateVisibleCardsCount = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setVisibleCardsCount(1);
    } else if (width >= 640 && width < 1200) {
      setVisibleCardsCount(2);
    } else {
      setVisibleCardsCount(4);
    }
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
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, products.length - visibleCardsCount));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === products.length - visibleCardsCount;

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
  });

  return (
    <div className={ADICIONAR_CLASSE} {...handlers}>
      <div className={ADICIONAR_CLASSE}>
        <h2 className={ADICIONAR_CLASSE}>{title}</h2>
        <div className={ADICIONAR_CLASSE}>
          <button
            onClick={handlePrevClick}
            className={classNames(ADICIONAR_CLASSE, {
              [ADICIONAR_CLASSE.isDisabled]: isPrevDisabled,
            })}
            disabled={isPrevDisabled}
          >
            <img src={ADICIONAR_IMAGEM} alt="chevron left" className={ADICIONAR_CLASSE} />
          </button>

          <button
            onClick={handleNextClick}
            className={classNames(ADICIONAR_CLASSE, {
              [ADICIONAR_CLASSE.isDisabled]: isNextDisabled,
            })}
            disabled={isNextDisabled}
          >
            <img src={ADICIONAR_IMAGEM} alt="chevron right" className={ADICIONAR_CLASSE} />
          </button>
        </div>
      </div>

      <div className={ADICIONAR_CLASSE}>
        {products.map(product => (
          <div
            key={product.id}
            className={ADICIONAR_CLASSE}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`,
            }}
          >
            <ProductCard OU_CARD??? product={product} /> 
          </div>
        ))}
      </div>
    </div>
  );
};
