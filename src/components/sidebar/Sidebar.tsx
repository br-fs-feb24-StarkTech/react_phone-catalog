import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import { useAppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react';

export const Sidebar: React.FC = () => {
  const { favorites, cart, selectedNavItem, setSelectedNavItem, selectedMenu, setSelectedMenu } = useAppContext();
  const [cartCounter, setCartCounter] = useState(3);
  const [favoriteCounter, setFavoriteCounter] = useState(5);
  const location = useLocation();

  useEffect(() => {
    setFavoriteCounter(favorites.length);
    setCartCounter(cart.length);
  }, [favorites, cart]);

  useEffect(() => {
    const pathname = location.pathname;
    const page = pathname === '/' ? 'Home' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    setSelectedNavItem(page);
  }, [location, setSelectedNavItem]);

  useEffect(() => {
    if (selectedMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedMenu]);

  const handleMenuItemClick = (page: string) => {
    setSelectedNavItem(page);
    setSelectedMenu(false);
  };

  return (
    <aside className="menu" id="menu">
      <div className="container">
        <div className="menu__content">
          <nav className="menu-nav menu__nav">
            <ul className="menu-nav__list">
              <li className="menu-nav_item">
                <Link
                  className={`menu-nav__link ${selectedNavItem === 'Home' ? 'is-active' : ''}`}
                  to="/"
                  onClick={() => handleMenuItemClick('Home')}
                >
                  Home
                </Link>
              </li>
              <li className="menu-nav_item">
                <Link
                  className={`menu-nav__link ${selectedNavItem === 'Phones' ? 'is-active' : ''}`}
                  to="/phones"
                  onClick={() => handleMenuItemClick('Phones')}
                >
                  Phones
                </Link>
              </li>
              <li className="menu-nav_item">
                <Link
                  className={`menu-nav__link ${selectedNavItem === 'Tablets' ? 'is-active' : ''}`}
                  to="/tablets"
                  onClick={() => handleMenuItemClick('Tablets')}
                >
                  Tablets
                </Link>
              </li>
              <li className="menu-nav_item">
                <Link
                  className={`menu-nav__link ${selectedNavItem === 'Accessories' ? 'is-active' : ''}`}
                  to="/accessories"
                  onClick={() => handleMenuItemClick('Accessories')}
                >
                  Accessories
                </Link>
              </li>
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
                  {cartCounter ? <div className="bottom-part__icon--counter">{cartCounter}</div> : ''}
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </aside>
  );
};
