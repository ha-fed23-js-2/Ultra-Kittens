import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import UserApi from "../Data/api.js";
import "../App.css";

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => {
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
    <div>
      <div className="app">
        <Header
          isLoggedin={isLoggedin}
          setIsLoggedIn={(value) => {
            setIsloggedin(value);
          }}
        />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer isLoggedin={isLoggedin} />
    </div>
  );
};
export default Root;
