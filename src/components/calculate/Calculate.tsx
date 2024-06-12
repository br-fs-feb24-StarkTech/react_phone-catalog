import React, { useEffect, useState } from 'react';
import '../../components/calculate/Calculate.scss';
import { Modal } from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export const Calculate: React.FC = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  const { clearCart } = useAppContext();

  const handleModal = () => {
    setModalStatus(true);

    setTimeout(() => {
      navigate('/');
      clearCart();
    }, 3000);
  };

  const { calculateTotalPrice, cart } = useAppContext();

  useEffect(() => {
    setTotalPrice(calculateTotalPrice);
    setCartQuantity(cart.length);
  }, [calculateTotalPrice, cart.length]);

  return (
    <div className="calculate">
      <div className="calculate__infos">
        <h2 className="calculate__price">${totalPrice.toLocaleString()}</h2>

        <p className="calculate__description">Total for {cartQuantity} items</p>
      </div>

      <div className="calculate__line"></div>

      <button type="button" className="calculate__button-checkout" onClick={handleModal}>
        Checkout
      </button>

      {modalStatus && <Modal />}
    </div>
  );
};

export default Calculate;
