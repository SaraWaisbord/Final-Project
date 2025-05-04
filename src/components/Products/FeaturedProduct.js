import '../../css/FeaturedProduct.css'
import { Link } from 'react-router-dom';
import { ImgComponent } from '../ImgComponent';
const FeaturedProduct = ({ product }) => {

    if (!product) {
        return <div>המוצר לא נמצא.</div>;
      }
    
//המצאתי הנחה
  const discount = product.oldPrice
    ? Math.round(50 - (product.price / product.oldPrice) * 50)
    : null;

  return (
    <div className="featured-product-card">
      <div className="sale-tag">מבצע</div>
      {discount && <p className="discount-badge-featured" >{discount}% הנחה</p>}
      <Link to={`/product/${product.id}`}>
      <ImgComponent path={product.imgs[0]} className="product-img-featured"/>
      </Link>
        <h3 className="product-title-featured">{product.description}</h3>
        <div className="product-prices-featured">
          <span className="new-price-featured">₪{product.price}</span>
          {product.oldPrice && <span className="old-price-featured ">₪{product.oldPrice}</span>}
        </div>
        <Link to={`/product/${product.id}`}>
        <button className="more-info-btn-featured" style={{ fontSize: "18px" }}>
  למידע נוסף
</button>

</Link>
    </div>
  );
};

export default FeaturedProduct;
