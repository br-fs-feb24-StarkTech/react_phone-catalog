import { Link } from 'react-router-dom';
import './SidebarRefactor.scss';

export const Sidebar: React.FC = () => {
  return (
    <aside className="page__menu menu" id="menu">
      <div className="container">

        <div className="menu__bottom">
          <nav className="menu-nav menu__nav">
            <ul className="menu-nav__list">
              <li className="menu-nav_item">
                <Link className="menu-nav__link menu-nav__link right-part__icon right-part__icon--close ${selected === 'Close' ? 'is-active' : ''}" to="#">Home</Link>
              </li>

              <li className="menu-nav_item">
                <Link className="menu-nav__link menu-nav__link right-part__icon right-part__icon--close ${selected === 'Close' ? 'is-active' : ''}" to="#recommended">Phones</Link>
              </li>

              <li className="menu-nav_item">
                <Link className={`menu-nav__link menu-nav__link right-part__icon right-part__icon--close ${selected === 'Close' ? 'is-active' : ''}`} to="#categories">tablets</Link>
              </li>

              <li className="menu-nav_item">
                <Link className="menu-nav__link menu-nav__link right-part__icon right-part__icon--close ${selected === 'Close' ? 'is-active' : ''}" to="#how-to-buy">accessories</Link>
              </li>

            </ul>
          </nav>
        </div>

      </div>
    </aside>
  );
}