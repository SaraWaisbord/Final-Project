import { Product } from "../components/Products/ProductComponent"
import imgPath from '../img.JPG';
import { LoadProducts } from "../components/Products/ProductScreen";
export const Products = ()=>{
    return(<>
    {/* <Product path={imgPath} shortDesc="abc" price="123.6" /> */}
    <LoadProducts></LoadProducts>
    </>) ;
}
