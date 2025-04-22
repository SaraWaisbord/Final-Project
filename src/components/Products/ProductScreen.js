

import React from 'react';
import products from '../../data/products.json';
import { Product } from './ProductComponent';
import '../../css/product.css';

export const LoadProducts = () => {
    const filteredProducts = products.filter((p) => p.price > 300); 
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Products</h1>
            <div className="row">
                {filteredProducts.map((p) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={p.id}>
                        <Product 
                            path={p.img} 
                            shortDesc={p.description} 
                            price={p.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};