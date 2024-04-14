import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [], // Renaming to cartItems to differentiate from menu items
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Increment quantity if item exists
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        // Add new item with quantity 1 if it does not exist
        return {
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }
    });
  },
  updateQuantity: (id, change) => {
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0), // Removing item if quantity drops to 0
    }));
  },
  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;

// __________________________________________________________
// import { create } from "zustand";

// const useCartStore = create((set) => ({
//   items: [
//     {
//       id: 0,
//       name: "Pepperoni-Toni",
//       info: "Pizza topped with a fine aged cheddar and pepperoni goodness",
//       ingredients: [
//         "Tomato sauce, ",
//         "Mozarella, ",
//         "Aged Cheddar, ",
//         "Pepperoni Sausage",
//       ],
//       price: 120,
//       imageUrl:
//         "https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png",
//     },

//     {
//       id: 1,
//       name: "Pepperoni",
//       info: "Pizza topped pepperoni goodness",
//       ingredients: ["Mozarella, ", "Aged Cheddar, ", "Pepperoni Sausage"],
//       price: 120,
//       imageUrl:
//         "https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png",
//     },
//   ],
//   addToCart: (newItem) => {
//     set((state) => {
//       const existingItem = state.items.find((item) => item.id === newItem.id);
//       if (existingItem) {
//         return {
//           items: state.items.map((item) =>
//             item.id === newItem.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         return { items: [...state.items, { ...newItem, quantity: 1 }] };
//       }
//     });
//   },
//   updateQuantity: (id, change) => {
//     set((state) => ({
//       items: state.items
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: Math.max(0, item.quantity + change) }
//             : item
//         )
//         .filter((item) => item.quantity > 0),
//     }));
//   },
//   removeFromCart: (id) => {
//     set((state) => ({
//       items: state.items.filter((item) => item.id !== id),
//     }));
//   },
//   clearCart: () => set({ items: [] }),
// }));

// export default useCartStore;
