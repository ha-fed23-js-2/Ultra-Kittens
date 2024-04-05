import "../styles/Mainmenu.css";
import { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);
  const addItem = () => {
    setQuantity(quantity + 1);
  };
  const removItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantityContainer">
      <button onClick={removItem} className="quantityButtonMinus">
        -
      </button>
      <div className="quantity">{quantity}</div>
      <button onClick={addItem} className="quantityButtonPlus">
        +
      </button>
    </div>
  );
};

export default AddToCart;
