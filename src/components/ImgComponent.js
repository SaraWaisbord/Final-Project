import React from 'react';

export const ImgComponent = (props) => {
    return (
        <img className="card-img-top product-image" src={props.path} alt="Product" />
    );
};