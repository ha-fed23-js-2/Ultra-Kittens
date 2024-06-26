let pizzas = [
	{
	  id: 1,
	  name: "Vegetariana-Marinara",
	  info: "Pizza topped with amazing vegetables",
	  ingredients: ["Tomato sauce, ", "Mozarella, ", "Tomatoes, ", "Olives, ", "Basil"],
	  price: 100,
	  imageUrl:"https://static.vecteezy.com/system/resources/previews/022/149/342/non_2x/hot-italian-pizza-cutout-png.png"
	},
	{
	  id: 2,
	  name: "Pepperoni-Toni",
	  info: "Pizza topped with a fine aged cheddar and pepperoni goodness",
	  ingredients: ["Tomato sauce, ", "Mozarella, ", "Aged Cheddar, ", "Pepperoni Sausage"],
	  price: 120,
	  imageUrl:"https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png"

	},
	{
	  id: 3,
	  name: "Olive-Oliver",
	  info: "Pizza topped with German olives and Hobbiton Salami",
	  ingredients: ["Tomato sauce, ", "Mozzarella, ", "Olives, ", "Salami"],
	  price: 110,
	  imageUrl:"https://i.ibb.co/Thx2nTM/Pizza1.png"
	}
  ];
  
  // Läs från Local Storage vid initialisering
  let pizzasFromStorage = localStorage.getItem('pizzas');
  if (pizzasFromStorage) {
	pizzas = JSON.parse(pizzasFromStorage);
  }
  
  const addPizza = (newPizza) => {
	pizzas.push(newPizza);
	localStorage.setItem('pizzas', JSON.stringify(pizzas));
  };
  
  const deletePizza = (pizzaId) => {
	pizzas = pizzas.filter(pizza => pizza.id !== pizzaId);
	localStorage.setItem('pizzas', JSON.stringify(pizzas));
  };

  const editPizza = (updatedPizza) => {
	const updatedPizzas = pizzas.map((pizza) =>
	  pizza.id === updatedPizza.id ? updatedPizza : pizza
	);
	localStorage.setItem('pizzas', JSON.stringify(updatedPizzas));
  };
  
 
  
  export { pizzas, addPizza, deletePizza, editPizza };
  export default pizzas;