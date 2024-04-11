import React, { useState } from "react";
import "../styles/AddPizzaOverlay.css"; // Import the CSS file for styling the overlay

const AddPizzaButton = ({ onAddPizza }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [newPizzaData, setNewPizzaData] = useState({
    name: "",
    info: "",
    ingredients: "",
    price: 0,
    image: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPizzaData({
      ...newPizzaData,
      [name]: value
    });
  };

  const handleAddClick = () => {
    // Perform validation here before adding the pizza

    const newPizza = {
      id: Math.random(),
      ...newPizzaData
    };
    onAddPizza(newPizza); 
    setNewPizzaData({
      name: "",
      info: "",
      ingredients: "",
      price: 0,
      image: null
    });
    setShowOverlay(false); 
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataURL = reader.result;
      setNewPizzaData({
        ...newPizzaData,
        image: imageDataURL
      });
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <div>
      <button className="addPizza" onClick={() => setShowOverlay(true)}>
        Add New Pizza
      </button>
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
              <input
                type="file"
                accept="image/*" 
                onChange={handleImageChange}
              />
              {newPizzaData.image && (
                <img
                  className="preview-image"
                  src={newPizzaData.image}
                  alt="Selected Image"
                />
              )}
              <div className="button-container">
                <button type="button" onClick={handleAddClick}>
                  Add Pizza
                </button>
                <button type="button" onClick={() => setShowOverlay(false)}>
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
