import '../css/QtnButton.css'
//כפתור הוספה והורדה של מוצר
const QuantityControl = ({ quantity, maxQuantity, onIncrease, onDecrease }) => {
  console.log('QuantityControl render');
  return (
    <div className="quantity-controls">
      <button onClick={onIncrease} disabled={quantity >= maxQuantity}>
        +
      </button>
      <p>{quantity}</p>
      <button onClick={onDecrease} disabled={quantity <= 1}>
        -
      </button>
    </div>
  );
};
export default QuantityControl;