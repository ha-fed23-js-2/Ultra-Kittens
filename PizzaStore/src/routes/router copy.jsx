import { createHashRouter } from "react-router-dom";
import Cart from "../pages/cart.jsx";
import HomePage from "../pages/Homepage.jsx";
import Mainmenu from "../pages/Mainmenu.jsx";
import Header from "../components/Header.jsx";
import Root from "./Root.jsx";

const router = createHashRouter([
  {
    // Om URL i adressfältet matchar denna route '/'
    path: "/",

    // Så ska Root-komponenten renderas
    element: <Root />,

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
        element: <Mainmenu />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export { router };
