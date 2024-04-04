import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="logo" />
        <h1>PizzakällarN</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Hem</NavLink>
            <NavLink to="/menu">Meny</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
