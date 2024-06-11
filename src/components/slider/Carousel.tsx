import { useEffect, useState } from 'react';
import './Carousel.scss';
import { ProductType } from '../../types/ProductType';
import { SliderCard } from '../slider-card/SliderCard';



export const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('http://localhost:5173/api/products.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) {
    return null;
  }

  const maxScrollPosition = (data.length - 1) * 200;

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setScrollPosition(Math.max(scrollPosition - 200, 0));
    } else {
      setScrollPosition(Math.min(scrollPosition + 200, maxScrollPosition));
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2 className='carousel-header__title title'>Product Carousel</h2>

        <div className="carousel-header__buttons">
          <button
            className={`carousel-button left ${scrollPosition === 0 ? 'disabled' : ''}`}
            onClick={() => handleScroll('left')}
          />
          <button
            className={`carousel-button right ${scrollPosition === maxScrollPosition ? 'disabled' : ''}`}
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>

      <div className="carousel">
        <ul className="carousel-grid" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {data.map((product, index) => (
            <SliderCard key={index} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};


