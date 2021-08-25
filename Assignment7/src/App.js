import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Donation from "./components/Donation/Donation";
import Product from "./components/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/donation">
            <Donation />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
