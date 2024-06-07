import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import './ItemDetails.scss';

export const ItemDetails = () => {
  return (
    <div className="item-details">
      <div className="item-details__bread-crumbs">
        <BreadCrumbs />
      </div>

      <div className="item-details__back-button">BACK BUTTON</div>

      <div className="product item-details__product">
        <h2 className="product__name">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h2>

        <div className="display product__display">
          <div className="display__images">IMAGE</div>

          <div className="display__card">CARD</div>
        </div>
      </div>

      <div className="details item-details__details">
        <div className="details__about">ABOUT</div>
        <div className="details__tech-specs">TECH-SPECS</div>
      </div>

      <div className="item-details__other-products">OTHER PRODUCTS</div>
    </div>
  );
};
