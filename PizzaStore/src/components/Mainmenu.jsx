import "../styles/Mainmenu.css";

const Mainmenu = () => {
	return (
		<div>
			<div className="menuItem">

				<div className="pizzaInfoContainer">

					<img className="pizzaImage" src="src/assets/logo.png" alt="imageofpizza" />

					<h3>Pizzaname</h3>
					<p>Ingridients</p>

					<div className="quantityContainer">
						<button className="quantityButton">-</button>
						<p>Quantity</p>
						<button className="quantityButton">+</button>
					</div>


				</div>

				<p>Price</p>
			</div>

			<ul>
				<li>Pizza 1</li>
				<li>Pizza 2</li>
				<li>Pizza 3</li>
			</ul>
		</div>
	);
};

export default Mainmenu;
