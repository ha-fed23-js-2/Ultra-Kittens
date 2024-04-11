import { create } from 'zustand';

const useImageStore = create((set) => ({
  uploadedImage: localStorage.getItem('uploadedImage') 
    ? JSON.parse(localStorage.getItem('uploadedImage'))
    : null,
  setUploadedImage: (image) => {
    set({ uploadedImage: image });
    localStorage.setItem('uploadedImage', JSON.stringify(image));
  },
}));

const usePizzaStore = create((set) => ({
  pizzas: localStorage.getItem('pizzas') 
    ? JSON.parse(localStorage.getItem('pizzas'))
    : [],
  addPizza: (newPizza) => {
    set((state) => {
      const updatedPizzas = [...state.pizzas, newPizza];
      localStorage.setItem('pizzas', JSON.stringify(updatedPizzas));
      return { pizzas: updatedPizzas };
    });
  },
}));

export { useImageStore, usePizzaStore };
