import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ImgComponent } from "../ImgComponent";
import { addProductToCart } from "../../state/actions/action";
import { ExtandProductView } from "./ExtandProductView";
import productsData from '../../data/products';
export const ExtandProduct=()=>{
    const dispatch = useDispatch();
    const [quantity,setQuantity]=useState(1);
    const { id } = useParams();
    console.log(parseInt(id));
    const product = productsData.find(p => p.id === parseInt(id));
    console.log(product);

    // cheks that the additional quantity is corrrect
    const handQuantityProductChange = (e) => {
        const val = parseInt(e.target.value);
        if (val <= 0)
             setQuantity(1);
        else if (val > product.inventory)
             setQuantity(product.inventory);
        else 
            setQuantity(val);
      };
      
    return (
        <div className="card product-card shadow-sm">
             <ExtandProductView imagArry = {product.imagesArry}/>
            <div className="card-body text-center">
                <p className="product-desc">{product.shortDesc}</p>
                <h3 className="product-price">${product.price}</h3>
               {/* <input
               typeof="number"
               className="qty-product"
               value={quantity}
               onChange={handQuantityProductChange()}
               /> */}
                <button className="product-button" 
                onClick={()=>{(dispatch(addProductToCart({product:product,quantity:quantity})))}}>
                add to cart
                </button>
                <p className="product-desc">{product.longDesc}</p>
            </div>
        </div>
    );
};
  
