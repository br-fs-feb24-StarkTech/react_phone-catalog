import imgPhone from '/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import closeIcon from '/img/icons/close.svg';
import minusIcon from '/img/icons/minus.svg';
import plusIcon from '/img/icons/plus.svg';
import './CartItem.scss';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const CartItem: React.FC<Props> = ({product}) => {

  const [itemCost, setItemCost] = useState(0);
  const [counter, setCounter] = useState(1);

  const {
    removeFromCart,
    totalQuantity,
    setTotalQuantity,
    totalCost,
    setTotalCost,
    cart,
  } = useAppContext();

  const counterIncrease = () => {
    setCounter(counter + 1);
    setTotalQuantity(totalQuantity + 1);
    setTotalCost(totalCost + product.price);
  };

  const counterDecrease = () => {
    setCounter(counter - 1);
    setTotalQuantity(totalQuantity - 1);
    setTotalCost(totalCost - product.price);
  };

  useEffect(() => {
    setItemCost(counter * product.price);
  }, [counter, product.price]);

  const handleRemoveItem = () => {
    removeFromCart(product.id);
  };

  console.log(cart);
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
          <img className="display__img-phone" src={imgPhone} alt="img-phone" />
        </div>

        <p className="display__name">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>
      </div>

      <div className="details cart-item__details">
        <div className="quantity details__quantity">
          <button
            className="quantity__button quantity__button--disabled"
            onClick={counterDecrease}
            disabled={`${counter}` === '1'}
          >
            <img src={minusIcon} alt="button-minus-desabled" />
          </button>

          <span className="quantity__number">{counter}</span>

          <button
            className="quantity__button"
            onClick={counterIncrease}
          >
            <img src={plusIcon} alt="button-plus-default" />
          </button>
        </div>

        <h3 className="details__price">{itemCost}</h3>
      </div>
    </div>
  );
};
