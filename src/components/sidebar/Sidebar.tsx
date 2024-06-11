// src/components/Sidebar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { useAppContext } from '../../context/AppContext';
import { useHandleMenuItemClick } from '../../hooks/useHandleMenuItemClick';

export const Sidebar: React.FC = () => {
  const { favorites, cart, selectedNavItem, selectedMenu } = useAppContext();
  const [cartCounter, setCartCounter] = useState(3);
  const [favoriteCounter, setFavoriteCounter] = useState(5);

  const handleMenuItemClick = useHandleMenuItemClick();

  useEffect(() => {
    setFavoriteCounter(favorites.length);
    setCartCounter(cart.length);
  }, [favorites, cart]);

  useEffect(() => {
    if (selectedMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedMenu]);

  return (
    <aside className="menu" id="menu">
      <div className="container">
        <div className="menu__content">
          <nav className="menu-nav menu__nav">
            <ul className="menu-nav__list">
              {['Home', 'Phones', 'Tablets', 'Accessories'].map(page => (
                <li key={page} className="menu-nav_item">
                  <Link
                    className={`menu-nav__link ${selectedNavItem === page ? 'is-active' : ''}`}
                    to={`/${page.toLowerCase()}`}
                    onClick={() => handleMenuItemClick(page)}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu__bottom-part bottom-part">
            <div className="bottom-part__item-box">
              <Link
                to="/favorite"
                className={`bottom-part__icon ${selectedNavItem === 'Favorite' ? 'is-active' : ''}`}
                onClick={() => handleMenuItemClick('Favorite')}
              >
                <div className="bottom-part__icon--favorite icon-wrapper">
                  {favoriteCounter ? (
                    <div className="bottom-part__icon--counter">{favoriteCounter}</div>
                  ) : (
                    ''
                  )}
                </div>
              </Link>
            </div>

            <div className="bottom-part__item-box">
              <Link
                to="/cart"
                className={`bottom-part__icon ${selectedNavItem === 'Cart' ? 'is-active' : ''}`}
                onClick={() => handleMenuItemClick('Cart')}
              >
                <div className="bottom-part__icon--cart icon-wrapper">
                  {cartCounter ? (
                    <div className="bottom-part__icon--counter">{cartCounter}</div>
                  ) : (
                    ''
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
