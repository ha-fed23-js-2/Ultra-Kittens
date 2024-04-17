import { createHashRouter } from "react-router-dom";
import Cart from "../pages/cart.jsx";
import HomePage from "../pages/Homepage.jsx";
import Menu from "../pages/Mainmenu.jsx";
import App from "../App.jsx";

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
]);

export { router };
