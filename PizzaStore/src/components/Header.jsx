import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Header.css";
import { RiShoppingBasketLine } from "react-icons/ri";

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
      <RiShoppingBasketLine className="shopping-Basket-icon" />
    </header>
  );
};

export default Header;
