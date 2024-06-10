import './CartPage.scss';

import { BackButton } from '../../components/back-button/BackButton';
import { CartItem } from '../../components/cart-item/CartItem';
import { Calculate } from '../../components/calculate/Calculate';
import { Product } from '../../types/Product';
import { useAppContext } from '../../context/AppContext';

const product: Product = {
  id: 'string',
  category: 'string',
  phoneId: 'string',
  itemId: 'string',
  name: 'string',
  fullPrice: 799,
  price: 799,
  screen: 'string',
  capacity: 'string',
  color: 'string',
  ram: 'string',
  year: 1,
  image: 'string',
};

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
              {cart.length > 0 ?
                <CartItem product={product}/>
                :
                <p className="alert">Nenhum item no carrinho</p>
              }
            </ul>

            <Calculate />
          </div>
        </div>
      </div>
    </div>
  );
};
