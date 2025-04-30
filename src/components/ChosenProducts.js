import Slider from "react-slick";
import Product from "./Products/ProductComponent";
import ChosenProductsData from "../data/chosenProduct";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
  const products = ChosenProductsData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true // אם אתה רוצה תמיכה בעברית
  };

  return (
    <div className="product-page-container-chosen">
      <h1 className="product-page-title-chosen">המוצרים הנבחרים</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <Product id={product.id} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductPage;
