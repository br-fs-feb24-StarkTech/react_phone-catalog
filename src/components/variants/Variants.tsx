import React, { useEffect, useState } from 'react';
import './variants.scss';
import { ProductProps } from '../../types/ProductProps';
import { Color } from '../../types/Color';
import { fetchProduct } from '../../utils/mockApi';

interface Props {
  idProduct: string;
}

export const Variants: React.FC<Props> = ( idProduct ) => {

  const id = idProduct;
  const [product, setProduct] = useState<ProductProps[]>([]);
  const [colors, setColors] = useState<String[]>([]);
  const [capacities, setCapacities] = useState<String[]>([]);
  const [capacityActive, setCapacityActive] = useState<String>();
  const [colorActive, setColorActive] = useState<String>(Color.black);

  const handleChangeColor = (changeColor: String) => {
    setColorActive(changeColor);
  }

  const handleChangeCapacity = (changeCapacity: String) => {
    setCapacityActive(changeCapacity);
  }

  useEffect(() => {
    fetchProduct().then(data => {
      setProduct(data.filter((product: ProductProps) => product.id === id));
    });
  }, []);

  useEffect(() => {
    product.map((product: ProductProps) => {
      handleChangeColor(product.color);
      handleChangeCapacity(product.capacity);
      setColors(product.colorsAvailable);
      setCapacities(product.capacityAvailable);
    });
  }, [product]);

  return (
    <div className="variants">
      <div className="variants__container">
        <div className="variants__colors">
          <p className="variants__text">Avaliable colors</p>
          <div className="variants__colors-content">
            {colors.map(color => {
                return (
                  <span
                    className={`variants__colors-border ${color === colorActive ? 'active--border' : ''}`}
                  >
                    <button
                      className={`variants__color color--${color}`}
                      onClick={() => handleChangeColor(color)}
                    ></button>
                  </span>
                );
              })
            }
          </div>
        </div>

        <div className="variants__line"></div>

        <div className="variants__capacity">
          <p className="variants__text">Select capacity</p>
        <div className="variants__capacity-content">
            {capacities.map(capacity => {
                return (
                  <button
                    className={`variants__capacity-button ${capacity === capacityActive ? 'active' : ''}`}
                    onClick={() => handleChangeCapacity(capacity)}
                  >
                    {capacity}
                  </button>
                );
              })
            }
          </div>
        </div>

        <div className="variants__line"></div>

        <h3 className="variants__price">
          $799 <span className="variants__price--offer">$899</span>
        </h3>

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
      </div>
    </div>
  );
};