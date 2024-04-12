import { MdOutlineEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { pizzas, addPizza, deletePizza } from "../Data/data.js";
import "../styles/Mainmenu.css";
import AddPizzaButton from "./AddPizzaButton.jsx";
import useAdminStore from "../Data/storeAdmin.js";

const Mainmenu = () => {
  const [menuItems, setMenuItems] = useState(pizzas);
  const [editPizza, setEditPizza] = useState(null);
  const [showAddPizzaButton, setShowAddPizzaButton] = useState(true)
  
  const {adminView, setAdminView}  = useAdminStore(state => ({
    adminView: state.adminView,
    setAdminView: state.setAdminView
  }))

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
                <div className="name-Price">
                  <p>{pizza.name}</p>
                  <p className="priceItem">{pizza.price} kr</p>
                </div>
                <p>{pizza.info}</p>
                <p className="ingredients">{pizza.ingredients}</p>
                <div className="addToCart-editIcons">
                  <AddToCart showControls={true} />
                  <div className={"edit-icons is-visible" + (adminView ? 'is-visible' : 'is-hidden') }>
                    <MdOutlineEdit
                      className="edit"
                      onClick={() => handleEditPizza(pizza)}
                    />

                    <FaTrashAlt
                      className="trashCan" 
                      onClick={() => handleDeletePizza(pizza.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAddPizzaButton && <AddPizzaButton onAddPizza={handleAddPizza} />}
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
