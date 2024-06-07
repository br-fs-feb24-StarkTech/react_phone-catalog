import './Card.scss';
import { ActionButtons } from '../action-buttons/ActionButtons';
// import { Product } from '../../types/Product';
import { CardProps } from '../../types/CardProps';

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <>
      <li className="products__card card">
        <img
          src="/img/phones/apple-iphone-14-pro/gold/04.webp"
          alt="img-phone"
          className="card__img"
        />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

        <div className="card__description description">
          <p className="description__text">
            <span>Screen</span>
            <span className="description__text--modify">5.8" OLED</span>
          </p>
          <p className="description__text">
            <span>Capacity</span>
            <span className="description__text--modify">64 GB</span>
          </p>
          <p className="description__text">
            <span>Screen</span>
            <span className="description__text--modify">4 GB</span>
          </p>
        </div>

        <ActionButtons product={product} />
      </li>
    </>
  );
};

export default Card;
