import { useRef, useState, useEffect } from 'react';
import './Banner.scss';

const carouselImages = [
  { desktop: '../../../public/img/banner-promo.png', mobile: '../../../public/img/banner-promo-mobile.png' },
  { desktop: '../../../public/img/banner-phones.png', mobile: '../../../public/img/banner-phones-mobile.png' },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const carousel = useRef<HTMLDivElement>(null);
  const lastCarouselItemIndex = carouselImages.length - 1;
  let startX: number | null = null;
  let currentX: number | null = null;

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX) return;
    currentX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX && currentX) {
      const difference = startX - currentX;
      if (difference > 50) {
        scrollRight();
      } else if (difference < -50) {
        scrollLeft();
      }
    }
    startX = null;
    currentX = null;
  };

  const scrollToIndex = (index: number) => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: index * carousel.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    const newIndex = (currentIndex > 0) ? currentIndex - 1 : lastCarouselItemIndex;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = (currentIndex + 1) % carouselImages.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    if (carousel.current) {
      const newIndex = Math.round(carousel.current.scrollLeft / carousel.current.clientWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const carouselEl = carousel.current;
    if (carouselEl) {
      carouselEl.addEventListener('scroll', handleScroll);
      return () => {
        carouselEl.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === lastCarouselItemIndex) {
        setCurrentIndex(0);
        scrollToIndex(0);
      } else {
        scrollRight();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, lastCarouselItemIndex]);

  return (
    <div className="carousel" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className="carousel__top-part">
        <button className="carousel__button carousel__button-left" onClick={scrollLeft}>
        </button>

        <div className="carousel__content" ref={carousel}>
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel__item-box">
              <img
                src={isMobile ? image.mobile : image.desktop}
                alt=""
                className="carousel__item-image"
              />
            </div>
          ))}
        </div>

        <button className="carousel__button carousel__button-right" onClick={scrollRight}>
        </button>
      </div>
      <div className="carousel__bottom-part">
        <div className="carousel__dots">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'dot--active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
