import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { pizzas } from "../Data/data.js"; // Update the import to remove addPizza
import "../styles/Mainmenu.css";
import AddPizzaButton from "./AddPizzaButton.jsx";
// import { useImageStore } from "../Data/ImageStore.js"; // Import the named export
import { useImageStore } from "../Data/ImageStore.js";

const Mainmenu = () => {
  const [menuItems, setMenuItems] = useState(pizzas);
  const uploadedImage = useImageStore((state) => state.uploadedImage);

  const handleAddPizza = (newPizza) => {
    setMenuItems([...menuItems, newPizza]); 
  };

  return (
    <div>
      <div className="Container">
        {menuItems.map((pizza, index) => (
          <div className="menuItemContainer" key={index}>
            <div className="menuItem">
              <img
                className="pizzaImage"
                src={uploadedImage || "src/assets/logo.png"}
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
