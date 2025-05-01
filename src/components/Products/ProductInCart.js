import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart, reduceFromInventory, addToInventory,addProductToCart ,decreaseProductQuantity} from '../../state/actions/action';
import { ImgComponent } from "../ImgComponent";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import QuantityControl from "../QantityButton";
import '../../css/productInCart.css';

const ProductInCart = ({ id }) => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) =>
        state.cart.products.find((p) => p.product.id === id)?.quantity || 1
      );
    const product = useSelector((state) =>
        state.products.products.find((p) => p.id == id)
    );
    if (!product) return <div>המוצר לא נמצא.</div>;

    return (
        <div className="product-content">
            <button className="close-button"
                onClick={() => {
                    dispatch(removeProductFromCart(product));
                    dispatch(addToInventory({ product, quantity }));
                }}>
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <Link to={`/product/${product.id}`} >
                <ImgComponent path={product.imgs[0]} className="product-image-cart"/>
            </Link>
        <div className="product-details">
            <p className="product-desc-cart">{product.description}</p>
            <h3 className="product-price">${product.price}</h3>
            <div className="quantity-controls">
                <QuantityControl
                    quantity={quantity}
                    maxQuantity={product.inventory}
                    onIncrease={() => {
                        if (product.inventory > 0) {
                            dispatch(addProductToCart({ product, quantity: 1 }));
                            dispatch(reduceFromInventory({ product, quantity: 1 }));
                        }
                    }}
                    onDecrease={() => {
                        dispatch(decreaseProductQuantity({ product, quantity: 1 }));
                        dispatch(addToInventory({ product, quantity: 1 }));
                    }}
                />
            </div>
        </div>
    </div>
    );    
};

export default ProductInCart;
