import './BreadCrumbs.scss';
import homeIcon from '/img/icons/home.svg';
import arrowRight from '/img/icons/arrow-right.svg';

export const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs">
      <a href="#" className="breadcrumbs__item">
        <img src={homeIcon} alt="home-icon" className="breadcrumbs__icon--home" />
      </a>

      <img src={arrowRight} alt="home-icon" className="breadcrumbs__icon" />

      <a href="#" className="breadcrumbs__title">
        Phones
      </a>
    </div>
  );
};
