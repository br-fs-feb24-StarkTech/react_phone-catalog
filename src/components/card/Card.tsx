import './Card.scss';
import { ActionButtons } from '../action-buttons/ActionButtons';
import { CardProps } from '../../types/CardProps';
import { useNavigate } from 'react-router-dom';

export const Card: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleSelectProduct = () => {
    navigate(`/products/${product.itemId}`);
  };

  return (
    <>
      <li className="products__card card">
        <div className="cardtop-part">
          <div className="cardbox-image">
            <img
              onClick={handleSelectProduct}
              src={`/${product.image}`}
              alt="img-phone"
              className="card__img"
            />
          </div>
        </div>

        <div className="cardinfos-box">
          <h4 onClick={handleSelectProduct} className="card__title">
            {product.name}
          </h4>

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
        </div>
      </li>
    </>
  );
};
