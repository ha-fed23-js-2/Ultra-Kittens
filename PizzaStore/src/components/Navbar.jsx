import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      {/* <ul>
        <li>
          <NavLink to="/menu">Meny</NavLink>
        </li>
      </ul> */}
      <div>
        
        <NavLink to="/menu"><button className="menuButton">Menu</button></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
