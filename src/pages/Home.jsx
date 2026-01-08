// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
