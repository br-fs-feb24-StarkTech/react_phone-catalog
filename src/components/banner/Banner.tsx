import { useRef, useState, useEffect } from 'react';
import './Banner.scss';

const carouselImages = [
  { desktop: '../../../public/img/banner-promo.png', mobile: '../../../public/img/banner-promo-mobile.png' },
  { desktop: '../../../public/img/banner-phones.png', mobile: '../../../public/img/banner-promo-mobile.png' },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const carousel = useRef<HTMLDivElement>(null);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const scrollLeft = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: -carousel.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: carousel.current.clientWidth,
        behavior: 'smooth'
      });
    }
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

  return (
    <div className="carousel">
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
