import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Uppdatera importen för Routes
import HomePage from "./components/Homepage.jsx";
import Mainmenu from "./components/Mainmenu.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import UserApi from "./Data/api.js";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedin, setIsloggedin] = useState(false)

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
        <Header isLoggedin={isLoggedin} setIsLoggedIn={(value) => {setIsloggedin(value)}}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Mainmenu />} />
        </Routes>
        <Footer isLoggedin={isLoggedin}/>
      </div>
     
    </Router>
  );
};

export default App;
