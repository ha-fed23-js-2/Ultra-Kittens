import useCartStore from "../Data/cartStore";
import AddToCart from "../components/AddToCart";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems); // Using cartItems

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart">
          <h1>Your cart is empty.</h1>
        </div>
      </div>
    );
  }

  // const totalQuantity = cartItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-Container">
      <div className="cart">
        <h1>Order Checkout</h1>
        <div className="Container">
          {cartItems.map((item) => (
            <div className="menuItemContainer" key={item.id}>
              <div className="menuItem">
                <img
                  className="pizzaImage"
                  src={item.imageUrl}
                  alt="image of pizza"
                />
                <div className="menuItemInfo">
                  <div className="name-Price">
                    <p>{item.name}</p>
                    <p className="priceItem">{item.price} kr</p>
                  </div>
                  <p>{item.info}</p>
                  <p className="ingredients">{item.ingredients}</p>
                  <div className="addToCart-editIcons">
                    <AddToCart
                      item={item}
                      id={item.id}
                      quantity={item.quantity}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="totalInfo">
          <p>Totalt pris: </p>
          <p>{totalPrice} kr</p>
          {/* <p>Totalt antal artiklar: {totalQuantity}</p> */}
        </div>
        <div className="cart-btn">
          <button className="checkout">Checkout</button>
          <button
            className="clear"
            onClick={() => useCartStore.getState().clearCart()}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import React from "react";
// import useCartStore from "../Data/cartStore";
// import AddToCart from "../components/AddToCart";
// import "../styles/cart.css";

// const Cart = () => {
//   const items = useCartStore((state) => state.items);
//   console.log(items); // Debugging to check item structures

//   if (items.length === 0) {
//     return <div className="cart-container">Din varukorg är tom.</div>;
//   }

//   const totalQuantity = items.reduce(
//     (total, item) => total + (item.quantity || 0),
//     0
//   );
//   const totalPrice = items.reduce(
//     (total, item) => total + (item.quantity || 0) * item.price,
//     0
//   );

//   return (
//     <div className="cart-Container">
//       <div className="cart">
//         <h1>Order Checkout</h1>
//         <div className="Container">
//           {items.map((item) => (
//             <div className="menuItemContainer" key={item.id}>
//               <div className="menuItem">
//                 <img
//                   className="pizzaImage"
//                   src={item.imageUrl}
//                   alt="imageofpizza"
//                 />
//                 <div className="menuItemInfo">
//                   <div className="name-Price">
//                     <p>{item.name}</p>
//                     <p className="priceItem">{item.price} kr</p>
//                   </div>
//                   <p>{item.info}</p>
//                   <p className="ingredients">{item.ingredients}</p>
//                   <div className="addToCart-editIcons">
//                     <AddToCart
//                       item={item}
//                       id={item.id}
//                       quantity={item.quantity || 0}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="totalInfo">
//           <p>Totalt pris: {totalPrice} kr</p>
//         </div>
//         <div className="cart-btn">
//           <button className="checkout">Checkout</button>
//           <button className="clear">Clear</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import useCartStore from "../Data/cartStore"; // Använd din Zustand store
// import AddToCart from "../components/AddToCart"; // Komponenten för att ändra antal artiklar
// import "../styles/cart.css"; // Antag att du har stilar för din varukorg

// const Cart = () => {
//   const items = useCartStore((state) => state.items); // Hämta alla varor i varukorgen

//   if (items.length === 0) {
//     return <div className="cart-container">Din varukorg är tom.</div>;
//   }

//   console.log("Items in cart:", items);

//   // Beräkna total kvantitet
//   const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

//   // Beräkna total pris
//   const totalPrice = items.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );

//   console.log("Total quantity:", totalQuantity);
//   console.log("Total price:", totalPrice);
//   return (
//     <div className="cart-Container">
//       <div className="cart">
//         <h1>Order Checkout</h1>
//         <div className="Container">
//           {items.map((item) => (
//             <div className="menuItemContainer" key={item.id}>
//               <div className="menuItem">
//                 <img
//                   className="pizzaImage"
//                   src={item.imageUrl}
//                   alt="imageofpizza"
//                 />
//                 <div className="menuItemInfo">
//                   <div className="name-Price">
//                     <p>{item.name}</p>
//                     <p className="priceItem">{item.price} kr</p>
//                   </div>
//                   <p>{item.info}</p>
//                   <p className="ingredients">{item.ingredients}</p>
//                   <div className="addToCart-editIcons">
//                     <AddToCart item={item} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="totalInfo">
//           <p>Totalt pris: {totalPrice} kr</p>
//         </div>
//         <div className="cart-btn">
//           <button className="checkout">Checkout</button>
//           <button className="clear">Clear</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// __________________________________________________________________
// };
//   return (
//     <div className="cart-Container">
//       <div className="cart">
//         <h1>Order Checkout</h1>
//         <div className="menuItemContainer">
//           <div className="cart-items">
//             {items.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.name}
//                   className="cart-item-image"
//                 />
//                 <div className="cart-item-details">
//                   <h2>{item.name}</h2>
//                   <p>{item.info}</p>
//                   <AddToCart item={item} />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="totalInfo">
//             <p>Totalt antal artiklar: {totalQuantity}</p>
//             <p>Totalt pris: {totalPrice} kr</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// __________________________________________________________________________________________

// import "../styles/Mainmenu.css";
// import "../styles/cart.css";
// {
//   /* <CartProduct />; */
// }
// import image from "../assets/03.png";
// import AddToCart from "../components/AddToCart";
// const Cart = () => {
//   return (
//     <div className="cart-Container">
//       <div className="cart">
//         <h1>Order Checkout</h1>
//         <div className="menuItemContainer">
//           <div className="cartItems"></div>
//           <div className="menuItem">
//             <img className="pizzaImage" src={image} alt="imageofpizza" />
//             <div className="menuItemInfo">
//               <div className="name-Price">
//                 <p>pizza.name</p>
//                 <p className="priceItem">Price 100kr</p>
//               </div>
//               <p>pizza.info</p>
//               <p className="ingredients">pizza.ingredients</p>
//               <div className="addToCart-editIcons">
//                 <AddToCart showControls={true} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="totalPrice">
//           <p>Total Price: </p>
//           <p>100 kr</p>
//         </div>
//         <div className="cart-btn">
//           <button className="checkout">Checkout</button>
//           <button className="clear">Clear</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
