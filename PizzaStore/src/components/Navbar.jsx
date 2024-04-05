import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/menu">Meny</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
