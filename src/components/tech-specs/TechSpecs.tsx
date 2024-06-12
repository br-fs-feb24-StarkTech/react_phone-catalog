import { TechSpecsProps } from '../../types/TechSpecsProps';
import './TechSpecs.scss';

export const TechSpecs: React.FC<TechSpecsProps> = ({ product }) => {
  return (
    <div className="tech-specs">
      <h3 className="tech-specs__title">Tech Specs</h3>

      <ul className="list tech-specs__list">
        <li className="list__item">
          <p className="list__description">Screen</p>

          <p className="list__value">{product.screen}</p>
        </li>

        <li className="list__item">
          <p className="list__description">Resolution</p>

          <p className="list__value">{product.resolution}</p>
        </li>

        <li className="list__item">
          <p className="list__description">Processor</p>

          <p className="list__value">{product.processor}</p>
        </li>

        <li className="list__item">
          <p className="list__description">RAM</p>

          <p className="list__value">{product.ram}</p>
        </li>

        <li className="list__item">
          <p className="list__description">Built in memory</p>

          <p className="list__value">{product.capacity}</p>
        </li>
        {product.camera && (
          <li className="list__item">
            <p className="list__description">Camera</p>

            <p className="list__value">{product.camera}</p>
          </li>
        )}
        {product.zoom && (
          <li className="list__item">
            <p className="list__description">Zoom</p>

            <p className="list__value">{product.zoom}</p>
          </li>
        )}

        <li className="list__item">
          <p className="list__description">Cell</p>

          <p className="list__value">{product.cell.join(', ')}</p>
        </li>
      </ul>
    </div>
  );
};
