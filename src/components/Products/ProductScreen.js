import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/productScreen.css';
import Product from "../Products/ProductComponent";
import { useParams } from 'react-router-dom';
export const ProductScreen = () => {
  const producstData = useSelector((state) => state.products.products);
  console.log(producstData);
  const {categoryName} = useParams();
  const filteredProducts = producstData.filter(product => product.category === categoryName);
  return (
    <div className="product-page-container">
      <h1 className="product-page-title">המוצרים שלנו</h1>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <Product id={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
