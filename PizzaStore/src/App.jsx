// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Uppdatera importen för Routes
import HomePage from './components/Homepage.jsx';
import MenuPage from './components/Mainmenu.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
// import Navbar from './components/Navbar.jsx';


const App = () => {
  return (
    <Router>
      <div className="App">
	  <Header />
		{/* <Navbar /> */}
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
