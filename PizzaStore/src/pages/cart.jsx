import { useState } from "react";
import useCartStore from "../Data/cartStore";
import AddToCart from "../components/AddToCart";
import "../styles/cart.css";

const Cart = () => {
  const { cartItems, clearCart } = useCartStore((state) => ({
    cartItems: state.cartItems,
    clearCart: state.clearCart,
  }));
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (cartItems.length === 0) {
    if (checkoutComplete) {
      return (
        <div className="cart-empty">
          <div className="cart">
            <h1>Your order has been placed successfully!</h1>
            <p>Payment on site</p>
          </div>
        </div>
      );
    }
    return (
      <div className="cart-empty">
        <div className="cart">
          <h1>Your cart is empty.</h1>
        </div>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    clearCart();
    setCheckoutComplete(true);
  };

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
          <p>Total price: {totalPrice} kr</p>
        </div>
        <div className="cart-btn">
          <button className="checkout" onClick={handleCheckout}>
            Checkout
          </button>
          <p
            className="clearbtn"
            onClick={() => {
              clearCart();
              setCheckoutComplete(false);
            }}
          >
            Clear
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
