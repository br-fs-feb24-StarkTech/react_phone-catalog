import imgPhone from '/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import closeIcon from '/img/icons/close.svg';
import minusIcon from '/img/icons/minus.svg';
import plusIcon from '/img/icons/plus.svg';
import './CartItem.scss';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

export const CartItem = () => {

  const [itemCost, setItemCost] = useState(0);
  const [counter, setCounter] = useState(1);
  const price = 799;

  const {  totalQuantity,
    setTotalQuantity,
    totalCost,
    setTotalCost,
  } = useAppContext();

  const counterIncrease = () => {
    setCounter(counter + 1);
    setTotalQuantity(totalQuantity + 1);
    setTotalCost(totalCost + price);
  };

  const counterDecrease = () => {
    setCounter(counter - 1);
    setTotalQuantity(totalQuantity - 1);
    setTotalCost(totalCost - price);
  };

  useEffect(() => {
    setItemCost(counter * price);
  }, [counter, price]);

  /*const handleRemoveItem = () => {
    setTotalQuantity(totalQuantity - counter);
  };*/

  return (
    <div className="cart-item">
      <div className="display cart-item__display">
        <div className="display__close">
          <img src={closeIcon} alt="icon-close" />
        </div>

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
