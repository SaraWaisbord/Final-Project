import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/productScreen.css';
import Product from "../Products/ProductComponent";

export const ProductScreen = () => {
  const producstData = useSelector((state) => state.products.products);

  return (
    <div className="product-page-container">
      <h1 className="product-page-title">המוצרים שלנו</h1>
      <div className="product-grid">
        {producstData.map((product) => (
          <div className="product-item" key={product.id}>
            <Product id={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
