import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedProduct from "../Products/FeaturedProduct.js";
import ChosenProductsData from "../../data/chosenProduct.js";
import "../../css/ChosenProducts.css";
import Slider from "react-slick";
import { useRef } from "react";
//שימוש בslider לקרוסלת מוצרים נבחרים ,שימוש בuseRef ליעילות
const ProductPage = () => {
  const products = ChosenProductsData;
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rtl: true,
    arrows: false,
  };

  const handlePrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <div className="product-page-container-chosen">
      <h1 className="product-hot-title">מוצרים חמים</h1>
      <hr></hr>
      <div className="carousel-wrapper">
        <button className="carousel-button" onClick={handlePrev}>
          <ion-icon name="caret-back-outline"></ion-icon>
        </button>

        <div className="slider-container">
          <Slider ref={sliderRef} {...sliderSettings}>
            {products.map((product, index) => (
              <div key={index} className="slide-item">
                <FeaturedProduct product={product} />
              </div>
            ))}
          </Slider>
        </div>

        <button className="carousel-button" onClick={handleNext}>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
