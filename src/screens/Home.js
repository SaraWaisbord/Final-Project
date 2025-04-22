
import{ RouterComponent} from '../components/RouterComponent'
import { LoadProducts } from '../components/Products/ProductScreen';
export const Home = ()=>{

    return (
        <> 
                <h1>Hi welcome to the Home Page.</h1>
        {/* <RouterComponent></RouterComponent> */}
        <LoadProducts></LoadProducts>

        </>

    );
}