import { create } from 'zustand';

const useAdminStore = create((set) => ({
    adminView: false,
    setAdminView: (value) => {
        console.log("setAdminView called with value:", value);
        set({ adminView: value });
    }
}));


export default useAdminStore;
