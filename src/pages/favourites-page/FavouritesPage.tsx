import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';
import { ProductType } from '../../types/ProductType';
import { useAppContext } from '../../context/AppContext';
import Card from '../../components/card/Card';
import './FavouritesPage.scss';

export const FavouritesPage = () => {
  const [favourites, setFavourites] = useState<ProductType[]>([]);
  const { favorites } = useAppContext();

  useEffect(() => {
    setFavourites(favorites);
  }, [favorites]);

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="favorites-page__content content">
          <BreadCrumbs />
          <h1 className="favorites-page__title title">Favourites</h1>
          <div className="favorites-page__counter counter">{favourites.length} items</div>

          <ul className="favorites-page__list list">
            {favourites.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
