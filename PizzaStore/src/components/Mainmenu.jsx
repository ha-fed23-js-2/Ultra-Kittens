import React from "react";
import AddToCart from "./AddToCart";
import pizzas from "../Data/data.js";
import "../styles/Mainmenu.css";

const Mainmenu = () => {
  return (
    <div className="Container">
      {pizzas.map((pizza, index) => (
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
              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <p>Price: {pizza.price} kr</p>
              <AddToCart />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainmenu;