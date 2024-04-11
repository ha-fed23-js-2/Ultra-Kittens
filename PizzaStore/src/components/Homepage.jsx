import "../styles/Homepage.css";
import ContactForm from "./ContactForm";
import Login from "./Login"

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="about-us-container">
        <p>
          Welcome to PizzakällarN, where passion for pizza meets tradition in
          every slice. Nestled in the heart of our community, PizzakällarN has
          been serving up mouthwatering pizzas crafted with love and the finest
          ingredients since 2024. 
        </p>
        <p>Our story began with a simple idea: to create
          authentic, delicious pizzas that bring people together. From our
          signature crispy crusts to our rich, flavorful sauces, each pizza is a
          testament to our commitment to quality and taste.</p>
      </div>
      <h2>Contact us!</h2>
      <ContactForm />
	  {/* <Login /> */}
    </div>
  );
};

export default HomePage;
