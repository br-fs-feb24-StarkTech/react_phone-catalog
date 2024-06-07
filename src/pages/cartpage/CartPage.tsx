import { useNavigate } from 'react-router-dom';
import './CartPage.scss';
import Calculate from '../../components/calculate/Calculate';

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
            <button className="back-button__content">
              <div className="cart-page__back-icon back-icon"></div>
              Back
            </button>

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
