import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/back-button/BackButton';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';
import './ItemDetails.scss';
import { useEffect, useState } from 'react';
import { ProductDetails } from '../../types/ProductDetails';
import { fetchProduct, fetchSliderProducts } from '../../utils/mockApi';
import { PhotosBlock } from '../../components/photos-block/PhotosBlock';
import { Variants } from '../../components/variants/Variants';
import { AboutSection } from '../../components/about-section/AboutSection';
import { TechSpecs } from '../../components/tech-specs/TechSpecs';
import { ProductType } from '../../types/ProductType';
import { ProductsSlider } from '../../components/product-slider/ProductSlider';

export const ItemDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [sliderProducts, setSliderProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchProduct().then(data => {
      const targetProduct = data.find((item: ProductDetails) => item.id === productId);

      if (targetProduct) {
        setProduct(targetProduct);
      }
    });

    fetchSliderProducts().then(data => {
      setSliderProducts(data);
    });
  }, [productId]);

  if (product) {
    const { name, images, description } = product;

    return (
      <div className="item-details">
        <div className="item-details__bread-crumbs">
          <BreadCrumbs />
        </div>

        <div className="item-details__back-button">
          <BackButton />
        </div>

        <div className="product item-details__product">
          <h2 className="product__name">{name}</h2>

          <div className="display product__display">
            <div className="display__images">
              <PhotosBlock images={images} />
            </div>

            <div className="display__card">
              <Variants product={product} />
            </div>
          </div>
        </div>

        <div className="details item-details__details">
          <div className="details__about">
            <AboutSection descriptions={description} />
          </div>
          <div className="details__tech-specs">
            <TechSpecs product={product} />
          </div>
        </div>

        <div className="item-details__other-products">
          <ProductsSlider products={sliderProducts} title={'You may also like'} />
        </div>
      </div>
    );
  } else {
    return <div className="product-not-found"></div>;
  }
};
