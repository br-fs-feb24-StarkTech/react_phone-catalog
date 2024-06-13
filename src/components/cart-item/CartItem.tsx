import closeIcon from '/img/icons/close.svg';
import minusIcon from '/img/icons/minus.svg';
import plusIcon from '/img/icons/plus.svg';
import './CartItem.scss';
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { CartItemProps } from '../../types/CartItemProps';

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { removeFromCart, cart, updateCartQuantity } = useAppContext();
  const cartItem = cart.find(cartItem => cartItem.product.id === product.id);

  if (!cartItem) return null;

  const { quantity } = cartItem;

  const counterIncrease = () => {
    updateCartQuantity(product.id, 1);
  };

  const counterDecrease = () => {
    if (quantity > 1) {
      updateCartQuantity(product.id, -1);
    }
  };

  const handleRemoveItem = () => {
    removeFromCart(product.id);
  };

  const totalCost = product.price * quantity;

  return (
    <div className="cart-item">
      <div className="display cart-item__display">
        <button className="display__close" onClick={handleRemoveItem}>
          <img src={closeIcon} alt="icon-close" />
        </button>
        <div className="display__img">
          <img className="display__img-phone" src={product.image} alt="img-phone" />
        </div>
        <p className="display__name">{product.name}</p>
      </div>

      <div className="details cart-item__details">
        <div className="quantity details__quantity">
          <button
            className={`quantity__button ${quantity === 1 ? 'quantity__button--disabled' : ''}`}
            onClick={counterDecrease}
            disabled={quantity === 1}
          >
            <img src={minusIcon} alt="button-minus-disabled" />
          </button>

          <span className="quantity__number">{quantity}</span>

          <button className="quantity__button" onClick={counterIncrease}>
            <img src={plusIcon} alt="button-plus-default" />
          </button>
        </div>
        <h3 className="details__price">{totalCost.toLocaleString()}</h3>
      </div>
    </div>
  );
};
