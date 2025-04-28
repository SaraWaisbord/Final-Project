import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ImgComponent } from "../ImgComponent";
import { addProductToCart } from "../../state/actions/action";
<<<<<<< HEAD
import ExtandProductView from "../Products/ExtandProductView";
=======
import { useParams } from "react-router-dom";
import '../../css/extendProduct.css'
>>>>>>> 3b3e1bcf1edfa639a2e085200a90fa8c7ca4de4b
export const ExtandProduct = () => {
    const { id } = useParams(); // שליפת ה-id מתוך ה-URL
    const product = useSelector((state) => 
        state.products.products.find((p) => p.id == id)
    );
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1); // סטייט לכמות המוצר

    // בדיקה ועדכון של כמות המוצר
    const handleQuantityProductChange = (e) => {
        const value = parseInt(e.target.value, 10); // המרת הערך למספר
        if (isNaN(value) || value <= 0) {
            // אם הערך אינו מספר או קטן מ-1, הגדר את הכמות ל-1
            setQuantity(1);
           
        } else if (value > product.inventory) {
            // אם הערך גדול מהמלאי המקסימלי, הגדר את הכמות למלאי המקסימלי
            setQuantity(product.inventory);
        } else {
            // אחרת, עדכן את הכמות לערך שהוזן
            setQuantity(value);
        }
        product.inventory-=quantity;
    };

    // אם המוצר לא נמצא, מציגים הודעה
    if (!product) {
        return <div>המוצר לא נמצא.</div>;
    }
    console.log(product.imgs);
    
    return (
        <div className="card product-card shadow-sm">
            <ExtandProductView imagArry={product.imgs}></ExtandProductView>
            <div className="card-body text-center">
                <p className="product-desc">{product.shortDesc}</p>
                <h3 className="product-price">${product.price}</h3>
                
                {/* שדה להזנת כמות */}
                <input
                    type="number"
                    className="qty-product"
                    value={quantity} // חיבור ה-value לסטייט של quantity
                    onChange={handleQuantityProductChange} // העברת הפונקציה בצורה נכונה
                    min="1"
                    max={product.inventory} // מגדיר את המקסימום לפי המלאי
                />
                
                {/* כפתור להוספת המוצר לעגלה */}
                <button 
                    className="product-button" 
                    onClick={() => dispatch(addProductToCart({ product: product, quantity: quantity }))}>
                    add to cart
                </button>
                
                <p className="product-desc">{product.longDesc}</p>
                <p>{product.addionalData}</p>
            </div>
        </div>
    );
};