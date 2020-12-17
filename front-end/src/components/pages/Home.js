import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import "../HeroSection.css";
import "../Cards.css";
import "../Footer.css";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
