import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../components/footer/footer";
import Hero from "../components/hero/hero";
import { Navbar } from "../components/navbar/navbar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sahil Jain | Home</title>
      </Helmet>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
