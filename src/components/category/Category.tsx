import { Link } from 'react-router-dom';
import './Category.scss';

interface Props {
  phonesQuantity: number,
  tabletsQuantity: number,
  accessoriesQuantity: number,
}

export const Category: React.FC<Props> = ({
  phonesQuantity,
  tabletsQuantity,
  accessoriesQuantity,
}) => {
  return (
    <div className="category">
      <div className="category__container">
        <h2 className="category__title">Shop by category</h2>

        <div className="category__content">
          <Link to="phones" style={{ textDecoration: 'none' }}>
            <div className="category__items items">
              <div className="items__imgs">
                <img src="./img/categories/phones.png" alt="" className="items__img" />
              </div>
              <div className="items__descriptions">
                <h4 className="items__description">Mobile Phones</h4>
                <p className="items__models">{phonesQuantity} models</p>
              </div>
            </div>
          </Link>

          <Link to="tablets" style={{ textDecoration: 'none' }}>
            <div className="category__items items">
              <div className="items__imgs">
                <img src="./img/categories/tablets.png" alt="" className="items__img" />
              </div>
              <div className="items__descriptions">
                <h4 className="items__description">Tablets</h4>
                <p className="items__models">{tabletsQuantity} models</p>
              </div>
            </div>
          </Link>

          <Link to="accessories" style={{ textDecoration: 'none' }}>
            <div className="category__items items">
              <div className="items__imgs">
                <img src="./img/categories/accessories.png" alt="" className="items__img" />
              </div>
              <div className="items__descriptions">
                <h4 className="items__description">Acessories</h4>
                <p className="items__models">{accessoriesQuantity} models</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}