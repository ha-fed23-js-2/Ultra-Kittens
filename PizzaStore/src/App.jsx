import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Uppdatera importen för Routes
import HomePage from "./components/Homepage.jsx";
import MenuPage from "./components/Mainmenu.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
