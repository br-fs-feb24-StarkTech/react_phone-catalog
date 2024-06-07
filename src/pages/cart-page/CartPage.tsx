import './CartPage.scss';
import Calculate from '../../components/calculate/Calculate';
import { BackButton } from '../../components/back-button/BackButton';

export const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__content">
          <div className="cart-page__back-button">
            <BackButton />
          </div>

          <h1 className="cart-page__title title">Cart</h1>

          <div className="cart-page__wrapper-elements">
            <ul className="cart-page__list list">
              <li className="cart-page__list-item list-item"></li>
              <li className="cart-page__list-item list-item"></li>
              <li className="cart-page__list-item list-item"></li>
            </ul>

            <Calculate />
          </div>
        </div>
      </div>
    </div>
  );
};
