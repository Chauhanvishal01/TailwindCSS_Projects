import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Middlesection from "./components/Middle.section";
import Testimonial from "./components/Testimonial.section";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
      <Middlesection />
      <Testimonial />
    </>
  );
}

export default App;
