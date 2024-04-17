import { create } from "zustand";
import pizzas from "./data";
export const useMenuStore = create((set) => ({
	//ny pizza
	allPizzas: pizzas,

	// list med alla pizzor
	newPizza: (name, info, ingredients, price) =>
		set((state) => ({
			pizzas: [
				...state.pizzas,
				{
					id: generateId(state.pizzas),
					name: name,
					info: info,
					ingredients: ingredients,
					price: price,
				},
			],
		})),
}));

function generateId(pizzas) {

	let highest = 1;
	for (let i = 0; i < pizzas.length; i++) {

		if (pizzas[i].id > highest) {

			highest = pizzas[i].id;
		}
	}
	return highest + 1;
}
export default useMenuStore;

