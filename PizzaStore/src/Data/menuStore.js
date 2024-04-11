import { create } from "zustand";
import pizzas from "./data";
export const useMenuStore = create((set) => ({
  //ny pizz
  allPizzas: pizzas,

  // list med alla pizzor
  newPizza: (id, name, info, ingredients, price) =>
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
      ], // state.friends
    })), // newFriend
}));

function generateId(pizzas) {
  // console.log('generateId friends:', friends);
  let highest = 1;
  for (let i = 0; i < pizzas.length; i++) {
    // console.log('generateId inuti loopen', friends[i], highest);
    if (pizzas[i].id > highest) {
      // console.log('generateId villkor', friends[i], highest);
      highest = pizzas[i].id;
    }
  }
  return highest + 1;
}
// removeFriend: (id) => set(state => ({
//     friends: state.friends.filter(friend => friend.id !== id)
// })),

// editFriend: (id, name, email) => set(state => {
//     const friendsCopy = [ ...state.friends ]
//     const index = friendsCopy.findIndex(friend => friend.id === Number(id))
//     const changedFriend = { id, name, email }
//     friendsCopy[index] = changedFriend

//     // om man använder API: skicka "save" med friendsCopy till API:et
//     return {
//         friends: friendsCopy
//     }
// })
// })),
// tar bort
//edit

// isAuthenticated: false,
// username: '',
// login: (username, password) => {
//     // Jämför användarens inmatade användarnamn och lösenord med fördefinierade värden
//     if (username === 'Admin' && password === 'mums') {
//         set({ isAuthenticated: true, username: username });
//     } else {
//         console.log('Fel användarnamn eller lösenord');
//     }
// },
// logout: () => set({ isAuthenticated: false, username: '' }),
