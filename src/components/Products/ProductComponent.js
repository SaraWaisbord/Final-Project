import '../../css/product.css';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../state/slices/cartSlice";
import { reduceFromInventory } from "../../state/slices/inventorySlice";
import { ImgComponent } from "../ImgComponent";
import { Link } from 'react-router-dom';
//קומפוננטת מוצר
const Product = ({ id }) => {
  const dispatch = useDispatch();
  const productId = parseInt(id, 10);

  const product = useSelector((state) =>
    state.inventory.products.find((p) => p.id === productId)
  );

  if (!product) {
    return <div>המוצר לא נמצא.</div>;
  }
//הוספה לסל ועדכון המלאי
  const handleAddToCart = () => {
    if (product.inventory > 0) {
      dispatch(addProductToCart({ product, quantity: 1 }))?console.log("added to cart"):console.log("not added to cart");
      // Update the inventory
      dispatch(reduceFromInventory({ product, quantity: 1 }));
    }
  };

  return (
    <div className={`product-card ${product.soldOut ? 'sold-out' : ''}`}>
      <Link to={`/product/${product.id}`} className="product-top">
        <ImgComponent path={product.imgs[0]} className="product-img" />
      </Link>

      <div className="product-bottom">
        <p className="product-desc">{product.description}</p>
        <p className="product-price">מחיר: {product.price.toFixed(2)} ₪</p>

        {!product.soldOut && (
          <button className="add-btn-hh" onClick={handleAddToCart}>
            <ion-icon name="add"></ion-icon>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
