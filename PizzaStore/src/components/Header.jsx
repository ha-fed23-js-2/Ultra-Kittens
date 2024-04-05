import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Header.css";
import { RiShoppingBasketLine } from "react-icons/ri";
// import Quantity from "./Counter";

const Header = () => {
  return (
    <header>
      <div className="space"></div>
      <div className="logo-container">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="logo" />
        </NavLink>

        <h1>PizzakällarN</h1>
      </div>
      <div className="shoppingCart">
        <RiShoppingBasketLine className="shopping-Basket-icon" />
        <div className="CountCartItemShow">0</div>
      </div>
    </header>
  );
};

export default Header;
