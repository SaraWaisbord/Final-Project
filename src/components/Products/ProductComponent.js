import '../../css/product.css';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, reduceFromInventory } from '../../state/actions/action';
import { ImgComponent } from "../ImgComponent";
import { Link } from 'react-router-dom';

const Product = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.inventory.products.find((p) => p.id == id)
  ); 
  if (!product) {
    return <div>המוצר לא נמצא.</div>;
  }

  return (
<div className={`product-card ${product.soldOut ? 'sold-out' : ''}`}>

  <Link to={`/product/${product.id}`} className="product-top">
    <ImgComponent path={product.imgs[0]} className="product-img" />
  </Link>

  <div className="product-bottom">
    <p className="product-desc">{product.description}</p>
    <p className="product-price">₪ {product.price.toFixed(2)}</p>

    {!product.soldOut && (
      <button
        className="add-btn"
        onClick={() => {
          dispatch(addProductToCart({ product, quantity: 1 }));
          dispatch(reduceFromInventory({ product, quantity: 1 }));
        }}
      >
        <ion-icon name="add"></ion-icon>
      </button>
    )}
  </div>
</div>

  );
};

export default Product;












