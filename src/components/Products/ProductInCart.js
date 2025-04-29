import { useDispatch } from "react-redux";
import { removeProductFromCart, reduceFromInventory, addToInventory } from '../../state/actions/action';
import { ImgComponent } from "../ImgComponent";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import '../../css/productInCart.css';

const ProductInCart = ({ id }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const product = useSelector((state) =>
        state.products.products.find((p) => p.id == id)
    );

    if (!product) {
        return <div>המוצר לא נמצא.</div>;
    }

    return (
        <div className="product-in-cart-container">
            <button
                className="close-button"
                onClick={() => {
                    dispatch(removeProductFromCart(product));
                    dispatch(addToInventory({ product: product, quantity: quantity }));
                }}
            >
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
            <div className="product-content">
                <div className="product-image">
                    <Link to={`/product/${product.id}`}>
                        <ImgComponent path={product.imgs[0]} />
                    </Link>
                </div>
                <div className="product-details">
                    <Link to={`/product/${product.id}`}>
                        <p className="product-desc">{product.description}</p>
                    </Link>
                    <h3 className="product-price">${product.price}</h3>
                    <div className="quantity-controls">
                        <button
                            className="product-button"
                            onClick={() => {
                                if (quantity > 1) {
                                    dispatch(addToInventory({ product: product, quantity:1}));
                                    setQuantity(quantity - 1);
                                }
                            }}
                        >
                            <ion-icon name="remove-outline"></ion-icon>
                        </button>
                        <p className="quantity">{quantity}</p>
                        <button
                            className="product-button"
                            onClick={() => {
                                dispatch(reduceFromInventory({ product: product, quantity: 1 }));
                                setQuantity(quantity + 1);
                            }}
                        >
                            <ion-icon name="add"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInCart;