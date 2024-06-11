import React, { useEffect, useState, useRef } from 'react';
import './Slider.scss';
import { ProductType } from '../../types/ProductType';
import { SliderCard } from '../slider-card/SliderCard';

export const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [data, setData] = useState<ProductType[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    fetch('http://localhost:5173/api/products.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const deltaX = touchEndX - touchStartX;

      if (deltaX > 200) { 
        handleScroll('left');
      } else if (deltaX < -200) { 
        handleScroll('right');
      }
    };

    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchmove', handleTouchMove);
      carousel.addEventListener('touchend', handleTouchEnd);

      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
        carousel.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [scrollPosition]);

  if (!data || !data.length) {
    return null;
  }

  const maxScrollPosition = (data.length - 1) * 260;

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setScrollPosition(Math.max(scrollPosition - 288, 0));
    } else {
      setScrollPosition(Math.min(scrollPosition + 288, maxScrollPosition));
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

      <div className="carousel" ref={carouselRef}>
        <ul className="carousel-grid" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {data.map((product, index) => (
            <SliderCard key={index} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};
