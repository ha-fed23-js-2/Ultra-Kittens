// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Uppdatera importen för Routes
import HomePage from './homepage';
import MenuPage from './mainmenu';
import Footer from './footer';
import Menu from './menu';


const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>PizzakällarN</h1>
          <nav>
            <ul>
              <li><Link to="/">Hem</Link></li>
              <li><Link to="/menu">Meny</Link></li>
            </ul>
          </nav>
        </header>
        <Routes> {/* Byt ut Switch mot Routes */}
          <Route path="/" element={<HomePage />} /> {/* Använd "element" istället för "component" */}
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
