import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart, reduceFromInventory, addToInventory,addProductToCart } from '../../state/actions/action';
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
        <div className="product-in-cart-container">
            <button
                className="close-button"
                onClick={() => {
                    dispatch(removeProductFromCart(product));
                    dispatch(addToInventory({ product, quantity }));
                }}
            >
                <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="product-content">
                <div className="product-details">
                <p className="product-desc-cart">{product.description}</p>
                    <h3 className="product-price">${product.price}</h3>
                    <div className="quantity-controls">
                    <QuantityControl
                        quantity={quantity}
                        maxQuantity={product.inventory}
                        onIncrease={() => {
                        dispatch(addProductToCart({ product, quantity: 1 }));
                        dispatch(reduceFromInventory({ product, quantity: 1 }));}}
                        onDecrease={() => {
                            if (quantity === 1) {
                                dispatch(removeProductFromCart(product));
                            } else {
                                dispatch(addToInventory({ product, quantity: 1 })); 
                            }
                        }}
                    />
                    </div>
  
                <div className="product-image-cart">
                    <Link to={`/product/${product.id}`}>
                        <ImgComponent path={product.imgs[0]}/>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductInCart;
