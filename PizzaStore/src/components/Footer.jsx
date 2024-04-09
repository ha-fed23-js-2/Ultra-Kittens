import "../styles/Footer.css";

const Footer = () => {
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
          <p>Admin Login</p>
        </div>
        <div className="times">
          <p>Opening hours:</p>
          <p>Mon-Fri 10:30 - 22:00</p>
          <p>Sat 10:30 - Late</p>
          <p>Sun Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
