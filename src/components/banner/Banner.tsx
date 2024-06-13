import { useRef, useState, useEffect, useCallback } from 'react';
import './Banner.scss';

const carouselImages = [
  {
    desktop: '/img/banner-promo.png',
    mobile: '/img/banner-promo-mobile.png',
  },
  {
    desktop: '/img/banner-phones.png',
    mobile: '/img/banner-phones-mobile.png',
  },
];

const SWIPE_THRESHOLD = 50;
const AUTO_SCROLL_INTERVAL = 5000;

const debounce = <F extends (...args: unknown[]) => void>(
  func: F,
  wait: number,
): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640);
  const carousel = useRef<HTMLDivElement>(null);
  const lastCarouselItemIndex = carouselImages.length - 1;
  let startX: number | null = null;
  let currentX: number | null = null;

  const updateIsMobileView = useCallback(() => {
    setIsMobileView(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    const handleResize = debounce(updateIsMobileView, 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateIsMobileView]);

  const resetTouchCoordinates = () => {
    startX = null;
    currentX = null;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return;
    currentX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX !== null && currentX !== null) {
      const difference = startX - currentX;
      if (difference > SWIPE_THRESHOLD) {
        handleScrollRight();
      } else if (difference < -SWIPE_THRESHOLD) {
        handleScrollLeft();
      }
    }
    resetTouchCoordinates();
  };

  const scrollToIndex = (index: number) => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: index * carousel.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : lastCarouselItemIndex;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleScrollRight = useCallback(() => {
    const newIndex = (currentIndex + 1) % carouselImages.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  }, [currentIndex]);

  const handleScroll = useCallback(() => {
    if (carousel.current) {
      const newIndex = Math.round(carousel.current.scrollLeft / carousel.current.clientWidth);
      setCurrentIndex(newIndex);
    }
  }, []);

  useEffect(() => {
    const carouselEl = carousel.current;
    if (carouselEl) {
      carouselEl.addEventListener('scroll', handleScroll);
      return () => {
        carouselEl.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleScrollRight();
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [handleScrollRight]);

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel__top-part">
        <button
          className="carousel__button carousel__button-left"
          onClick={handleScrollLeft}
        ></button>

        <div className="carousel__content" ref={carousel}>
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel__item-box">
              <img
                src={isMobileView ? image.mobile : image.desktop}
                alt=""
                className="carousel__item-image"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel__button carousel__button-right"
          onClick={handleScrollRight}
        ></button>
      </div>
      <div className="carousel__bottom-part">
        <div className="carousel__dots">
          {carouselImages.map((_, index) => (
            <div key={index} className={`dot ${index === currentIndex ? 'dot--active' : ''}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
