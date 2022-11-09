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
        <meta
          name="description"
          content="Hi, I'm Sahil, a developer, basketball player and an artist. I'm a 16 y/o high school senior at Montfort School in Delhi."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
