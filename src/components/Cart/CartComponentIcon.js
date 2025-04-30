import React from 'react';
import cart from '../../assets/img2/shopping-cart_18049304.png';
import '../../css/nav.css';
import '../../css/product.css';

const CartComponentIcon = () => {
  return (
    <button className="cart-button sticky-cart">
      <img src={cart} alt="cart" className="cart-icon" />
      <span className="cart-text">עגלת קניות</span>
    </button>
  );
};

export default CartComponentIcon;
