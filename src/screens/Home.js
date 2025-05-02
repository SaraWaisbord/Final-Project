import CartComponentPopUp from '../components/Cart/CartComponentPopUp.js';
import ProductPage from '../components/Home/ChosenProducts.js';
import { BrandCarousel } from '../components/Home/BrandCarousel.js';
import '../css/Home.css'
import { ImgComponent } from '../components/ImgComponent.js';
import b from '../assets/img2/Homme.png'
import a from '../assets/img2/shadow.png'
import { ChosenCategory } from '../components/Home/ChosenCategory.js';
export const Home = ()=>{
    
    return (
        <div className="home-container">
        <div className="full-width-image-wrapper">
        <ImgComponent path={b} className="home-header-img" />
      </div>
        <div className="home"> 
                {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
                {/* <CartComponentPopUp></CartComponentPopUp> */}
                {/* <RouterComponent></RouterComponent> */}
              <ProductPage className='productPage'></ProductPage>
              <BrandCarousel className='brandCarousel'></BrandCarousel>
              <hr></hr>
              
        </div>

        <ChosenCategory></ChosenCategory>
        <div className="full-width-image-wrapper">
        <ImgComponent path={a} className="home-helping-img" />
      </div>
        </div>

    );
}