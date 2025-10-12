import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Footer from "./component/footer";
import Portofolio from "./component/portofolio";
function App() {
  return (
    <>
      <Router>
        {" "}
        <section id="navbar">
          <Navbar />
        </section>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portofolio">
          <Portofolio />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;
