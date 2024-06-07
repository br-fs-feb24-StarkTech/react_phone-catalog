import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { useAppContext } from '../../context/AppContext';

export const Header: React.FC = () => {
  const [selected, setSelected] = useState('Home');
  const [cartCounter, setCartCounter] = useState(3);
  const [favoriteCounter, setFavoriteCounter] = useState(5);
  const location = useLocation();

  const { favorites, cart } = useAppContext();

  const logo = 'img/icons/logo.svg';

  useEffect(() => {
    setFavoriteCounter(favorites.length);
    setCartCounter(cart.length);
  }, [favorites, cart]);

  useEffect(() => {
    const pathname = location.pathname;
    const page =
      pathname === '/' ? 'Home' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    setSelected(page);
  }, [location]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left-part left-part">
            <Link to="/" className="header__logo">
              <img src={logo} alt="logo" />
            </Link>

            <nav className="nav header__nav">
              <ul className="nav__list">
                {['Home', 'Phones', 'Tablets', 'Accessories'].map(page => (
                  <li key={page} className="nav__item">
                    <Link
                      to={`/${page.toLowerCase()}`}
                      className={`nav__link ${selected === page ? 'is-active' : ''}`}
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__right-part right-part">
            <div className="right-part__item-box">
              <Link
                to="/favorite"
                className={`right-part__icon right-part__icon--favorite ${selected === 'Favorite' ? 'is-active' : ''}`}
              >
                {favoriteCounter ? (
                  <div className="right-part__icon--counter">{favoriteCounter}</div>
                ) : (
                  ''
                )}
              </Link>
            </div>

            <div className="right-part__item-box">
              <Link
                to="/cart"
                className={`right-part__icon right-part__icon--cart ${selected === 'Cart' ? 'is-active' : ''}`}
              >
                {cartCounter ? <div className="right-part__icon--counter">{cartCounter}</div> : ''}
              </Link>
            </div>

            <div className="right-part__item-box">
              <Link
                to="/"
                className={`right-part__icon right-part__icon--menu-burger ${selected === 'Menu' ? 'is-active' : ''}`}
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
