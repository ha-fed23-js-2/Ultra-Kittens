import { createHashRouter } from "react-router-dom";
import Cart from "../pages/cart.jsx";
import HomePage from "../pages/Homepage.jsx";
import Menu from "../pages/Mainmenu.jsx";
import App from "../App.jsx";

const router = createHashRouter([
  {
    // Om URL i adressfältet matchar denna route '/'
    path: "/",

    // Så ska Root-komponenten renderas
    element: <App />,

    // Lägg till ett element om du vill hantera felaktiga länkar
    // errorElement: <ErrorPage />,

    // Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
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
