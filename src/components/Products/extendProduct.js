import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {addProductToCart,reduceFromInventory,removeProductFromCart,addToInventory} from "../../state/actions/action";
import ExtandProductView from "../Products/ExtandProductView";
import QuantityControl from "../QantityButton";
import "../../css/extendProduct.css";

export const ExtandProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.inventory.products.find((p) => p.id == id)
  );
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= product.inventory) {
      dispatch(addProductToCart({ product: product, quantity: quantity }));
      dispatch(reduceFromInventory({ product: product, quantity: quantity }));
      setQuantity(1);
    }
  };

  if (!product) {
    return <div>המוצר לא נמצא.</div>;
  }

  return (
    <div className="product-page">
      <div className="product-top">
        <div className="product-image">
          <ExtandProductView imagArry={product.imgs} />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.description}</h2>
          <QuantityControl
            quantity={quantity}
            maxQuantity={product.inventory}
            onIncrease={() => {
              dispatch(addProductToCart({ product, quantity: 1 }));
              dispatch(reduceFromInventory({ product, quantity: 1 }));
              setQuantity(quantity+1);}}
              onDecrease={() => {
                if (quantity === 1) {
                  dispatch(removeProductFromCart(product));
                  dispatch(addToInventory({ product, quantity: 1 }));
                } else {console.log(quantity+" : Iam in the decrease!!");
                  dispatch(addToInventory({ product, quantity: 1 })); 
                }
                setQuantity(quantity - 1);
              }}
          />
          <p>{product.price}</p>
          {product.soldOut === false ? (
            <button className="product-button" onClick={handleAddToCart}>
              הוסף לסל
            </button>
          ) : (
            <p>לא קיים במלאי</p>
          )}
        </div>
      </div>

      <div className="product-details">
        <h4>תיאור מלא</h4>
        <p>{product.longDesc}</p>
        <h4>פרטים נוספים</h4>
        <p>{product.addionalData}</p>
      </div>
    </div>
  );
};