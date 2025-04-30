


const QuantityControl = ({ quantity, maxQuantity, onIncrease, onDecrease }) => {
  return (
    <div className="quantity-controls">
      <button onClick={onDecrease} disabled={quantity <= 1}>-</button>
      <p>{quantity}</p>
      <button onClick={onIncrease} disabled={quantity >= maxQuantity}>+</button>
    </div>
  );
};




export default QuantityControl;
