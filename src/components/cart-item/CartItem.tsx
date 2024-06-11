import closeIcon from '/img/icons/close.svg';
import minusIcon from '/img/icons/minus.svg';
import plusIcon from '/img/icons/plus.svg';
import './CartItem.scss';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { CartItemProps } from '../../types/CartItemProps';

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const { removeFromCart, cart, updateCartQuantity } = useAppContext();

  const counterIncrease = () => {
    updateCartQuantity(product.id, 1);
    setQuantity(quantity + 1);
    setTotalCost(cost * (quantity + 1));
  };

  const counterDecrease = () => {
    updateCartQuantity(product.id, -1);
    setQuantity(quantity - 1);
    setTotalCost(cost * (quantity - 1));
  };

  const handleRemoveItem = () => {
    removeFromCart(product.id);
  };

  useEffect(() => {
    cart.filter(cartItem => {
      if (cartItem.product.id === product.id) {
        setQuantity(cartItem.quantity);
        setCost(cartItem.product.price);
        setTotalCost(cartItem.product.price * cartItem.quantity);
      }
    });
  }, []);

  console.log(product.name);

  return (
    <div className="cart-item">
      <div className="display cart-item__display">
        <button
          className="display__close"
          onClick={() => {
            handleRemoveItem();
          }}
        >
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
            <img src={minusIcon} alt="button-minus-desabled" />
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
