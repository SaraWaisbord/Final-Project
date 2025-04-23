import cart from '../../assets/img2/shopping-cart_18049304.png';
import  '../../css/nav.css';
import '../../css/product.css'
const CartComponent = () => {
  return (
    <button className="cart-button">
      <img src={cart} alt="cart" className="cart-icon" />
    </button>
  );
};

export default CartComponent;