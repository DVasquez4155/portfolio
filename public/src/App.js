
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import React from "react";
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
    <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="cv" element={<Cv />} />
          <Route path="about" element={<Cv />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route component={<Error />} />
        </Routes>
        <Footer />
    </HashRouter>
  );
}

export default App;
