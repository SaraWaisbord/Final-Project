import ProductInCart from '../Products/ProductInCart';
import { useSelector } from 'react-redux';
import '../../css/cartPopUp.css';
import { Link } from 'react-router-dom';

const CartComponentPopUp = ({ onClose }) => {
    const products = useSelector((state) => state.cart.products);

    return (
        <div className="cart-popup-container">
            <button className="close-popup-button" onClick={onClose}>
                <ion-icon name="close-outline"></ion-icon>
            </button>
            <h2 className="popup-title">המוצרים בעגלה</h2>

            <div className="cart-items-list">
                {products.length === 0 ? (
                    <p className="empty-cart-msg">אין מוצרים בעגלה</p>
                ) : (
                    products.map((item) => (
                        <div className="cart-item-row" key={item.product.id}>
                            <ProductInCart id={item.product.id} />
                        </div>
                    ))
                )}
            </div>

            <div className="cart-popup-icons">
                <ion-icon name="card-outline"></ion-icon>
                <Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </div>
        </div>
    );
};

export default CartComponentPopUp;
