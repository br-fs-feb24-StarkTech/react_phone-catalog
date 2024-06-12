import './CartPage.scss';

import { BackButton } from '../../components/back-button/BackButton';
import { CartItem } from '../../components/cart-item/CartItem';
import { Calculate } from '../../components/calculate/Calculate';
import { useAppContext } from '../../context/AppContext';

export const CartPage = () => {
  const { cart } = useAppContext();

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
              {cart.length > 0 ? (
                cart.map(item => {
                  return (
                    <CartItem
                      key={item.product.id}
                      product={item.product}
                      quantity={item.quantity}
                    />
                  );
                })
              ) : (
                <div className="alert">
                  <img src="./img/cart-is-empty.png" className="alert__img"/>
                  <p className="alert__description">Cart is empty</p>
                </div>
              )}
            </ul>
              <Calculate />
            
          </div>
        </div>
      </div>
    </div>
  );
};
