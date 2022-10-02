import React from "react";
import { Footer } from "../components/footer/footer";
import Hero from "../components/hero/hero";
import { Navbar } from "../components/navbar/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
