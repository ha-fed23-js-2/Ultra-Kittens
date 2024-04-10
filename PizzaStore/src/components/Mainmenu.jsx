import { MdOutlineEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { pizzas, addPizza, deletePizza } from "../Data/data.js"; 
import "../styles/Mainmenu.css";
import AddPizzaButton from "./AddPizzaButton.jsx";

const Mainmenu = () => {
  const [menuItems, setMenuItems] = useState(pizzas);
  const [editPizza, setEditPizza] = useState(null);
  const [showAddPizzaButton, setShowAddPizzaButton] = useState(true); 

  const handleAddPizza = (newPizza) => {
    setMenuItems([...menuItems, newPizza]);
    addPizza(newPizza);
  };

  const handleEditPizza = (pizza) => {
    setEditPizza(pizza);
    setShowAddPizzaButton(false); 
  };

  const handleSaveEdit = (editedPizza) => {
    const updatedMenuItems = menuItems.map((item) =>
      item.id === editedPizza.id ? editedPizza : item
    );
    setMenuItems(updatedMenuItems);
    setEditPizza(null);
    setShowAddPizzaButton(true); 
  };

  const handleDeletePizza = (pizzaId) => {
    const updatedMenuItems = menuItems.filter((item) => item.id !== pizzaId);
    setMenuItems(updatedMenuItems);
    deletePizza(pizzaId); 
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
                <div>
                  
				<MdOutlineEdit className="trashCan"onClick={() => handleEditPizza(pizza)}/>
				  
                  
				  <FaTrashAlt className="trashCan" onClick={() => handleDeletePizza(pizza.id)}/>
                </div> 
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAddPizzaButton && ( 
        <AddPizzaButton onAddPizza={handleAddPizza} />
      )}
      {editPizza && (
        <AddPizzaButton
          onAddPizza={handleSaveEdit}
          initialPizzaData={editPizza}
        />
      )}
    </div>
  );
};

export default Mainmenu;