import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Subnav from "./Components/Subnav";
import AboutProduct from "./Components/AboutProduct";
import Services from "./Components/Services";
import Whyus from "./Components/Whyus";
import Experties from "./Components/Experties";
import Productworks from "./Components/Productworks";
import Stockexp from "./Components/Stockexp";
import Ourblogs from "./Components/Ourblogs";
import Refersection from "./Components/Refersection";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <Banner />
          <Subnav />
          <AboutProduct />
          <Services />
          <Whyus />
          <Experties />
          <Productworks />
          <Stockexp />
          <Ourblogs />
          <Refersection />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
