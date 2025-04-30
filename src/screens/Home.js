
import { CartComponentPopUp } from '../components/Cart/CartComponentPopUp';
import { useSelector } from 'react-redux';
import ProductPage from '../components/ChosenProducts';
export const Home = ()=>{
    return (
        <> 
                <h1>Hi welcome to the Home Page.</h1>
                {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
                {/* <CartComponentPopUp></CartComponentPopUp> */}
                {/* <RouterComponent></RouterComponent> */}
              <ProductPage></ProductPage>
        </>

    );
}