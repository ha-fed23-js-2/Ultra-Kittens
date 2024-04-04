import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
	return (
		<header>
			<h1>PizzakällarN</h1>
			<ul>
				<li><Link to="/">Hem</Link></li>
				<li><Link to="/menu">Meny</Link></li>
			</ul>
		</header>
	);
};

export default Navbar;




