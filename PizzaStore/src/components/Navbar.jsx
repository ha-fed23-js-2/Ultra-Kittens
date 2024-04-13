import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Navbar.css";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdOutlineArrowBack } from "react-icons/md";
const NavBar = () => {
  // State to manage the visibility of the headers
  const [menuHeader, setMenuHeader] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuHeader(!menuHeader);
  };

  // Reset the menu to show the main header and hide the menu header
  const resetMenu = () => {
    setMenuHeader(false);
  };

  return (
    <header>
      <div
        className={
          menuHeader ? "mainHeaderContainer hidden" : "mainHeaderContainer"
        }
      >
        <div className="mainHeader">
          <div className="space"></div>
          <div className="logo-container">
            <NavLink to="/">
              <img className="logo" src={Logo} alt="logo" onClick={resetMenu} />
            </NavLink>
            <h1>PizzakällarN</h1>
          </div>
          <NavLink to="/cart">
            <div className="shoppingCart">
              <RiShoppingBasketLine className="shopping-Basket-icon" />
              <div className="CountCartItemShow">1</div>
            </div>
          </NavLink>
        </div>
        <nav>
          <div>
            <NavLink to="/menu">
              <button className="menuButton" onClick={toggleMenu}>
                Menu
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
      <div className={menuHeader ? "menuHeader" : "menuHeader hidden"}>
        <NavLink to="/">
          <MdOutlineArrowBack className="backToMain-icon" onClick={resetMenu} />
        </NavLink>
        <p>Menu</p>
        <div className="shoppingCart">
          <NavLink to="/cart">
            <div className="shoppingCart">
              <RiShoppingBasketLine className="shopping-Basket-icon" />
              <div className="CountCartItemShow">1</div>
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
