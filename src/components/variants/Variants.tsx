import { useState } from 'react';
import './variants.scss';
import { Color } from '../../types/Color';

export const Variants = () => {

  const [color, setColor] = useState(Color.black);
  console.log(color);

  return (
    <div className="variants">
      <div className="variants__container">
        <div className="variants__colors">
          <p className="variants__text">Avaliable colors</p>
          <div className="variants__colors-content">
            <span className="variants__colors-border active--border">
                <button className="variants__color color--sierrablue"></button>
            </span>

            <span className="variants__colors-border">
            <button className="variants__color color--green"></button>
            </span>

            <span className="variants__colors-border">
            <button className="variants__color color--gray"></button>
            </span>
            
            <span className="variants__colors-border">
            <button className="variants__color color--white"></button>
            </span>
            
          </div>
        </div>

        <div className="variants__line"></div>

        <div className="variants__capacity">
          <p className="variants__text">Select capacity</p>
          <div className="variants__capacity-content">
          <button className="variants__capacity-button active">64 GB</button>
          <button className="variants__capacity-button">256 GB</button>
          <button className="variants__capacity-button">512 GB</button>
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