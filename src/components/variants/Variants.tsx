import React, { useEffect, useState } from 'react';
import './variants.scss';
import { Color } from '../../types/Color';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../../types/ProductDetails';
import { fetchProducts } from '../../services/mockApi';
import { ProductType } from '../../types/ProductType';
import { ActionButtons } from '../action-buttons/ActionButtons';
import { AxiosResponse } from 'axios';
import { ProductsResponse } from '../../types/ProductsResponse';

type Props = {
  product: ProductDetails;
};

function makeColorLink(id: string, color: string, targetColor: string) {
  return `/products/${id.replace(color.replace(' ', '-'), targetColor.replace(' ', '-'))}`;
}

function makeCapacityLink(id: string, capacity: string, capacityCurrent: string) {
  return `/products/${id.replace(capacity.toLowerCase(), capacityCurrent.toLowerCase())}`;
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
    category,
  } = product;

  const [colors, setColors] = useState<string[]>([]);
  const [capacities, setCapacities] = useState<string[]>([]);
  const [capacityActive, setCapacityActive] = useState<string>();
  const [colorActive, setColorActive] = useState<string>(Color.black);
  const [productAction, setProductAction] = useState<ProductType>();

  useEffect(() => {
    if (product) {
      setColorActive(color);
      setCapacityActive(capacity);
      setColors(colorsAvailable);
      setCapacities(capacityAvailable);

      const productCategory = category || 'all';

      fetchProducts(1, 10, productCategory)
        .then((response: AxiosResponse<ProductsResponse>) => {
          const productsData = response.data;
          if (Array.isArray(productsData)) {
            const targetProductType = productsData.find(
              (item: ProductType) => item.itemId === product.id,
            );
            if (targetProductType) {
              setProductAction(targetProductType);
            }
          }
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }, [product, category, capacity, capacityAvailable, color, colorsAvailable]);

  return (
    <div className="variants">
      <div className="variants__container">
        <div className="variants__colors">
          <div className="variants__texts">
            <p className="variants__text">Available colors</p>
          </div>

          <div className="variants__colors-content">
            {colors.map(colorCurrent => (
              <Link key={colorCurrent} to={makeColorLink(id, color, colorCurrent)}>
                <span
                  className={`variants__colors-border ${colorCurrent === colorActive ? 'active--border' : ''}`}
                >
                  <button className={`variants__color color--${colorCurrent}`}></button>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="variants__line"></div>

        <div className="variants__capacity">
          <p className="variants__text">Select capacity</p>
          <div className="variants__capacity-content">
            {capacities.map(capacityCurrent => (
              <Link key={capacityCurrent} to={makeCapacityLink(id, capacity, capacityCurrent)}>
                <button
                  className={`variants__capacity-button ${capacityCurrent === capacityActive ? 'active' : ''}`}
                >
                  {capacityCurrent}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="variants__line"></div>

        <h3 className="variants__price">
          ${priceDiscount.toLocaleString()}{' '}
          <span className="variants__price--offer">${priceRegular.toLocaleString()}</span>
        </h3>

        {productAction && <ActionButtons product={productAction} />}

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
