import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { addProductToCart, reduceFromInventory } from "../../state/actions/action";
import ExtandProductView from "../Products/ExtandProductView";
import QuantityControl from "../QantityButton";
import "../../css/extendProduct.css";

export const ExtandProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.inventory.products.find((p) => p.id == id)
  );
  
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityProductChange2 = (e) => {
    const value = parseInt(e, 10);
    if (isNaN(value) || value <= 0) {
      setQuantity(1);
    } else if (value > product.inventory) {
      setQuantity(product.inventory);
    } else {
      setQuantity(value);
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
          <QuantityControl product={product}maxQuantity={product.inventory}/>

            <p>{product.price}</p>
            {product.soldOut === false ?
            <button
              className="product-button"
              onClick={() =>{
                dispatch(addProductToCart({ product: product, quantity: quantity }))
                dispatch(reduceFromInventory({product:product,quantity:quantity}))
                handleQuantityProductChange2(quantity)
              }}
            > הוסף לסל 
            </button>: <p>לא קיים במלאי</p>
}
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
