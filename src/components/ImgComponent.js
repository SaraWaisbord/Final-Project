import React from 'react';

export const ImgComponent=(props)=>{
    const imgStyle = {
        width: '35%',
        height: '40%',
        border: '5px solid #ccc',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        objectFit: 'cover',

    };
 return <img src={props.path} alt="react's imgs:)" style={imgStyle}/>;
}
