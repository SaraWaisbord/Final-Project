import { useDispatch, useSelector } from "react-redux";
import { addToInventory ,reduceFromInventory} from "../../state/slices/inventorySlice";
import { addProductToCart ,removeProductFromCart,decreaseProductQuantity} from "../../state/slices/cartSlice";
import { ImgComponent } from "../ImgComponent";
import { Link } from 'react-router-dom';
import QuantityControl from "../QantityButton";
import { useCallback, useMemo } from 'react';
import '../../css/productInCart.css';

const ProductInCart = ({ id }) => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) =>
        state.cart.products.find((p) => p.product.id === id)?.quantity || 0
    );
    
    
    const product = useSelector((state) =>
        state.products.products.find((p) => p.id === id)
    );
//ייעול חישוב כמות המוצרים
    const totalPrice = useMemo(() => {
    if (!product) return '0.00';
    return (product.price * quantity).toFixed(2);
}, [product, quantity]);

//מחיקה מהסל
    const handleRemove = useCallback(() => {
        if (product) {
            dispatch(removeProductFromCart(product));
            dispatch(addToInventory({ product, quantity }));
        }
    }, [dispatch, product, quantity]);
//העלאה לסל
    const handleIncrease = useCallback(() => {
        if (product?.inventory > 0) {
            dispatch(addProductToCart({ product, quantity: 1 }));
            dispatch(reduceFromInventory({ product, quantity: 1 }));
        }
    }, [dispatch, product]);
//הורדה מהסל שימוש בuseCallback ליעילות
    const handleDecrease = useCallback(() => {
        if (quantity > 1) {
            dispatch(decreaseProductQuantity({ product, quantity: 1 }));
            dispatch(addToInventory({ product, quantity: 1 }));
        } else {
            handleRemove();
        }
    }, [dispatch, product, quantity, handleRemove]);

    if (!product) return <div>המוצר לא נמצא.</div>;

    return (
        <div className="product-content">
            <button className="close-button" onClick={handleRemove}>
                <ion-icon name="close-outline" className='close-icon'></ion-icon>
            </button>

            <Link to={`/product/${product.id}`}>
                <ImgComponent path={product.imgs[0]} className="product-image-cart" />
            </Link>

            <div className="product-details">
                <p className="product-desc-cart">{product.description}</p>
                <h3 className="product-price">{product.price} ₪</h3>
                <p className="product-total">
                    {`${product.price} x ${quantity} = ${totalPrice} ₪`}
                </p>
                <div className="quantity-controls">
                    <QuantityControl
                        quantity={quantity}
                        maxQuantity={product.inventory}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductInCart;
