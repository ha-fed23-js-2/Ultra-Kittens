import { MdOutlineEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import AddToCart from "./AddToCart";
import { addPizza, deletePizza } from "../Data/data.js";
import "../styles/Mainmenu.css";
import AddPizzaButton from "./AddPizzaButton.jsx";
import { useMenuStore } from "../Data/menuStore.js";
import useAdminStore from "../Data/storeAdmin.js";
import useCartStore from "../Data/cartStore.js";
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
      setEditPizza(null);
      setShowAddPizzaButton(true);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditPizza(null);
    setShowAddPizzaButton(true);
  };

  const handleDeletePizza = async (pizzaId) => {
    try {
      const updatedMenuItems = menuItems.filter((item) => item.id !== pizzaId);
      setMenuItems(updatedMenuItems);
      await PizzaApi.updatePizzaMenu(updatedMenuItems);
    } catch (error) {
      console.error("Error deleting pizza:", error);
    }
  };
  const cartItems = useCartStore((state) => state.cartItems);
  // Function to find quantity of a specific pizza in the cart
  const findQuantity = (pizzaId) => {
    const item = cartItems.find((item) => item.id === pizzaId);
    return item ? item.quantity : 0;
    // const findQuantity = (pizzaId) => {
    // const item = cartItems.find((item) => item.id === pizzaId);
    // return item ? item.quantity : 0;
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
                    {!adminView && (
                    <AddToCart
                      item={pizza}
                      id={pizza.id}
                      quantity={findQuantity(pizza.id)}
                    />
                  )}
                  
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
                  {/* <p>Pizzasallad och dricka ingår i alla rätter. NICE!</p> */}
                </div>
              </div>
            </div>
          ))}
      </div>
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
// import useAdminStore from "../Data/storeAdmin";
// import useCartStore from "../Data/cartStore";
// const Mainmenu = () => {
//   const [menuItems, setMenuItems] = useState(
//     useMenuStore((state) => state.allPizzas)
//   );
//   const [editPizza, setEditPizza] = useState(null);
//   const [showAddPizzaButton, setShowAddPizzaButton] = useState(true);
//   const { adminView } = useAdminStore();
//   const handleAddPizza = (newPizza) => {
//     const updatedMenuItems = [...menuItems, newPizza];
//     setMenuItems(updatedMenuItems);
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
//   const cartItems = useCartStore((state) => state.cartItems);
//   // Function to find quantity of a specific pizza in the cart
//   const findQuantity = (pizzaId) => {
//     const item = cartItems.find((item) => item.id === pizzaId);
//     return item ? item.quantity : 0;
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
//                 src={pizza.imageUrl}
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
//                   <AddToCart
//                     item={pizza}
//                     id={pizza.id}
//                     quantity={findQuantity(pizza.id)}
//                   />

//                   {adminView && (
//                     <div className="edit-icons">
//                       <MdOutlineEdit
//                         className="edit"
//                         onClick={() => handleEditPizza(pizza)}
//                       />

//                       <FaTrashAlt
//                         className="trashCan"
//                         onClick={() => handleDeletePizza(pizza.id)}
//                       />
//                     </div>
//                   )}
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

// // import "../styles/Mainmenu.css";

// // import { useState } from "react";
// // import useMenuStore from "../Data/menuStore.js";
// // import AddPizzaButton from "./AddPizzaButton";
// // import AddToCart from "./AddToCart";
// // import { MdOutlineEdit } from "react-icons/md";
// // import { FaTrashAlt } from "react-icons/fa";

// // const Mainmenu = () => {
// //   const allPizzas = useMenuStore((state) => state.allPizzas);

// //   const [editPizza, setEditPizza] = useState(false);
// //   const [showAddPizzaButton, setShowAddPizzaButton] = useState(true);

// //   const handleAddPizza = (newPizza) => {
// //     useMenuStore.getState().addOrUpdatePizza(newPizza);
// //   };

// //   const handleEditPizza = (pizza) => {
// //     setEditPizza(pizza);
// //     setShowAddPizzaButton(false);
// //   };

// //   const handleSaveEdit = (editedPizza) => {
// //     useMenuStore.getState().addOrUpdatePizza(editedPizza);
// //     // setEditPizza(true);
// //     // setShowAddPizzaButton(true);
// //   };

// //   const handleDeletePizza = (id) => {
// //     useMenuStore.getState().deletePizza(id);
// //   };

// //   return (
// //     <div className="Container">
// //       {showAddPizzaButton && <AddPizzaButton onAddPizza={handleAddPizza} />}
// //       {editPizza && (
// //         <AddPizzaButton
// //           onAddPizza={handleSaveEdit}
// //           initialPizzaData={editPizza}
// //         />
// //       )}
// //       {allPizzas.map((pizza) => (
// //         <div className="menuItemContainer" key={pizza.id}>
// //           <div className="menuItem">
// //             <img
// //               className="pizzaImage"
// //               src="src/assets/logo.png"
// //               alt="image of pizza"
// //             />
// //             <div className="menuItemInfo">
// //               <div className="name-Price">
// //                 <p>{pizza.name}</p>
// //                 <p className="priceItem">{pizza.price} kr</p>
// //               </div>
// //               <p>{pizza.info}</p>
// //               <p className="ingredients">
// //                 {Array.isArray(pizza.ingredients)
// //                   ? pizza.ingredients.join(", ")
// //                   : pizza.ingredients}
// //               </p>
// //               <div className="addToCart-editIcons">
// //                 <AddToCart showControls={true} />
// //                 <div className="edit-icons">
// //                   <MdOutlineEdit
// //                     className="edit"
// //                     onClick={() => handleEditPizza(pizza)}
// //                   />
// //                   <FaTrashAlt
// //                     className="trashCan"
// //                     onClick={() => handleDeletePizza(pizza.id)}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// export default Mainmenu;
