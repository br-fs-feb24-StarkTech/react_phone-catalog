export const Category = () => {
  return (
    <div className="category">
      <h2 className="category__title">Shop by category</h2>

      <div className="category__content">
        <div className="category__items">
          <img src="./" alt="" className="category_img" />
          <h4 className="category__description">Mobile Phones</h4>
          <p className="category__models">97 models</p>
        </div>

        <div className="category__items">
          <img src="" alt="" className="category_img" />
          <h4 className="category__description">Tablets</h4>
          <p className="category__models">24 models</p>
        </div>

        <div className="category__items">
          <img src="" alt="" className="category_img" />
          <h4 className="category__description">Accessories</h4>
          <p className="category__models">100 models</p>
        </div>
      </div>
    </div>
  )
}