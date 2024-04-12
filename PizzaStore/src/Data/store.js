import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    
    isAuthenticated: false,
    username: '',
    login: (username, password) => {
        if (username === 'Admin' && password === 'mums') {
            set({ isAuthenticated: true, username: username });
            console.log('logged in');
            return true
        } else {
            console.log('Fel användarnamn eller lösenord');
            return false
        }
    },
    logout: () => set({ isAuthenticated: false, username: '' }),
}));

export default useAuthStore