import { useNavigate } from 'react-router-dom';
import './BackButton.scss';
import arrowLeft from '/img/icons/arrow-left.svg';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="back-button" onClick={handleBackClick}>
      <img src={arrowLeft} alt="button-back" />

      <p className="back-button__text">Back</p>
    </div>
  );
};
