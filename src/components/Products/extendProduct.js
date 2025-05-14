import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../../state/slices/cartSlice";
import { reduceFromInventory } from "../../state/slices/inventorySlice";
import ExtandProductView from "../Products/ExtandProductView";
import QuantityControl from "../QantityButton";
import "../../css/extendProduct.css";
//קומפוננטת תצוגה למוצר מורחב
export const ExtandProduct = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.inventory.products.find((p) => p.id === productId)
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product.inventory < quantity) return;
    dispatch(addProductToCart({ product, quantity }))?console.log("added to cart"):console.log("not added to cart");
    // Update the inventory
    dispatch(reduceFromInventory({ product, quantity }))?console.log("inventory updated"):console.log("not updated");
    // Reset quantity to 1 after adding to cart
    setQuantity(1);
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
            onIncrease={() =>
              setQuantity((q) => Math.min(q + 1, product.inventory))//שינוי תצוגת המספר בהתאם למלאי
            }
            onDecrease={() => setQuantity((q) => Math.max(q - 1, 1))}
          />

          <p>מחיר: {product.price}₪</p>
           {/* אם המוצר במלאי רואים אותו אם לא הוא נהיה אפור ולא פעיל */}
          {product.soldOut ? (
            <p>לא קיים במלאי</p>
          ) : (
            <button
              className="product-button"
              onClick={handleAddToCart}
              disabled={product.inventory < quantity}
            >
              הוסף לסל
            </button>
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
