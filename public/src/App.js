import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact  component={Index} />
          <Route path="/cv" component={Cv} />
          <Route path="/about" component={Cv} />
          <Route  exact path="/contact" component={Contact} />
          <Route  exact path="/projects" component={Projects} />
          <Route component={Error} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
