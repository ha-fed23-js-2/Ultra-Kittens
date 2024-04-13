import React, { useState, useEffect } from "react";
import "../styles/AddPizzaOverlay.css";
import useAdminStore from "../Data/storeAdmin";

const AddPizzaButton = ({ onAddPizza, initialPizzaData }) => {
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
    setNewPizzaData({
      name: "",
      info: "",
      ingredients: "",
      price: 0,
      imageUrl: "",
    });
    setShowOverlay(false);
  };

  return (
    <div>
      <button className="addPizza" onClick={() => setShowOverlay(true)}>
        {" "}
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
// AddPizzaButton.jsx

// import { useState, useEffect } from "react";
// import useMenuStore from "../Data/menuStore.js";
// import "../styles/AddPizzaOverlay.css";

// const AddPizzaButton = ({ initialPizzaData }) => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [newPizzaData, setNewPizzaData] = useState({
//     name: "",
//     info: "",
//     ingredients: "",
//     price: "",
//   });

//   useEffect(() => {
//     if (initialPizzaData) {
//       const ingredientsString = Array.isArray(initialPizzaData.ingredients)
//         ? initialPizzaData.ingredients.join(", ")
//         : initialPizzaData.ingredients;
//       setNewPizzaData({
//         ...initialPizzaData,
//         ingredients: ingredientsString,
//       });
//       setShowOverlay(true);
//     }
//   }, [initialPizzaData]);

//   const addOrUpdatePizza = useMenuStore((state) => state.addOrUpdatePizza);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPizzaData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddOrUpdate = () => {
//     addOrUpdatePizza({
//       ...newPizzaData,
//       ingredients: newPizzaData.ingredients
//         .split(", ")
//         .map((ingredient) => ingredient.trim()),
//       price: parseFloat(newPizzaData.price),
//     });
//     setNewPizzaData({ name: "", info: "", ingredients: "", price: 0 });
//     setShowOverlay(false);
//   };

//   return (
//     <div>
//       <button className="addPizza" onClick={() => setShowOverlay(true)}>
//         {initialPizzaData ? "Edit Pizza" : "Add New Pizza"}
//       </button>
//       {showOverlay && (
//         <div className="overlay">
//           <div className="form-container">
//             <form onSubmit={(e) => e.preventDefault()}>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={newPizzaData.name}
//                 onChange={handleInputChange}
//               />
//               <label>Info:</label>
//               <input
//                 type="text"
//                 name="info"
//                 value={newPizzaData.info}
//                 onChange={handleInputChange}
//               />
//               <label>Ingredients:</label>
//               <input
//                 type="text"
//                 name="ingredients"
//                 value={newPizzaData.ingredients}
//                 onChange={handleInputChange}
//               />
//               <label>Price:</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={newPizzaData.price.toString()}
//                 onChange={handleInputChange}
//               />
//               <div className="button-container">
//                 <button type="button" onClick={handleAddOrUpdate}>
//                   {initialPizzaData ? "Save Changes" : "Add Pizza"}
//                 </button>
//                 <button type="button" onClick={() => setShowOverlay(false)}>
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddPizzaButton;
