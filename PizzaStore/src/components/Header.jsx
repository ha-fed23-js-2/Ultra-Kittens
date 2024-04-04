import { Link, NavLink } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <h1>PizzakällarN</h1>
      <ul>
        <li>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/menu">Meny</NavLink>
        </li>
      </ul>
    </nav>
    // <header>
    //   <nav>
    //     <ul>
    //       <li><a href="#">Meny</a></li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Header;
