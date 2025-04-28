import '../../css/product.css'
import { useDispatch} from "react-redux";
import { addProductToCart } from '../../state/actions/action';
import { ImgComponent } from "../ImgComponent"
import { Link } from 'react-router-dom';
import RouterComponent from '../RouterComponent'; 
import { ExtandProduct } from './extendProduct';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
 const Product = ({id}) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => 
    state.products.products.find((p) => p.id ==id));
    if (!product) {
        return <div>המוצר לא נמצא.</div>;
    }
    return (
        <div className="card product-card shadow-sm">   
        <Link to={`/product/${product.id}`}>
            <ImgComponent path={product.imgs[0]} />
            </Link>
          
            <div className="card-body text-center">
                <p className="product-desc">{product.description}</p>
                <h3 className="product-price">${product.price}</h3>
                {product.soldOut === false ?
                ( 
                    <button className="product-button" 
                    onClick={()=>{(dispatch(addProductToCart({product:product,quantity:1})))}}>
                    <ion-icon name="add"></ion-icon></button>):
                    <p>לא קיים במלאי</p>
                }
            </div>
           
        </div>
    );
};
export default Product;
