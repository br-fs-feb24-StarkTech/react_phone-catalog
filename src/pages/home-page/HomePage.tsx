// import { ProductsSlider } from "../../components/products-slider/ProductsSlider";
// import { RecommendedGoods } from "../../components/recommended-carousel/RecommendedGoods";
import { Carousel } from "../../components/product-slider/ProductSlider";

export const HomePage = () => {
  return (
    <>
      <h1 className="title">Phone Catalog</h1>;
      {/* <ProductsSlider /> */}
      <Carousel />
    </>
  );
};
