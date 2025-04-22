import '../../css/product.css'
import { useDispatch} from "react-redux";
import { addProductToCart } from '../../state/actions/action';
import { ImgComponent } from "../ImgComponent"

export const Product = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="card product-card shadow-sm">
            <ImgComponent path={props.path} />
            <div className="card-body text-center">
                <p className="product-desc">{props.shortDesc}</p>
                <h3 className="product-price">${props.price}</h3>
                <button className="product-button" onClick={()=>{(dispatch(addProductToCart(props)))}}>Add to Cart</button>
            </div>
        </div>
    );
};
