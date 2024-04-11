import { useState, useEffect } from "react";
import { useMenuStore } from "../Data/menuStore.js";
import "../styles/AddPizzaOverlay.css";

const AddPizzaButton = ({ initialPizzaData }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [newPizzaData, setNewPizzaData] = useState({
    name: "",
    info: "",
    ingredients: "",
    price: 0,
    image: null,
  });

  useEffect(() => {
    if (initialPizzaData) {
      setNewPizzaData(initialPizzaData);
      setShowOverlay(true);
    }
  }, [initialPizzaData]);

  const addNewPizza = useMenuStore((state) => state.newPizza);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setNewPizzaData({
      ...newPizzaData,
      image: imageFile,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPizzaData({
      ...newPizzaData,
      [name]: value,
    });
  };

  const handleAddClick = () => {
    addNewPizza(
      newPizzaData.id || Math.random(),
      newPizzaData.name,
      newPizzaData.info,
      newPizzaData.ingredients,
      newPizzaData.price
    );
    setNewPizzaData({
      name: "",
      info: "",
      ingredients: "",
      price: 0,
      image: null,
    });
    setShowOverlay(false);
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

// import React, { useState, useEffect } from "react";
// import "../styles/AddPizzaOverlay.css";

// const AddPizzaButton = ({ onAddPizza, initialPizzaData }) => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [newPizzaData, setNewPizzaData] = useState({
//     name: "",
//     info: "",
//     ingredients: "",
//     price: 0,
// 	image: null
//   });

//   useEffect(() => {
//     if (initialPizzaData) {
//       setNewPizzaData(initialPizzaData);
//       setShowOverlay(true);
//     }
//   }, [initialPizzaData]);

//   const handleImageChange = (event) => {   const imageFile = event.target.files[0];   setNewPizzaData ({     ...newPizzaData,     image: imageFile   }); };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPizzaData({
//       ...newPizzaData,
//       [name]: value
//     });
//   };

//   const handleAddClick = () => {
//     const newPizza = {
//       id: initialPizzaData ? initialPizzaData.id : Math.random(),
//       ...newPizzaData
//     };
//     onAddPizza(newPizza);
//     setNewPizzaData({
//       name: "",
//       info: "",
//       ingredients: "",
//       price: 0,
// 	  image: null
//     });
//     setShowOverlay(false);
//   };

//   return (
//     <div>
//       <button className="addPizza" onClick={() => setShowOverlay(true)}> Add New Pizza
//       </button>
//       {showOverlay && (
//         <div className="overlay">
//           <div className="form-container">
//             <form>
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
//                 value={newPizzaData.price}
//                 onChange={handleInputChange}
//               />

//                <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />

//               <div className="button-container">
//                 <button type="button" onClick={handleAddClick}>
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
