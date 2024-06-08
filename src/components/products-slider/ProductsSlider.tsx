import { useState } from 'react';
import '../../assets/scss/components/products-slider.scss';

export const ProductsSlider = () => {
    const products = 20;
    const [carouselPosition, setCarouselPosition] = useState(0);
    const cardsPerPage = 4;
    const cardWidth = 272;
    const gapPixels = 16;
  
    const moveCarousel = (direction: 'left' | 'right') => {
      const cardsToMove = 4;
  
      let newPosition;
  
      if (direction === 'left') {
        newPosition = carouselPosition - cardsToMove;
        newPosition = Math.max(newPosition, 0);
      } else {
        newPosition = carouselPosition + cardsToMove;
        newPosition = Math.min(newPosition, products - cardsPerPage);
      }
  
      setCarouselPosition(newPosition);
    };
  
    const isLeftButtonDisabled = carouselPosition === 0;
  
    const isRightButtonDisabled = carouselPosition
      + cardsPerPage >= products;
  
    const carouselStyle = {
      transform: `translateX(-${carouselPosition * (cardWidth + gapPixels)}px)`,
      transition: 'transform 0.5s ease',
    };

  return (
    <section className="slider">
      <div className="slider__container">
        <div className="slider__nav">
          <h2 className="slider__nav-title">Brand new models</h2>

          <div className="slider__nav-buttons">
            <button
              type="button"
              className={`slider__nav-button ${!isLeftButtonDisabled ? "open left" : ""}`}
              disabled={isLeftButtonDisabled}
              onClick={() => moveCarousel('left')}
            >
              <img src={`${isLeftButtonDisabled ? "./img/icons/left.svg" : "./img/icons/arrow-white.svg" }`} alt="up arrow" />
            </button>
            <button
              type="button"
              className={`slider__nav-button ${!isRightButtonDisabled ? "open " : ""}`}
              disabled={isRightButtonDisabled}
              onClick={() => moveCarousel('right')}
            >
              <img src={`${isRightButtonDisabled ? "./img/icons/right.svg" : "./img/icons/arrow-white.svg" }`}  alt="up arrow" />
            </button>
          </div>
        </div>

          <div className="slider__list" style={carouselStyle}>
          </div>
      </div>
    </section>
  );
}