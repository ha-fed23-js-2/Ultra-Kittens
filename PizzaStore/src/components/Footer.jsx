import React, { useState } from "react"; // Importera useState från React
import Login from "./Login"; // Importera din Login-komponent
import "../styles/Footer.css";
import useAdminStore from "../Data/storeAdmin";

const Footer = ({props}) => {
const [showLogin, setShowLogin] = useState(false);

const { adminView, setAdminView } = useAdminStore()

  const handleAdminLoginClick = () => {
    setShowLogin(true);
  };

  const handleCancelClick = () => {
    setShowLogin(false); // Dölj inloggningsrutan när "Cancel" klickas
  };

  const handleLoginBtnClick = () => {
    setShowLogin(false);
    setAdminView(true)
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="address">
          <p>123 Main Street</p>
          <p>Anytown</p>
          <p>USA 12345</p>
        </div>
        <div className="admin">
          <img src="src/assets/Logo.png" alt="logo" />
          <p className="admin-login-btn" onClick={handleAdminLoginClick}>Admin Login</p>
        </div>
        <div className="times">
          <p>Opening hours:</p>
          <p>Mon-Fri 10:30 - 22:00</p>
          <p>Sat 10:30 - Late</p>
          <p>Sun Closed</p>
        </div>
      </div>
	  <div className={"login-overlay " + (showLogin ? 'login-visible' : 'login-hidden')}>
		<Login onCancel={handleCancelClick} onLoginClick={handleLoginBtnClick} />
	  </div>
    </footer>
  );
};

export default Footer;

Footer.jsx

