import React, { useState } from "react";
import "../styles/AddPizzaOverlay.css";
import useAdminStore from "../Data/storeAdmin";
import Joi from "joi";

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
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); 
  const [buttonClicked, setButtonClicked] = useState(false); 

  const validateInputs = () => {
    const schema = Joi.object({
      name: Joi.string().required().label("Name"),
      info: Joi.string().required().label("Info"),
      ingredients: Joi.string().required().label("Ingredients"),
      price: Joi.number().required().label("Price"),
      imageUrl: Joi.string().required().label("Image URL"),
    });

    const { error } = schema.validate(newPizzaData, { abortEarly: false });

    if (!error) {
      setErrors({});
      setIsValid(true);
      return true;
    }

    const newErrors = {};
    error.details.forEach((err) => {
      newErrors[err.context.label] = err.message;
    });
    setErrors(newErrors);
    setIsValid(false);
    return false;
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setNewPizzaData({ ...newPizzaData, imageUrl: imageFile });
    validateInputs(); 
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPizzaData({
      ...newPizzaData,
      [name]: value,
    });
    validateInputs();
  };

  const handleInputBlur = (name) => {
    let errorMessage = "";
    if (!newPizzaData[name]) { 
      errorMessage = `Please enter ${name}`;
    }
    setErrors({ ...errors, [name]: errorMessage });
    validateInputs();
  };

  const handleAddClick = () => {
    setButtonClicked(true);
    validateInputs(); 
    if (isValid) {
      const newPizza = {
        id: initialPizzaData ? initialPizzaData.id : Math.random(),
        ...newPizzaData,
      };
      onAddPizza(newPizza);
      setShowOverlay(false);
      resetForm();
    }
  };

  const handleCancelClick = () => {
    console.log("cancel button clicked");
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
    setErrors({});
    setIsValid(false);
    setButtonClicked(false);
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
                onBlur={() => handleInputBlur("name")}
                className={errors.name && buttonClicked && "error"}
                data-error={errors.name}

              />
              <label>Info:</label>
              <input
                type="text"
                name="info"
                value={newPizzaData.info}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("info")}
                className={errors.info && buttonClicked && "error"}
                data-error={errors.info}
              />
              <label>Ingredients:</label>
              <input
                type="text"
                name="ingredients"
                value={newPizzaData.ingredients}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("ingredients")}
                className={errors.ingredients && buttonClicked && "error"}
                data-error={errors.ingredients}
              />
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={newPizzaData.price}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("price")}
                className={errors.price && buttonClicked && "error"}
                data-error={errors.price}
              />
              <label>Image URL:</label>
              <input
                type="url"
                name="imageUrl"
                value={newPizzaData.imageUrl}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("imageUrl")}
                className={errors.imageUrl && buttonClicked && "error"}
                data-error={errors.imageUrl}
              />

              <div className="button-container">
                <button type="button" onClick={handleAddClick}>
                  {initialPizzaData ? "Save Changes" : "Add Pizza"}
                </button>
                <button type="button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
              {buttonClicked && !isValid && <p>Please fill out the form.</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPizzaButton;
