import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import '../../css/productScreen.css';
import ProductComponent from "../Products/ProductComponent";
import { useParams } from 'react-router-dom';

export const ProductScreen = () => {
  const productsData = useSelector((state) => state.products.products);
  const { categoryName } = useParams();

  const filteredProducts = useMemo(() =>
    productsData.filter(product => product.category === categoryName),
    [productsData, categoryName]
  );

  return (
    <div className="product-page-container">
      <h1 className="product-page-title">המוצרים שלנו</h1>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-products">לא נמצאו מוצרים בקטגוריה זו.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <ProductComponent id={product.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
