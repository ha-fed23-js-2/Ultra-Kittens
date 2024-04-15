import React, { useState, useEffect } from "react";
import "../styles/AddPizzaOverlay.css";
import useAdminStore from "../Data/storeAdmin";

const AddPizzaButton = ({ onAddPizza, initialPizzaData, handleCancelEdit }) => {
  const { adminView } = useAdminStore();
  const [showOverlay, setShowOverlay] = useState(false);
  const [newPizzaData, setNewPizzaData] = useState({
    name: "",
    info: "",
    ingredients: "",
    price: 0,
    imageUrl: "",
  });

  useEffect(() => {
    if (initialPizzaData) {
      setNewPizzaData(initialPizzaData);
      setShowOverlay(true);
    }
  }, [initialPizzaData]);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setNewPizzaData({ ...newPizzaData, imageUrl: imageFile });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPizzaData({
      ...newPizzaData,
      [name]: value,
    });
  };

  const handleAddClick = () => {
    const newPizza = {
      id: initialPizzaData ? initialPizzaData.id : Math.random(),
      ...newPizzaData,
    };
    onAddPizza(newPizza);
    setShowOverlay(false);
    resetForm();
  };

  const handleCancelclick = () => {
    console.log("cancel butn clicked");
    handleCancelEdit();
    setShowOverlay(false);
    resetForm();
  };

  const resetForm = () => {
    setNewPizzaData({
      name: "",
      info: "",
      ingredients: "",
      price: 0,
      imageUrl: "",
    });
  };

  return (
    <div>
      {adminView && (
        <button className="addPizza" onClick={() => setShowOverlay(true)}>
          {" "}
          Add New Pizza{" "}
        </button>
      )}
      {!adminView && <div style={{ height: "45px" }}></div>}
      {showOverlay && (
        <div className="overlay">
          <div className="form-container">
            <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newPizzaData.name}
                onChange={handleInputChange}
              />
              <label>Info:</label>
              <input
                type="text"
                name="info"
                value={newPizzaData.info}
                onChange={handleInputChange}
              />
              <label>Ingredients:</label>
              <input
                type="text"
                name="ingredients"
                value={newPizzaData.ingredients}
                onChange={handleInputChange}
              />
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={newPizzaData.price}
                onChange={handleInputChange}
              />
              <label>Image URL:</label>
              <input
                type="url"
                name="imageUrl"
                value={newPizzaData.imageUrl}
                onChange={handleInputChange}
              />

              <div className="button-container">
                <button type="button" onClick={handleAddClick}>
                  {initialPizzaData ? "Save Changes" : "Add Pizza"}
                </button>
                <button type="button" onClick={handleCancelclick}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPizzaButton;
