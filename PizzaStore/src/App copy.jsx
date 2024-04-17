import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Uppdatera importen för Routes
import HomePage from "./pages/Homepage.jsx";
import Mainmenu from "./pages/Mainmenu.jsx";
import Cart from "./pages/cart.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
// import NavBar from "./components/Navbar.jsx";
import UserApi from "./Data/api.js";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedin, setIsloggedin] = useState(false);

  useEffect(() => {
    (async () => {
      const loggedinStatus = await UserApi.getLoginStatus();
      console.log(loggedinStatus);
      setIsloggedin(loggedinStatus);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header
          isLoggedin={isLoggedin}
          setIsLoggedIn={(value) => {
            setIsloggedin(value);
          }}
        />
        {/* <NavBar /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Mainmenu />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
      <Footer isLoggedin={isLoggedin} />
    </Router>
  );
};

export default App;
