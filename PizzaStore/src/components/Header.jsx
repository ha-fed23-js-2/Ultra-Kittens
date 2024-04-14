import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Header.css";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import useAdminStore from "../Data/storeAdmin.js";
import UserApi from "../Data/api.js";

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

	const showLoggedout = () => {
		return (
			<div className="headerContainer">
				<div className="shoppingCart">
					{!adminView && (
						<>
							<RiShoppingBasketLine className="shopping-Basket-icon" />
							<div className="CountCartItemShow">1</div>
						</>
					)}
					{adminView && (
						<IoLogOutOutline className="logout-icon" onClick={logout} />
					)}
				</div>
			</div>
		);
	};

	return (
		<header>
			{menuHeader ? (
				<>
					<div className="menuHeader">
						<div className="headerContainer leftContainer">
							<NavLink to="/">
								<MdOutlineArrowBack
									className="backToMain-icon"
									onClick={resetMenu}
								/>
							</NavLink>
						</div>
						<div className="headerContainer">
							<p>Menu</p>
						</div>
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
