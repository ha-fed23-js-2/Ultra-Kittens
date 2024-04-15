import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Header.css";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import useAdminStore from "../Data/storeAdmin.js";
import UserApi from "../Data/api.js";
import useCartStore from "../Data/cartStore";

const Header = ({ isLoggedin, setIsLoggedIn }) => {
  // State to manage the visibility of the headers
  const [menuHeader, setMenuHeader] = useState(false);
  const { adminView, setAdminView } = useAdminStore();
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    if (location === "/menu") {
      setMenuHeader(true);
    }
  }, []);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuHeader(!menuHeader);
    setLocation(window.location.pathname);
  };

  // Reset the menu to show the main header and hide the menu header
  const resetMenu = () => {
    setMenuHeader(false);
  };

  const logout = () => {
    setAdminView(false);
    UserApi.updateLoginStatus("Logged out");
    setIsLoggedIn("Logged out");
  };

  useEffect(() => {
    if (isLoggedin === "Logged in") {
      setAdminView(true);
    } else {
      setAdminView(false);
    }
  }, [isLoggedin]);

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

  const showLoggedout = () => {
    return (
      <div className="shoppingCart">
        {!adminView && (
          <>
            <ShoppingCart />
          </>
        )}
        {adminView && (
          <IoLogOutOutline className="logout-icon" onClick={logout} />
        )}
      </div>
    );
  };
  return (
    <header>
      {menuHeader ? (
        <>
          <div className="menuHeader">
            <NavLink to="/">
              <MdOutlineArrowBack
                className="backToMain-icon"
                onClick={resetMenu}
              />
            </NavLink>
            <NavLink to="/menu">
              {/* <div className="menuText"> */}
                <h2>Menu</h2>
              {/* </div> */}
            </NavLink>
            {showLoggedout()}
          </div>
        </>
      ) : (
        <>
          <div className="mainHeaderContainer">
            <div className="mainHeader">
              <div className="space"></div>
              <div className="logo-container">
                <NavLink to="/">
                  <img
                    className="logo"
                    src={Logo}
                    alt="logo"
                    onClick={resetMenu}
                  />
                </NavLink>
                <h1>PizzakällarN</h1>
              </div>
              {showLoggedout()}
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
        </>
      )}
    </header>
  );
};

export default Header;
