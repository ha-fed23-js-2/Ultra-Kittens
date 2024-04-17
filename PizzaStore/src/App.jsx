import "./App.css";
// import { Outlet } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
import Root from "./routes/Root.jsx";
const App = () => (
  <div className="app">
    <Root />
    {/* <Header />
    <main>
      <Outlet />
    </main>
    <Footer /> */}
  </div>
);

export default App;
