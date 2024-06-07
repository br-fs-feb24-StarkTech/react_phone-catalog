import '../assets/scss/pages/PhonesPage.scss';
import BreadCrumbs from "../components/bread-crumbs/BreadCrumbs";
import Card from '../components/card/Card';

const PhonesPage = () => {
  return (
    <div className="products__container products container">
      <BreadCrumbs />

      <h1 className="products__title">Mobile phones</h1>
      <p className="products__quantity">
        <span className="products__quantityText">97 models</span>
      </p>

      <div className="products__filter filter">
        <div className="filter_sortBy sortBy">
          <p className="sortBy__legend">Sort by</p>
          <div className="sortBy__select"></div>
        </div>

        <div className="sortBy">
          <p className="sortBy__legend">Items on page</p>

          <div className="perPage__select">
            <div className="perPage__options-wrapper">
              <div className="perPage__option"></div>
            </div>
          </div>
        </div>
      </div>

      <ul className="products__list">
        <Card />
      </ul>
    </div>
  );
};

export default PhonesPage;
