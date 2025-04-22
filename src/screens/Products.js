import { Product } from "../components/Products/ProductComponent"
import imgPath from '../img.JPG';
export const Products = ()=>{
    return(<>
    <Product path={imgPath} shortDesc="abc" price="123.6" />
    </>) ;
}
