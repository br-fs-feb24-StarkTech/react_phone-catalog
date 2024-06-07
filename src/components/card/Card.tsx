import { useState } from 'react';
import '../../assets/scss/components/card.scss';

const Card = () => {
  const [addCart, setAddCart] = useState(false);
  const [fav, setFav] = useState(false);

  const toggleAddToCart = () => {
    setAddCart(!addCart);
  };

  const toggleFav = () => {
    setFav(!fav);
  };

  return (
    <>
      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>

      <li className="products__card card">
        <img src="./img/phones/apple-iphone-14-pro/gold/04.webp" alt="" className="card__img" />

        <h4 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083);</h4>

        <h3 className="card__price">
          $799 <span className="card__price--offer">$899</span>
        </h3>

        <div className="card__line"></div>

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

        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-cart ${addCart && 'active'}`}
            onClick={toggleAddToCart}
          >
            {addCart ? 'Added' : 'Add to cart'}
          </button>
          <button type="button" className="card__buttons-fav fav" onClick={toggleFav}>
            <div className={`fav__status ${fav ? 'on' : 'off'}`}></div>
          </button>
        </div>
      </li>
    </>
  );
};

export default Card;
