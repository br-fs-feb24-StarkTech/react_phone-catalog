import React, { SetStateAction, useEffect, useState } from 'react';
import '../../components/calculate/Calculate.scss';
import { Modal } from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export const Calculate: React.FC = () => {
  const navigate = useNavigate();
  const price = 799;

  const [modalStatus, setModalStatus] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [totalCost, setTotalCost] = useState(0);
  const handleModal = () => {
    setModalStatus(true);

    setTimeout(() => {
      navigate('/');
    }, 5000);
  }

  const {
    updateCartQuantity,
    calculateTotalPrice
  } = useAppContext();

  useEffect(() => {
    setQuantity(updateCartQuantity.length);
    setTotalCost(calculateTotalPrice);
  }, []);

  return (
    <div className="calculate">
      <div className="calculate__infos">
        <h2 className="calculate__price">{totalCost}</h2>

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