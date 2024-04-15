import { MdOutlineEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import AddToCart from "./AddToCart";
import { addPizza, deletePizza } from "../Data/data.js";
import "../styles/Mainmenu.css";
import AddPizzaButton from "./AddPizzaButton.jsx";
import { useMenuStore } from "../Data/menuStore.js";
import useAdminStore from "../Data/storeAdmin.js";
import PizzaApi from "../Data/pizzaApi.js";

const Mainmenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editPizza, setEditPizza] = useState(null);
  const [showAddPizzaButton, setShowAddPizzaButton] = useState(true);
  const { adminView } = useAdminStore();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menu = await PizzaApi.getPizzaMenu();
        setMenuItems(menu);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  const handleAddPizza = async (newPizza) => {
    try {
      const updatedMenuItems = [...menuItems, newPizza];
      setMenuItems(updatedMenuItems);
      await PizzaApi.updatePizzaMenu(updatedMenuItems);
      setEditPizza(null);
      setShowAddPizzaButton(true);
      console.log("showAddPizzaButton set to true:", showAddPizzaButton);
    } catch (error) {
      console.error("Error adding pizza:", error);
    }
  };

  const handleEditPizza = (pizza) => {
    setEditPizza(pizza);
    setShowAddPizzaButton(false);
  };

  const handleSaveEdit = async (editedPizza) => {
    try {
      const updatedMenuItems = menuItems.map((item) =>
        item.id === editedPizza.id ? editedPizza : item
      );
      setMenuItems(updatedMenuItems);
      await PizzaApi.updatePizzaMenu(updatedMenuItems);
      setEditPizza(null)
      setShowAddPizzaButton(true)
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditPizza(null);
    setShowAddPizzaButton(true)
  }

  const handleDeletePizza = async (pizzaId) => {
    try {
      const updatedMenuItems = menuItems.filter((item) => item.id !== pizzaId);
      setMenuItems(updatedMenuItems);
      await PizzaApi.updatePizzaMenu(updatedMenuItems);
    } catch (error) {
      console.error("Error deleting pizza:", error);
    }
  };

  return (
    <div>
      <div className="Container">
        {showAddPizzaButton && (
          <AddPizzaButton
            onAddPizza={handleAddPizza}
            setShowAddPizzaButton={setShowAddPizzaButton}
            handleCancelEdit={handleCancelEdit}
          />
        )}
        {editPizza && (
          <AddPizzaButton
            onAddPizza={handleSaveEdit}
            initialPizzaData={editPizza}
            handleCancelEdit={handleCancelEdit}

          />
        )}
        {Array.isArray(menuItems) &&
          menuItems.map((pizza, index) => (
            <div className="menuItemContainer" key={index}>
              <div className="menuItem">
                <img
                  className="pizzaImage"
                  src={pizza.imageUrl}
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
                    {adminView && (
                      <div className="edit-icons">
                        <MdOutlineEdit
                          className="edit"
                          onClick={() => handleEditPizza(pizza)}
                        />

                        <FaTrashAlt
                          className="trashCan"
                          onClick={() => handleDeletePizza(pizza.id)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Mainmenu;
