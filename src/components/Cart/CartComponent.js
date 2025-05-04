import ProductInCart from '../Products/ProductInCart';
import { useSelector } from 'react-redux';
import '../../css/cartPopUp.css';
import { Link } from 'react-router-dom';



const CartComponent =()=>{
    const producstData = useSelector((state) => state.cart.products);
    return (
        <>
            <div className="cart-container">
                <button className="close-button">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <h2 className="popup-title">המוצרים שלנו</h2>
                <div className="cart-items-list-cont">
                    {producstData.map((item) => (
                        <div className="cart-item" key={item.product.id}>
                            <ProductInCart id={item.product.id} />
                        </div>
                    ))}
                </div>
                <Link to={`/checkout`}>
                <button >למעבר לתשלום</button></Link>
            </div>
        </>
    );

};
export default  CartComponent;