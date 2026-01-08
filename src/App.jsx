// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // homepage component
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <header style={{ padding: "20px", textAlign: "center" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/About" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/Contact" style={{ margin: "0 10px" }}>Contact</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
