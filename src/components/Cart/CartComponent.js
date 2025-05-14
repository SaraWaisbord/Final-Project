import ProductInCart from '../Products/ProductInCart';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import '../../css/cartPopUp.css';
import { Link } from 'react-router-dom';
import '../../css/cartComponent.css';

// קומפוננטת סל הקניות
const CartComponent = () => {
    const productsInCart = useSelector((state) => state.cart.products);
//חישוב מחיר כולל של הסל ,שימוש useMemo ליעילות
    const totalAmount = useMemo(() => {
        return productsInCart
            .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
            .toFixed(2);
    }, [productsInCart]); // Dependency array to recalculate when productsInCart changes
    //משלוח חינם מעל 300 שקל
    var shippingCost = totalAmount > 300 ? 0 : 50;
    if(productsInCart.length==0)
        shippingCost=0;
    const totalToPay = (parseFloat(totalAmount) + shippingCost).toFixed(2);

    return (
        <>    
            <h3 className="cart-header">העגלה שלי</h3>
            <div className="cart-container-extend">
                <button className="close-button">
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div className="cart-items-list-cont">
                    {productsInCart.map((item) => (
                        <div className="cart-extand-item" key={item.product.id}>
                            <ProductInCart id={item.product.id} />
                        </div>
                    ))}
                </div>

                <div className="cart-summary-box">
                    <h5>סה"כ בסל הקניות</h5>
                    <div className="summary-row">
                        <hr />
                        <span>סכום ביניים:</span>
                        <span>{totalAmount}₪</span>
                    </div>
                    <hr />
                    <div className="summary-row">
                        <span>משלוח:</span>
                        <span>{shippingCost === 0 && productsInCart.length!=0? "חינם" : `${shippingCost}₪`}</span>
                    </div>
                    <hr />
                    <div className="summary-row">
                        <span>סה"כ לתשלום:</span>
                        <span>{totalToPay}₪</span>
                    </div>

                    <Link to="/checkout" className="cart-checkout-button">
                        מעבר לתשלום
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CartComponent;