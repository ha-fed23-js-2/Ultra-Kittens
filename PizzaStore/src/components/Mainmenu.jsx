import "../styles/Mainmenu.css";

import { useState } from "react";
import useMenuStore from "../Data/menuStore.js";
import AddPizzaButton from "./AddPizzaButton";
import AddToCart from "./AddToCart";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const Mainmenu = () => {
  const allPizzas = useMenuStore((state) => state.allPizzas);

  const [editPizza, setEditPizza] = useState(false);
  const [showAddPizzaButton, setShowAddPizzaButton] = useState(true);

  const handleAddPizza = (newPizza) => {
    useMenuStore.getState().addOrUpdatePizza(newPizza);
  };

  const handleEditPizza = (pizza) => {
    setEditPizza(pizza);
    setShowAddPizzaButton(false);
  };

  const handleSaveEdit = (editedPizza) => {
    useMenuStore.getState().addOrUpdatePizza(editedPizza);
    // setEditPizza(true);
    // setShowAddPizzaButton(true);
  };

  const handleDeletePizza = (id) => {
    useMenuStore.getState().deletePizza(id);
  };

  return (
    <div className="Container">
      {showAddPizzaButton && <AddPizzaButton onAddPizza={handleAddPizza} />}
      {editPizza && (
        <AddPizzaButton
          onAddPizza={handleSaveEdit}
          initialPizzaData={editPizza}
        />
      )}
      {allPizzas.map((pizza) => (
        <div className="menuItemContainer" key={pizza.id}>
          <div className="menuItem">
            <img
              className="pizzaImage"
              src="src/assets/logo.png"
              alt="image of pizza"
            />
            <div className="menuItemInfo">
              <div className="name-Price">
                <p>{pizza.name}</p>
                <p className="priceItem">{pizza.price} kr</p>
              </div>
              <p>{pizza.info}</p>
              <p className="ingredients">
                {Array.isArray(pizza.ingredients)
                  ? pizza.ingredients.join(", ")
                  : pizza.ingredients}
              </p>
              <div className="addToCart-editIcons">
                <AddToCart showControls={true} />
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainmenu;

// import { MdOutlineEdit } from "react-icons/md";
// import { FaTrashAlt } from "react-icons/fa";
// import { useState } from "react";
// import AddToCart from "./AddToCart";
// import { addPizza, deletePizza } from "../Data/data.js";
// import "../styles/Mainmenu.css";
// import AddPizzaButton from "./AddPizzaButton.jsx";
// import { useMenuStore } from "../Data/menuStore.js";

// const Mainmenu = () => {
//   // const [menuItems, setMenuItems] = useState(pizzas);
//   const menuItems = useMenuStore((state) => state.allPizzas);
//   const [editPizza, setEditPizza] = useState(null);
//   const [showAddPizzaButton, setShowAddPizzaButton] = useState(true);

//   const handleAddPizza = (newPizza) => {
//     setMenuItems([...menuItems, newPizza]);
//     addPizza(newPizza);
//   };

//   const handleEditPizza = (pizza) => {
//     setEditPizza(pizza);
//     setShowAddPizzaButton(false);
//   };

//   const handleSaveEdit = (editedPizza) => {
//     const updatedMenuItems = menuItems.map((item) =>
//       item.id === editedPizza.id ? editedPizza : item
//     );
//     setMenuItems(updatedMenuItems);
//     setEditPizza(null);
//     setShowAddPizzaButton(true);
//   };

//   const handleDeletePizza = (pizzaId) => {
//     const updatedMenuItems = menuItems.filter((item) => item.id !== pizzaId);
//     setMenuItems(updatedMenuItems);
//     deletePizza(pizzaId);
//   };

//   return (
//     <div>
//       <div className="Container">
//         {showAddPizzaButton && <AddPizzaButton onAddPizza={handleAddPizza} />}
//         {editPizza && (
//           <AddPizzaButton
//             onAddPizza={handleSaveEdit}
//             initialPizzaData={editPizza}
//           />
//         )}
//         {menuItems.map((pizza) => (
//           <div className="menuItemContainer" key={pizza.id}>
//             <div className="menuItem">
//               <img
//                 className="pizzaImage"
//                 src="src/assets/logo.png"
//                 alt="imageofpizza"
//               />
//               <div className="menuItemInfo">
//                 <div className="name-Price">
//                   <p>{pizza.name}</p>
//                   <p className="priceItem">{pizza.price} kr</p>
//                 </div>
//                 <p>{pizza.info}</p>
//                 <p className="ingredients">{pizza.ingredients}</p>
//                 <div className="addToCart-editIcons">
//                   <AddToCart showControls={true} />
//                   <div className="edit-icons">
//                     <MdOutlineEdit
//                       className="edit"
//                       onClick={() => handleEditPizza(pizza)}
//                     />

//                     <FaTrashAlt
//                       className="trashCan"
//                       onClick={() => handleDeletePizza(pizza.id)}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mainmenu;
