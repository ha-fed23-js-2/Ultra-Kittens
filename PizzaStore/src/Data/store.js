import create from 'zustand';

export const useAuthStore = create((set) => ({
    isAuthenticated: false,
    username: '',
    login: (username, password) => {
        // Jämför användarens inmatade användarnamn och lösenord med fördefinierade värden
        if (username === 'Admin' && password === 'mums') {
            set({ isAuthenticated: true, username: username });
        } else {
            console.log('Fel användarnamn eller lösenord');
        }
    },
    logout: () => set({ isAuthenticated: false, username: '' }),
}));