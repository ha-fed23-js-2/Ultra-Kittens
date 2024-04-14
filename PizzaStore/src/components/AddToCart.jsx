import PropTypes from "prop-types";
import useCartStore from "../Data/cartStore";
import "../styles/Mainmenu.css";

const AddToCart = ({ item, id, quantity }) => {
  const { updateQuantity, removeFromCart } = useCartStore((state) => ({
    updateQuantity: state.updateQuantity,
    removeFromCart: state.removeFromCart,
  }));

  // const increment = () => {
  //   if (quantity > 0) {
  //     updateQuantity(id, +1);
  //   }
  // };
  // const decrement = () => {
  //   if (quantity > 1) {
  //     updateQuantity(id, -1); // Decrement quantity by 1 as long as it's greater than 1
  //   } else if (quantity === 1) {
  //     updateQuantity(id, -1); // This will set quantity to 0
  //     removeFromCart(id); // Optionally remove from cart if the quantity hits 0
  //   }
  // };

  const decrement = () => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    } else {
      removeFromCart(id);
    }
  };
  const { addToCart } = useCartStore();

  return (
    <div className="quantityContainer">
      <button onClick={decrement} className="quantityButtonMinus">
        -
      </button>
      <div className="quantity">{item.quantity}</div>
      <button onClick={() => addToCart(item)} className="quantityButtonPlus">
        +
      </button>
      {/* <button onClick={increment} className="quantityButtonPlus">
        +
      </button> */}
    </div>
  );
};

AddToCart.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default AddToCart;

// // AddToCart.jsx
// import useCartStore from "../Data/cartStore"; // Importera din Zustand varukorgsstore
// import "../styles/Mainmenu.css";

// const AddToCart = ({ item }) => {
//   const { updateQuantity, removeFromCart } = useCartStore((state) => ({
//     updateQuantity: state.updateQuantity,
//     removeFromCart: state.removeFromCart,
//   }));
//   // const [quantity, setQuantity] = useState(0);

//   const increment = () => {
//     if (item.quantity > 0) {
//       updateQuantity(item, +1); // Minska kvantiteten med 1
//     }
//     // updateQuantity(item.id, 1); // Öka kvantiteten med 1
//     console.log("add to cart", increment); //
//   };

//   const decrement = () => {
//     if (item.quantity > 1) {
//       updateQuantity(item, -1); // Minska kvantiteten med 1
//     } else {
//       removeFromCart(item.id); // Ta bort från varukorgen om kvantiteten blir 0
//     }
//     console.log("tabort från cart", decrement); //
//   };

//   return (
//     <div className="quantityContainer">
//       <button onClick={decrement} className="quantityButtonMinus">
//         -
//       </button>
//       <div className="quantity">{item.quantity}</div>
//       <button onClick={increment} className="quantityButtonPlus">
//         +
//       </button>
//     </div>
//   );
// };

// export default AddToCart;
// __________________________________________________
// import "../styles/Mainmenu.css";
// import { useState } from "react";

// const AddToCart = () => {
//   const [quantity, setQuantity] = useState(0);
//   const addItem = () => {
//     setQuantity(quantity + 1);
//   };
//   const removItem = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };
//   return (
//     <div className="quantityContainer">
//       <button onClick={removItem} className="quantityButtonMinus">
//         -
//       </button>
//       <div className="quantity">{quantity}</div>
//       <button onClick={addItem} className="quantityButtonPlus">
//         +
//       </button>
//     </div>
//   );
// };

// export default AddToCart;
