import React from 'react';
import './Card.scss';
import { ActionButtons } from '../action-buttons/ActionButtons';
import { CardProps } from '../../types/CardProps';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const productSpecs = {
  screen: 'Screen',
  capacity: 'Capacity',
  ram: 'RAM',
};

const getReturnPath = () => (window.location.pathname === '/' ? '' : '../');

const Card: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleSelectProduct = () => {
    navigate(`/products/${product.itemId}`);
  };

  return (
    <>
      <li className="products__card card">
        <img
          onClick={handleSelectProduct}
          src={product.image}
          alt="img-phone"
          className="card__img"
        />

        <h4 onClick={handleSelectProduct} className="card__title">
          {product.name}
        </h4>

      <h3 className="card__price">
        $ {product.price} <span className="card__price--offer">$ {product.fullPrice}</span>
      </h3>

      <div className="card__line"></div>

      <div className="card__description description">
        <p className="description__text">
          <span>{productSpecs.screen}</span>
          <span className="description__text--modify">{product.screen}</span>
        </p>
        <p className="description__text">
          <span>{productSpecs.capacity}</span>
          <span className="description__text--modify">{product.capacity}</span>
        </p>
        <p className="description__text">
          <span>{productSpecs.ram}</span>
          <span className="description__text--modify">{product.ram}</span>
        </p>
      </div>

      <ActionButtons product={product} />
    </li>
  );
};

export default Card;
