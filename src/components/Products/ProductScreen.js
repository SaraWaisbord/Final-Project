

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../css/product.css';
import Product from "../Products/ProductComponent"
export const LoadProducts = () => {
    // שליפת כל המוצרים מתוך הסטייט הגלובלי
    const producstData = useSelector((state) => state.products.products);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">המוצרים שלנו</h1>
            <div className="row">
                {producstData.map((product) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                        <Product id={product.id}></Product>
                    </div>
                ))}
            </div>
        </div>
    );
};