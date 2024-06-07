import { useState } from 'react';
import '../../assets/scss/components/calculate.scss';
import { Modal } from '../modal/Modal';
import { useNavigate } from 'react-router-dom';

export const Calculate = () => {
  const navigate = useNavigate();

  const [modalStatus, setModalStatus] = useState(false);

  const handleModal = () => {
    setModalStatus(true);

    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  return (
    <div className="calculate">
      <div className="calculate__infos">
        <h2 className="calculate__price">$2657</h2>

        <p className="calculate__description">Total for 3 items</p>
      </div>

      <div className="calculate__line"></div>

      <button type="button" className="calculate__button-checkout" onClick={handleModal}>
        Checkout
      </button>

      {modalStatus && <Modal />}
    </div>
  );
};
