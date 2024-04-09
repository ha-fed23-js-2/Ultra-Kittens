const pizzas = [
	{
	  id: 1,
	  name: "Vegetariana-Marinara",
	  info: "Pizza topped with amazing vegetables",
	  ingredients: ["Tomato sauce, ", "Mozarella, ", "Tomatoes, ", "Olives, ", "Bell Peppers, ", "Basil"],
	  price: 100
	},
	{
	  id: 2,
	  name: "Pepperoni-Toni",
	  info: "Pizza topped with a fine aged cheddar and pepperoni goodness",
	  ingredients: ["Tomato sauce, ", " Mozarella, ", " Aged Cheddar, ", " Pepperoni Sausage"],
	  price: 120
	},
	{
	  id: 3,
	  name: "Olive-Oliver",
	  info: "Pizza topped with German olives and Hobbiton tuna",
	  ingredients: ["Tomato sauce, ", " Mozzarella, ", " Olives, ", " Tuna"],
	  price: 110
	}
  ];

  const addPizza = (newPizza) => {
    pizzas.push(newPizza);
  };
  
  export { pizzas, addPizza }; 
  export default pizzas;