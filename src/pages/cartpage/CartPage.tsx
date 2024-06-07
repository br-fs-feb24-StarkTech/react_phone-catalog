import { useNavigate } from 'react-router-dom';
import './CartPage.scss';
import { Calculate } from '../../components/calculate/Calculate';
import { CartItem } from '../../components/cart-item/CartItem';

export const CartPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__content">
          <div className="cart-page__back-button back-button" onClick={handleBackClick}>
            <div className="cart-page__back-icon back-icon"></div>
          </div>

          <h1 className="cart-page__title title">Cart</h1>

          <div className="cart-page__wrapper-elements">
            <ul className="cart-page__list list">
              <CartItem />
            </ul>

            <Calculate />
          </div>
        </div>
      </div>
    </div>
  );
};
