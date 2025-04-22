import '../css/product.css'
import { ImgComponent } from "./ImgComponent"
export const Product = (props) => {
    return (
        <div className="product-card">
            <ImgComponent path={props.path} />
            <p className="product-desc">{props.shortDesc}</p>
            <h1 className="product-price">{props.price}</h1>
            <button className="product-button">Add to Cart</button>
        </div>
    );
};
