import './Card.scss';
import { ActionButtons } from '../action-buttons/ActionButtons';
import { CardProps } from '../../types/CardProps';
import { Link, useNavigate } from 'react-router-dom';

const Card: React.FC<CardProps> = ({ product }) => {

  const pathname = window.location.pathname;
  let returnPath = "";

  if(pathname !== "/") {
    returnPath = "../";
  }

  return (
    <li className="products__card card">
      <Link to={`${returnPath}item-details/${product.itemId}`} style={{ textDecoration: 'none' }}>
        <img src={product.image} alt="img-phone" className="card__img" />

        <h4 className="card__title">{product.name}</h4>
      </Link>

      <h3 className="card__price">
        $ {product.price} <span className="card__price--offer">$ {product.fullPrice}</span>
      </h3>

      <div className="card__line"></div>

      <div className="card__description description">
        <p className="description__text">
          <span>Screen</span>
          <span className="description__text--modify">{product.screen}</span>
        </p>
        <p className="description__text">
          <span>Capacity</span>
          <span className="description__text--modify">{product.capacity}</span>
        </p>
        <p className="description__text">
          <span>RAM</span>
          <span className="description__text--modify">{product.ram}</span>
        </p>
      </div>

      <ActionButtons product={product} />
    </li>
  );
};

export default Card;
