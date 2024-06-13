import React from 'react';
import './ProductCard.scss';
import { ProductType } from '../../types/ProductType';
import { Link } from 'react-router-dom';
import { ActionButtons } from '../action-buttons/ActionButtons';

type ProductCardProps = {
  product: ProductType;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, name, fullPrice, price, screen, capacity, ram } = product;

  return (
    <div className={CRIAR_CLASSE}>
      <Link to={`/products/${product.itemId}`} className={CRIAR_CLASSE}>
        <img className={CRIAR_CLASSE} src={CRIAR_ORIGEM_IMAGEM} alt="image" />
      </Link>

      <div className={CRIAR_CLASSE}>
        <Link to={`/products/${product.itemId}`} className={CRIAR_CLASSE}>
          {name}
        </Link>

        <div className={CRIAR_CLASSE}>
          <div className={CRIAR_CLASSE}>${fullPrice}</div>
          <div className={CRIAR_CLASSE}>${price}</div>
        </div>

        <div className={CRIAR_CLASSE}></div>
        <div className={CRIAR_CLASSE}>
          <div className={CRIAR_CLASSE}>
            <p className={CRIAR_CLASSE}>Screen</p>
            <p className={CRIAR_CLASSE}>{screen}</p>
          </div>

          <div className={CRIAR_CLASSE}>
            <p className={CRIAR_CLASSE}>Capacity</p>
            <p className={CRIAR_CLASSE}>{capacity}</p>
          </div>

          <div className={CRIAR_CLASSE}>
            <p className={CRIAR_CLASSE}>RAM</p>
            <p className={CRIAR_CLASSE}>{ram}</p>
          </div>
        </div>
        <ActionButtons product={product} />
      </div>
    </div>
  );
};
