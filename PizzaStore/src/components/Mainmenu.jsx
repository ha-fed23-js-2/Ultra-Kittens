import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { pizzas, addPizza } from "../Data/data.js";
import "../styles/Mainmenu.css";
import AddPizzaButton from "./AddPizzaButton.jsx";

const Mainmenu = () => {
  const [menuItems, setMenuItems] = useState(pizzas);

  const handleAddPizza = (newPizza) => {
    setMenuItems([...menuItems, newPizza]); 
    addPizza(newPizza);
  };

  return (
    <div>
      <div className="Container">
        {menuItems.map((pizza, index) => (
          <div className="menuItemContainer" key={index}>
            <div className="menuItem">
              <img
                className="pizzaImage"
                src="src/assets/logo.png"
                alt="imageofpizza"
              />
              <div className="menuItemInfo">
                <h2>{pizza.name}</h2>
                <p>{pizza.info}</p>
                <p className="ingredients">{pizza.ingredients}</p>
                <AddToCart showControls={true} />
              </div>
              <div className="price-container">
                <p>{pizza.price} kr</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddPizzaButton onAddPizza={handleAddPizza} />
    </div>
  );
};

export default Mainmenu;
