import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Uppdatera importen för Routes
import HomePage from "./components/Homepage.jsx";
import Mainmenu from "./components/Mainmenu.jsx";
import Cart from "./pages/cart.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Mainmenu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
