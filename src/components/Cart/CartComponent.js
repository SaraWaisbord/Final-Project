import ProductInCart from '../Products/ProductInCart';
import { useSelector } from 'react-redux';
import '../../css/cartPopUp.css';
import { Link } from 'react-router-dom';
import '../../css/cartComponent.css';


const CartComponent =()=>{
    const producsInCart = useSelector((state) => state.cart.products);
    return (
        <>    <h3 className="cart-header">העגלה שלי</h3>
<div className="cart-container-extend">

    <button className="close-button">
        <ion-icon name="close-outline"></ion-icon>
    </button>



    <div className="cart-items-list-cont">
        {producsInCart.map((item) => (
            <div className="cart-extand-item" key={item.product.id}>
                <ProductInCart id={item.product.id} />
            </div>
        ))}
    </div>
    <div className="cart-summary-box"><h5>סה"כ בסל הקניות</h5>
    <div className="summary-row"><hr></hr>
        <span>סכום ביניים:         </span>
        <span>
            {producsInCart
                .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
                .toFixed(2)}₪
        </span>
    </div><hr></hr>
    <div className="summary-row">
        <span>משלוח:</span>
        <span>עלויות המשלוח מחושבות בקופה</span>
    </div>
    <hr></hr>
    <div className="summary-row">
        <span>סה"כ לתשלום:</span>
        <span>
            {producsInCart
                .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
                .toFixed(2)}₪
        </span>
    </div>

    <Link to={`/checkout`} className="cart-checkout-button">
מעבר לתשלום
    </Link>
</div>

        </div>

        </>
    );

};
export default  CartComponent;