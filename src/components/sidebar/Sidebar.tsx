import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import { useAppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react';

export const Sidebar: React.FC = () => {
  const { favorites, cart, selectedNavItem, setSelectedNavItem, selectedMenu } = useAppContext();
  const [selected, setSelected] = useState('Home');
  const [cartCounter, setCartCounter] = useState(3);
  const [favoriteCounter, setFavoriteCounter] = useState(5);
  const location = useLocation();

  useEffect(() => {
    setFavoriteCounter(favorites.length);
    setCartCounter(cart.length);
  }, [favorites, cart]);

  useEffect(() => {
    const pathname = location.pathname;
    const page =
      pathname === '/' ? 'Home' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    setSelected(page);
    setSelectedNavItem(selected);
  }, [location]);

  useEffect(() => {
    if (selectedMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedMenu]);

  return (
    <aside className="page__menu menu" id="menu">
      <div className="container">
        <div className="menu__bottom">
          <nav className="menu-nav menu__nav">
            <ul className="menu-nav__list">
              <li className="menu-nav_item">
                <Link className={`menu-nav__link menu-nav__link ${selectedNavItem === 'Home' ? 'is-active' : ''}`} to="/">Home</Link>
              </li>
              <li className="menu-nav_item">
                <Link className={`menu-nav__link menu-nav__link ${selectedNavItem === 'Phones' ? 'is-active' : ''}`} to="/phones">Phones</Link>
              </li>
              <li className="menu-nav_item">
                <Link className={`menu-nav__link menu-nav__link ${selectedNavItem === 'Tablets' ? 'is-active' : ''}`} to="/tablets">Tablets</Link>
              </li>
              <li className="menu-nav_item">
                <Link className={`menu-nav__link menu-nav__link ${selectedNavItem === 'Accessories' ? 'is-active' : ''}`} to="/accessories">Accessories</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};
