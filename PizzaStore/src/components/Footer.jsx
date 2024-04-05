import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">

         <li>123 Main Street
          <br />
          Anytown
          <br/>
          USA 12345
         </li>
    <li><img src="src/assets/Logo.png" alt="logo" />
    <br />
    Admin Login</li>
    <li>Opening hours:
      <br />
      Mon-Fri 10:30 - 22:00
      <br />
      Sat 10:30 - Late
      <br />
      Sun Closed
    </li>
  </ul>
    </footer>
  );
};

export default Footer;