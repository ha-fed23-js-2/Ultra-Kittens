const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php';

const PizzaApi = {
    updatePizzaMenu: async (value) => {
        try {
           await fetch(`${baseUrl}?method=save`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    key: "ultra-kittens-pizza-menu",
                    value: value
                })
            });
        } catch (error) {
            console.warn(error);
        }
    },

    getPizzaMenu: async () => {
        try {
            const response = await fetch(`${baseUrl}?method=load&key=ultra-kittens-pizza-menu`, {
                method: 'GET'
            });
            return response.json();

        } catch (error) {
            console.warn(error);
        }
    }
}

export default PizzaApi;