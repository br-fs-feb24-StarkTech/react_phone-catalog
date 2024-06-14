import { useEffect, useState } from 'react';
import './BackToTopButton.scss';
import arrowUp from '/img/icons/arrow-up.svg';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? '' : 'back-to-top--invisible'}`}
    >
      <img src={arrowUp} alt="Back to top" />
    </button>
  );
};
