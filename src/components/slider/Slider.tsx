import  React, { useEffect, useState, useRef } from 'react';
import './Slider.scss';
import { ProductType } from '../../types/ProductType';
import { SliderCard } from '../slider-card/SliderCard';
import { CardProps } from '../../types/CardProps';

const products1 = [
  {
    "id": 1,
    "category": "phones",
    "itemId": "apple-iphone-7-32gb-black",
    "name": "Apple iPhone 7 32GB Black",
    "fullPrice": 400,
    "price": 375,
    "screen": "4.7' IPS",
    "capacity": "32GB",
    "color": "black",
    "ram": "2GB",
    "year": 2016,
    "image": "img/phones/apple-iphone-7/black/00.webp"
  },
  {
    "id": 2,
    "category": "phones",
    "itemId": "apple-iphone-7-plus-32gb-black",
    "name": "Apple iPhone 7 Plus 32GB Black",
    "fullPrice": 540,
    "price": 500,
    "screen": "5.5' IPS",
    "capacity": "32GB",
    "color": "black",
    "ram": "3GB",
    "year": 2016,
    "image": "img/phones/apple-iphone-7-plus/black/00.webp"
  },
  {
    "id": 3,
    "category": "phones",
    "itemId": "apple-iphone-8-64gb-gold",
    "name": "Apple iPhone 8 64GB Gold",
    "fullPrice": 600,
    "price": 550,
    "screen": "4.7' IPS",
    "capacity": "64GB",
    "color": "gold",
    "ram": "2GB",
    "year": 2017,
    "image": "img/phones/apple-iphone-8/gold/00.webp"
  },
  ,
  {
    "id": 4,
    "category": "phones",
    "itemId": "apple-iphone-11-64gb-black",
    "name": "Apple iPhone 11 64GB Black",
    "fullPrice": 932,
    "price": 880,
    "screen": "6.1' IPS",
    "capacity": "64GB",
    "color": "black",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11/black/00.webp"
  },
  {
    "id": 5,
    "category": "phones",
    "itemId": "apple-iphone-11-128gb-yellow",
    "name": "Apple iPhone 11 128GB Yellow",
    "fullPrice": 1100,
    "price": 1050,
    "screen": "6.1' IPS",
    "capacity": "128GB",
    "color": "yellow",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11/yellow/00.webp"
  },
  {
    "id": 6,
    "category": "phones",
    "itemId": "apple-iphone-11-256gb-green",
    "name": "Apple iPhone 11 256GB Green",
    "fullPrice": 1172,
    "price": 1115,
    "screen": "6.1' IPS",
    "capacity": "256GB",
    "color": "green",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11/green/00.webp"
  },
  {
    "id": 7,
    "category": "phones",
    "itemId": "apple-iphone-11-pro-64gb-gold",
    "name": "Apple iPhone 11 Pro 64GB Gold",
    "fullPrice": 1312,
    "price": 1270,
    "screen": "5.8' OLED",
    "capacity": "64GB",
    "color": "gold",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11-pro/gold/00.webp"
  },
  {
    "id": 8,
    "category": "phones",
    "itemId": "apple-iphone-11-pro-256gb-midnightgreen",
    "name": "Apple iPhone 11 Pro 256GB Midnight green",
    "fullPrice": 1640,
    "price": 1570,
    "screen": "5.8' OLED",
    "capacity": "256GB",
    "color": "midnightgreen",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11-pro/midnightgreen/00.webp"
  },
  {
    "id": 9,
    "category": "phones",
    "itemId": "apple-iphone-11-pro-512gb-silver",
    "name": "Apple iPhone 11 Pro 512GB Silver",
    "fullPrice": 1880,
    "price": 1780,
    "screen": "5.8' OLED",
    "capacity": "512GB",
    "color": "silver",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11-pro/silver/00.webp"
  },
  {
    "id": 10,
    "category": "phones",
    "itemId": "apple-iphone-11-pro-max-64gb-spacegray",
    "name": "Apple iPhone 11 Pro Max 64GB Spacegray",
    "fullPrice": 1480,
    "price": 1400,
    "screen": "6.5' OLED",
    "capacity": "64GB",
    "color": "spacegray",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11-pro-max/spacegray/00.webp"
  }
];

export const Carousel: React.FC<CardProps> = ( products1 ) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [data, setData] = useState<ProductType[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    // fetch('http://localhost:5173/api/products.json')
    //   .then(res => res.json())
    //   .then(setData);
    setData(products1);
  }, []);

  const getCardWidth = (): number => {
    const carouselWidth = carouselRef.current?.offsetWidth || 0;
    console.log(carouselWidth);
    
    const gridGap = 16; // Margem entre os cartões

    if (carouselWidth >= 1200) {
      return ((carouselWidth) - 48 - gridGap * 4) / 4; // Subtraímos a margem de cada lado e entre os cartões
    } else if (carouselWidth >= 640) {
      return (carouselWidth - 32 - gridGap * 2.3) / 2.3;
    } else {
      return (carouselWidth - 16 - gridGap * 1.3) / 1.3;
    }
  };

  const getMaxScrollPosition = (): number => {
    const cardWidth = getCardWidth();
    const visibleCards = Math.floor((carouselRef.current?.offsetWidth || 0) / cardWidth);

    const totalCards = data.length;
    const maxVisibleIndex = totalCards - visibleCards;

    const maxScroll = maxVisibleIndex * cardWidth;

    return Math.max(maxScroll, 0);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const cardWidth = getCardWidth();
    if (direction === 'left') {
      setScrollPosition(Math.max(scrollPosition - cardWidth, 0));
    } else {
      setScrollPosition(Math.min(scrollPosition + cardWidth, getMaxScrollPosition()));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollPosition(Math.min(scrollPosition, getMaxScrollPosition()));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [data, scrollPosition]);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const deltaX = touchEndX - touchStartX;
      if (deltaX > 50) {
        handleScroll('left');
      } else if (deltaX < -50) {
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

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-header__title title">Product Carousel</h2>

        <div className="carousel-header__buttons">
          <button
            className={`carousel-button left ${scrollPosition === 0 ? 'disabled' : ''}`}
            onClick={() => handleScroll('left')}
          />
          <button
            className={`carousel-button right ${scrollPosition >= getMaxScrollPosition() ? 'disabled' : ''}`}
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
