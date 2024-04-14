import { create } from 'zustand';

const useAdminStore = create((set) => ({
    adminView: false,
    setAdminView: (value) => {
        set({ adminView: value });
    }
}));


export default useAdminStore;
