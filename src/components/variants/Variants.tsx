import React, { useEffect, useState } from 'react';
import './variants.scss';
import { Color } from '../../types/Color';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../../types/ProductDetails';

type Props = {
  product: ProductDetails;
};

function makeColorLink(id: string, color: String, targetColor: String) {
  return `/item-details/${id.replace(color.replace(' ', '-'), targetColor.replace(' ', '-'))}`;
}

function makeCapacityLink(id: string, capacity: string, capacityCurrent: String) {
  return `/item-details/${id.replace(capacity.toLowerCase(), capacityCurrent.toLowerCase())}`
}

export const Variants: React.FC<Props> = ({ product }) => {

  const {
    id,
    colorsAvailable,
    capacityAvailable,
    capacity,
    color,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
  } = product;

  const [colors, setColors] = useState<String[]>([]);
  const [capacities, setCapacities] = useState<String[]>([]);
  const [capacityActive, setCapacityActive] = useState<String>();
  const [colorActive, setColorActive] = useState<String>(Color.black);

  if (product) {
    useEffect(() => {
      setColorActive(color);
      setCapacityActive(capacity);
      setColors(colorsAvailable);
      setCapacities(capacityAvailable);
    }, [product]);
  }

  return (
    <div className="variants">
      <div className="variants__container">
        <div className="variants__colors">
          <div className="variants__texts">
            <p className="variants__text">Avaliable colors</p>
          </div>

          <div className="variants__colors-content">
            {colors.map(colorCurrent => {
              return (
                <Link to={makeColorLink(id, color, colorCurrent)}>
                  <span
                    className={`variants__colors-border ${colorCurrent === colorActive ? 'active--border' : ''}`}
                  >
                    <button className={`variants__color color--${colorCurrent}`}></button>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="variants__line"></div>

        <div className="variants__capacity">
          <p className="variants__text">Select capacity</p>
          <div className="variants__capacity-content">
            {capacities.map(capacityCurrent => {
              return (
                <Link to={makeCapacityLink(id, capacity, capacityCurrent)}>
                  <button
                    className={`variants__capacity-button ${capacityCurrent === capacityActive ? 'active' : ''}`}
                  >
                    {capacityCurrent}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="variants__line"></div>

        <h3 className="variants__price">
          ${priceRegular.toLocaleString()}{' '}
          <span className="variants__price--offer">${priceDiscount.toLocaleString()}</span>
        </h3>

        <div className="card__description description">
          <p className="description__text">
            <span>Screen</span>
            <span className="description__text--modify">{screen}</span>
          </p>

          <p className="description__text">
            <span>Resolution</span>
            <span className="description__text--modify">{resolution}</span>
          </p>

          <p className="description__text">
            <span>Processor</span>
            <span className="description__text--modify">{processor}</span>
          </p>

          <p className="description__text">
            <span>RAM</span>
            <span className="description__text--modify">{ram}</span>
          </p>
        </div>
      </div>
    </div>
  );
};