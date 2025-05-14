import React, { useState } from "react";
import "../../css/checkout.css"; // עיצוב כולל אנימציות ואייקונים
import { FaCreditCard } from "react-icons/fa"; // סמל כרטיס אשראי (FontAwesome)
import { useDispatch } from "react-redux";
import { removeAll } from "../../state/slices/cartSlice";
const CheckoutComponent = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1); // לניהול שלב התהליך
  const [loading, setLoading] = useState(false); // מציג אנימציה של טעינה
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  
  // ניהול שינויים בשדות של פרטים אישיים
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  // ניהול שינויים בשדות של פרטי תשלום
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  // מעבר לשלב הבא עם אנימציה
  const nextStep = () => {
    if (!validatePersonalDetails()) {
      setError("בבקשה למלא את כל הפרטים האישיים נכון.");
      return;
    }
    setError("");
    setLoading(true); // מציג עיגול מסתובב
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 2000); // עיכוב של 2 שניות
  };

  // חזרה לשלב הקודם
  const prevStep = () => {
    setError("");
    setStep(step - 1);
  };

  // אימות נתוני פרטים אישיים
  const validatePersonalDetails = () => {
    const { fullName, email, phone, address, city } = personalDetails;
    if (!fullName || !email || !phone || !address || !city) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(email) && phoneRegex.test(phone);
  };

  // אימות פרטי תשלום
  const validatePaymentDetails = () => {
    const { cardNumber, expiryDate, cvv } = paymentDetails;
    const cardRegex = /^\d{16}$/; // 16 ספרות
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // תבנית MM/YY
    const cvvRegex = /^\d{3}$/; // 3 ספרות
    return cardRegex.test(cardNumber) && expiryRegex.test(expiryDate) && cvvRegex.test(cvv);
  };

  // שליחת הטופס עם עיכוב ותצוגת הודעת הצלחה
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePaymentDetails()) {
      setError("בבקשה למלא את כל פרטי התשלום נכון.");
      return;
    }
    setError("");
    setLoading(true); // מציג עיגול מסתובב
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("תהליך התשלום הושלם בהצלחה! תודה על רכישתך.");
    }, 3000); // עיכוב של 3 שניות
  };

  return (
    <div className="checkout-container">
      <h2>
        <FaCreditCard /> בתהליך תשלום
      </h2>
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>{step === 1 ? "Saving personal details..." : "Processing payment..."}</p>
        </div>
      ) : successMessage ? (
        <div className="success-message">
          <h3>
            <FaCreditCard /> {successMessage}
          </h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h3>פרטים אישיים</h3>
              <div className="form-group">
                <label htmlFor="fullName">שם</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  //placeholder="Enter your full name"
                  value={personalDetails.fullName}
                  onChange={handlePersonalChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">מייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  //placeholder="Enter your email"
                  value={personalDetails.email}
                  onChange={handlePersonalChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">טלפון</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  //placeholder="הכנס מספר טלפון"
                  value={personalDetails.phone}
                  onChange={handlePersonalChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">כתובת</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  //placeholder="Enter your address"
                  value={personalDetails.address}
                  onChange={handlePersonalChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">עיר</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  //placeholder="Enter your city"
                  value={personalDetails.city}
                  onChange={handlePersonalChange}
                />
              </div>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3>פרטי אשראי</h3>
              <div className="form-group">
                <label htmlFor="cardNumber">מספר כרטיס אשראי</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                  value={paymentDetails.cardNumber}
                  onChange={handlePaymentChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">תוקף</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={handlePaymentChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  maxLength="3"
                  value={paymentDetails.cvv}
                  onChange={handlePaymentChange}
                />
              </div>
              <button type="button" onClick={prevStep}>
                Back
              </button>
              <button type="submit" onClick={()=>{dispatch(removeAll())}}>Submit</button>
            </>
          )}
        </form>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CheckoutComponent;