import './SliderCard.scss';
import { ActionButtons } from '../action-buttons/ActionButtons';
import { CardProps } from '../../types/CardProps';

export const SliderCard: React.FC<CardProps> = ({ product }) => {

  const { image, name, fullPrice, price, screen, ram, capacity } = product;
  return (

    <li className="card carousel-card">
      <img
        src={image}
        alt="img-phone"
        className="card__img"
      />

      <h4 className="card__title">{name}</h4>

      <h3 className="card__price">
        ${fullPrice} <span className="card__price--offer">${price}</span>
      </h3>

      <div className="card__line"></div>

      <div className="card__description description">
        <p className="description__text">
          <span>Screen</span>
          <span className="description__text--modify">{screen}</span>
        </p>
        <p className="description__text">
          <span>Capacity</span>
          <span className="description__text--modify">{capacity}</span>
        </p>
        <p className="description__text">
          <span>RAM</span>
          <span className="description__text--modify">{ram}</span>
        </p>
      </div>

      <ActionButtons product={product} />
    </li>

  );
};

