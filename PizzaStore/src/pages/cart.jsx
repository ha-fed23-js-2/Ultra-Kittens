import "../styles/Mainmenu.css";
import "../styles/cart.css";
import image from "../assets/03.png";
import AddToCart from "../components/AddToCart";

const Cart = () => {
  return (
    <div className="cart-Container">
      <div className="cart">
        <h1>Order Checkout</h1>
        <div className="menuItemContainer">
          <div className="cartItems"></div>
          <div className="menuItem">
            <img className="pizzaImage" src={image} alt="imageofpizza" />
            <div className="menuItemInfo">
              <div className="name-Price">
                <p>pizza.name</p>
                <p className="priceItem">Price 100kr</p>
              </div>
              <p>pizza.info</p>
              <p className="ingredients">pizza.ingredients</p>
              <div className="addToCart-editIcons">
                <AddToCart showControls={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="totalPrice">
          <p>Total Price: </p>
          <p>100 kr</p>
        </div>
        <div className="cart-btn">
          <button className="checkout">Checkout</button>
          <button className="clear">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
