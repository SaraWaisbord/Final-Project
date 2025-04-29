


//שתי הפונקציות כאן זה רק לקריאות נראלי כדאי ככה מה אומרת? 
//שלוחץ על הכפתור להוספה והורדה יעדכן נורמלי
const QuantityControl = ({ quantity, maxQuantity, onIncrease, onDecrease }) => {
  return (
    <div className="quantity-controls">
      <button onClick={onDecrease} disabled={quantity <= 0}>-</button>
      <p>{quantity}</p>
      <button onClick={onIncrease} disabled={quantity >= maxQuantity}>+</button>
    </div>
  );
};




export default QuantityControl;
