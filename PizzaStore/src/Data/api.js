const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php';

const UserApi = {
    updateLoginStatus: async (value) => {
        try {
           await fetch(`${baseUrl}?method=save`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    key: "ultra-kittens-login-status",
                    value: value.toString()
                })
            });
        } catch (error) {
            console.warn(error);
        }
    },

    getLoginStatus: async () => {
        try {
            const response = await fetch(`${baseUrl}?method=load&key=ultra-kittens-login-status`, {
                method: 'GET'
            });
            return response.json();

        } catch (error) {
            console.warn(error);
        }
    }
}

export default UserApi;


