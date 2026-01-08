import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <header style={{ padding: "20px", textAlign: "center" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
