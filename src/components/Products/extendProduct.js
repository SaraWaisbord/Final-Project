import { useDispatch } from "react-redux";
import { useState } from "react";
import { ImgComponent } from "../ImgComponent";
import { addProductToCart } from "../../state/actions/action";
export const ExtandProduct=(product)=>{
    
    const dispatch = useDispatch();
    const [quantity,setQuantity]=useState(1);

    //cheks that the additional quantity is corrrect
    const handQuantityProductChange=(e)=>{
        console.log(quantity);
        if(e.target.value==product.invertory)
            setQuantity(e.target.value);
        if (e.target.value<=0)
            setQuantity(1);
        else
            setQuantity(e.target.value);
    }
      
    return (
        <div className="card product-card shadow-sm">
            <ImgComponent path={product.path} />
            <div className="card-body text-center">
                <p className="product-desc">{product.shortDesc}</p>
                <h3 className="product-price">${product.price}</h3>
                
               <input
               typeof="number"
               className="qty-product"
               value={quantity}
               onChange={handQuantityProductChange()}
               />
                <button className="product-button" 
                onClick={()=>{(dispatch(addProductToCart({product:product,quantity:quantity})))}}>
                add to cart
                </button>
                <p className="product-desc">{product.longDesc}</p>
            </div>
        </div>
    );
};
  
