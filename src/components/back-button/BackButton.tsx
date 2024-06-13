import { useNavigate } from 'react-router-dom';
import './BackButton.scss';
import arrowLeft from '/img/icons/arrow-left-default.svg';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      <img src={arrowLeft} alt="Back" />
      <p className="back-button__text">Back</p>
    </button>
  );
};
