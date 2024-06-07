<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 8d1a53a4eb85cf83d5e71cfe8bb252a16a1e5ee1
import '../../components/calculate/Calculate.scss';
import { Modal } from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export const Calculate: React.FC = () => {
  const navigate = useNavigate();

  const [modalStatus, setModalStatus] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);
  const handleModal = () => {
    setModalStatus(true);

    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const {
    cart,
    totalCost,
  } = useAppContext();

  useEffect(() => {
    setQuantity(cart.length);
  }, []);

  console.log(cart)

  return (
    <div className="calculate">
      <div className="calculate__infos">
        <h2 className="calculate__price">${totalCost}</h2>

        <p className="calculate__description">Total for {quantity} items</p>
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
