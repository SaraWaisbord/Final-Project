

import React from 'react';
import products from '../../data/products';
import { Product } from './ProductComponent';
import '../../css/product.css';

export const LoadProducts = () => {
    const productData = [...products];
    
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Products</h1>
            <div className="row">
                {productData.map((p) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={p.id}>
                        <Product product={p}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};