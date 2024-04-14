import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Navbar.css";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdOutlineArrowBack } from "react-icons/md";
import useCartStore from "../Data/cartStore";

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

  const totalQuantity = useCartStore((state) =>
    state.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  const ShoppingCart = () => (
    <NavLink to="/cart">
      <div className="shoppingCart">
        <RiShoppingBasketLine className="shopping-Basket-icon" />
        {totalQuantity > 0 ? (
          <div className="CountCartItemShow">{totalQuantity}</div>
        ) : (
          <div className="CountCartItemHidden">{totalQuantity}</div>
        )}
      </div>
    </NavLink>
  );

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
            <NavLink to="/" onClick={resetMenu}>
              <img className="logo" src={Logo} alt="logo" />
            </NavLink>
            <h1>PizzakällarN</h1>
          </div>
          <ShoppingCart />
        </div>
        <nav>
          <NavLink to="/menu" onClick={toggleMenu}>
            <button className="menuButton">Menu</button>
          </NavLink>
        </nav>
      </div>
      <div className={menuHeader ? "menuHeader" : "menuHeader hidden"}>
        <NavLink to="/" onClick={resetMenu}>
          <MdOutlineArrowBack className="backToMain-icon" />
        </NavLink>
        <NavLink to="/menu">
          <div className="menuText">
            <h2>Menu</h2>
          </div>
        </NavLink>
        <ShoppingCart />
      </div>
    </header>
  );
};

export default NavBar;
