import '../../css/product.css'
import { useDispatch} from "react-redux";
import { addProductToCart } from '../../state/actions/action';
import { ImgComponent } from "../ImgComponent"
import { Link } from 'react-router-dom';
import RouterComponent from '../RouterComponent'; 
import { ExtandProduct } from './extendProduct';
import { ExtandProductView } from './ExtandProductView';
import productsData from '../../data/products';
export const Product = ({product}) => {
    const dispatch = useDispatch();
    return (
        
        <div className="card product-card shadow-sm">
            <Link to={`/products/${product.id}`}>   
                <ImgComponent path={product.imagesArry[0]} />
            </Link>
          
            <div className="card-body text-center">
                <p className="product-desc">{product.shortDesc}</p>
                <h3 className="product-price">${product.price}</h3>
                
                <button className="product-button" 
                onClick={()=>{(dispatch(addProductToCart({product:product,quantity:1})))}}>
                <ion-icon name="add"></ion-icon>
                </button>
            </div>
           
        </div>
    );
};
