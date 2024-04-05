import "../styles/Mainmenu.css";
import AddToCart from "./AddToCart";

const Mainmenu = () => {
  return (
    <div className="Container">
      <div className="menuItemContainer">
        <div className="menuItem">
          <img
            className="pizzaImage"
            src="src/assets/logo.png"
            alt="imageofpizza"
          />
          <div className="menuItemInfo">
            <div>
              <h3>Pizzaname</h3>
              <p>
                Ingredients: Mozarella, Tomatoes, Olives, Bell peppers and Basil
              </p>
            </div>
            <AddToCart />
          </div>
        </div>
        <p>Price: 129 kr</p>
      </div>
    </div>
  );
};

export default Mainmenu;
